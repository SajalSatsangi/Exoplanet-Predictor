const { exec } = require('child_process');
const path = require('path');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { features } = req.body;

    // Save the features to a temporary file
    const featuresFilePath = path.join('/tmp', 'features.json');
    require('fs').writeFileSync(featuresFilePath, JSON.stringify(features));

    // Run the Python script
    exec(`python3 ${path.join(__dirname, 'predict.py')}`, (error, stdout, stderr) => {
      if (error) {
        return res.status(500).json({ error: stderr });
      }

      res.status(200).json(JSON.parse(stdout));
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
