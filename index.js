const express = require('express');
const app = express();
const port = 9000;

app.get('/', (req, res) => {

    /* 
    
    To be added with Pieces 
    
    */
    
    res.send('<ul>  <li>This is </li> <li>An Unordered </li><li>List</li></ul>');

});

app.listen(port, () => {


    /* 
    
    To be added with Code runner

    */

    var result  = '';
for(var i = 1; i < 11; i += 1) {
  result = result + i;
}
console.log(result)

    console.log(`Listening on port ${port}`);

    /* 
    
    To be added with Turbo Console Log
    
    const title = 'My VS Code extensions';
     console.log(`Listening on port `);
    const extension = 'Pieces';

    */
 
});
