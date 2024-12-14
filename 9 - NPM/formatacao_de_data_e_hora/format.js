const format = require('date-format');

let date = format.asString('hh:mm:ss.SSS', new Date ());
console.log(date);