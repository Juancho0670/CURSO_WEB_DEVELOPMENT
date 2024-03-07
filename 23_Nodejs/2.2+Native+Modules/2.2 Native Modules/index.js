
const fs = require("fs");

/*
fs.writeFile('message_juan.txt', "hola Juan", (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
}); 
*/

fs.readFile('message_juan.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 