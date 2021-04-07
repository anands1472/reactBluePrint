const express = require('express');
const sampleCall = require('./sampleCall');
const userData = require('./userData');

module.exports = function (app) {
  app.use(express.json({limit: '50mb'}));
  app.use(express.urlencoded({extended: true})); // to log request into terminal
  app.use('/dummySampleCall', sampleCall);
  app.use('/api/userDataCall',userData)
};
