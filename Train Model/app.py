from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)

# Load the trained model
model = joblib.load('random_forest_model.pkl')
@app.route('/predict', methods=['POST'])
def predict():
    # Get the JSON data from the request
    data = request.get_json()
    # Convert data into a numpy array (assuming the data is in the correct format)
    features = np.array(data['features']).reshape(1, -1)
    # Make prediction
    prediction = model.predict(features)
    # Return the prediction as a JSON response
    return jsonify({'prediction': int(prediction[0])})

if __name__ == '__main__':
    app.run(debug=True)
