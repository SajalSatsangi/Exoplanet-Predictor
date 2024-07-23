from flask import Flask, request, jsonify
import joblib
import numpy as np
import os

app = Flask(__name__)

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
    
if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
