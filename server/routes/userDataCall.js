const express = require('express');
const router = express.Router();
const axios = require('axios');
const config = require('config');

// in order to use middleware auth we have to provide
// router.get('/', [auth,admin], async(req,res,next))

const replaceObj = () => {
  const visited = new WeakSet();
  return (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (visited.has(value)) {
        return;
      }
      visited.add(value);
    }
    return value;
  };
};

router.get('/', async (req, res, next) => {
  // res.send({ title: 'title' })
  const AUTH_URL = config.get('DATABASE_PORT');
  const url = encodeURI(`http://localhost:${AUTH_URL}/userData`);
  // logger.debug(`calling ${url}`);
  axios
    .get(url)
    .then(body => {
      // const data = JSON.parse(body);
      res.send(JSON.stringify(body, replaceObj()));
    })
    .catch(next);
});

module.exports = router;
