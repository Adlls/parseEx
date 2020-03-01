'use strict'
const excel = require('convert-excel-to-json');
const fs = require('fs');
const path = require('path');
const parseOrd = require('./parseOrder');
const express = require('express');
const app = express();
const multer = require('multer');
//enums
const InputTypeEnum = require('./InputTypeEnum');
const AnswerTypeEnum = require('./AnswerTypeEnum');

app.use(express.static(__dirname));
app.use(multer({dest:"uploads"}).single("file"));
app.post('/', (req, res, next) => {
  let filedata = req.file;
  let namefile = filedata.filename;

  const result = excel({
    sourceFile: "uploads/"+namefile
  });

  let parsOr = new parseOrd(result["Orders"]);
  let jsonParse = parsOr.toConfig();
  console.log(parsOr.toConfig());
  fs.unlinkSync("uploads/"+namefile);
  res.send(jsonParse);
 
});

app.listen(3000);


