const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const config = require("config");
const cors = require('cors'); 

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

const port = config.get("PORT"); 
 app.use(cors());
 
require('./routes/index')(app); 
 
app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.listen(port, () =>
  console.log('Express server is running on localhost:',port)
);