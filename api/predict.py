from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(_name_)

# Load the trained model
model = joblib.load('random_forest_model.pkl')

@app.route('/api/predict', methods=['POST'])
def predict():
    try:
        # Get the JSON data from the request
        data = request.get_json()
        # Convert data into a numpy array
        features = np.array(data['features']).reshape(1, -1)
        
        # Check if the number of features matches the model's expectation
        if features.shape[1] != model.n_features_in_:
            return jsonify({'error': f'Expected {model.n_features_in_} features, got {features.shape[1]}'}), 400

        # Make prediction
        prediction = model.predict(features)
        # Return the prediction as a JSON response
        return jsonify({'prediction': int(prediction[0])})

    except Exception as e:
        return jsonify({'error': str(e)}), 500