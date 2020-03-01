'use strict'
const excel = require('convert-excel-to-json');
const fs = require('fs');
const path = require('path');
const parseOrd = require('./parseOrder');
//enums
const InputTypeEnum = require('./InputTypeEnum');
const AnswerTypeEnum = require('./AnswerTypeEnum');

//res from client
let inputName = "tmp.xlsm";
let extname = path.extname(inputName);
let tmp = "tmp"+extname;

//rename to tmp.[extname]
fs.rename(inputName, tmp, (err) => {
  if (err == null) console.log("Done"); 
  else console.log("Failed");
});

const result = excel({
  sourceFile: tmp
});


let parsOr = new parseOrd(result["Orders"]);

console.log(parsOr.toConfig());

