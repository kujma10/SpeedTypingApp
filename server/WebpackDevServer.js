

var port = process.env.PORT || 3000;
var host = 'localhost';

if(process.env.NODE_ENV !== 'production') {

  var webpack = require('webpack');
  var WebpackDevServer = require('webpack-dev-server');
  var config = require('../webpack.config');

  const server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    historyApiFallback: true
  })

  module.exports.start = () => {
    server.listen(port, host, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Listening at ${host}:${port}`);
      }
    });
  }
}



