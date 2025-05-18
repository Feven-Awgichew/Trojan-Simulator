const express = require('express');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Endpoint to run the Python script
app.post('/create_fake_file', (req, res) => {
   
    exec((__dirname,'python create_file.py'), (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            //return res.status(500).send('Error executing script');
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
           // return res.status(500).send('Error in script');
        }
        console.log(`stdout: ${stdout}`);
        //res.send('Fake file created successfully.');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});