const express = require('express');
const app = express();

// Handle requests for static files
app.use(express.static('app'));

// Start the server
app.listen('8000', () => {
   // eslint-disable-next-line no-console
   console.log('Local DevServer Started on port 8000...');
});