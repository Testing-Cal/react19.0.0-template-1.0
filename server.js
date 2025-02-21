const express = require('express');
const path = require('path');

const app = express();
const port = process.env.port || 3013; // Use the provided PORT or a default one

// Serve static files from the build folder under the '/test' base path
if(process.env.context === '/'){
  app.use( '/', express.static(path.join(__dirname, 'build')));

  // Handle all other requests
  app.get( '/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}else{
  app.use( process.env.context + '/', express.static(path.join(__dirname, 'build')));

  // Handle all other requests
  app.get( process.env.context + '/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
