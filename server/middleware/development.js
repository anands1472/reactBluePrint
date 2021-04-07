const { resolve } = require('path');
const os = require('os');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const logger = require('../logger');
const webpackConfig = require('../../../config/webpack.config.dev');
const complier = webpack(webpackConfig);

let watchOptions = {};

if (os.platform() !== 'win32') {
  watchOptions = {
    aggregateTimeout: 300,
    poll: 1000,
    ignore: ['node_modules', '.idea', 'build', 'build-dev']
  };
}

module.exports = function setup(app) {
  app.use(
    webpackDevMiddleware(complier, {
      logger,
      publicPath: webpackConfig.output.publicPath,
      stats: {
        colors: true
      },
      watchOptions
    })
  );

  app.use(webpackHotMiddleware(complier));
  app.get('*', (req, res) => res.sendFile(resolve(__dirname, '..', '..', '..', 'build-dev', 'client', 'index.html')));
};
