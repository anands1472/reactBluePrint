const express = require('express');
const sampleCall = require('./sampleCall');
const userData = require('./userDataCall');
const usaData =require('./usaDataCall');


module.exports = function (app) {
  app.use(express.json({limit: '50mb'}));
  app.use(express.urlencoded({extended: true})); // to log request into terminal
  app.use('/api/dummySampleCall', sampleCall);
  app.use('/api/userDataCall',userData)
  app.use('/api/usaDataCall',usaData)
};
