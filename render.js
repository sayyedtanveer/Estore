const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

// Load your EJS file
const filePath = path.join(__dirname, 'views/index/index.ejs');
const template = fs.readFileSync(filePath, 'utf-8');


// Render the EJS file
ejs.render(template, {}, (err, str) => {
  if (err) {
    console.error('Error rendering EJS:', err);
  } else {
    console.log('EJS Rendered Successfully');
  }
});
