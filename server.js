const express = requiere('express');
const app = express();
const path = requiere('path');

app.usr(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 8080);
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
})

console.log('Console listening!');


