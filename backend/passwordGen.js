const bcrypt = require('bcrypt')

let pswrd = bcrypt.hashSync('top2', 9);

console.log(pswrd)