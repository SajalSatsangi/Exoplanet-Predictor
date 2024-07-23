const { spawn } = require('child_process');
const path = require('path');

module.exports = (req, res) => {
  const python = spawn('python', [path.join(__dirname, 'predict.py')]);
  
  let dataString = '';

  python.stdout.on('data', (data) => {
    dataString += data.toString();
  });

  python.stderr.on('data', (data) => {
    console.error(`Python stderr: ${data}`);
  });

  python.on('close', (code) => {
    console.log(`Python process closed with code ${code}`);
    res.status(200).json(JSON.parse(dataString));
  });

  python.stdin.write(JSON.stringify(req.body));
  python.stdin.end();
};