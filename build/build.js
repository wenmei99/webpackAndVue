
const rm = require('rimraf');
const path = require('path');
const webpack = require('webpack');
const config = require('./config/index');
const webpackConfig = require('./webpack.prod.conf');

console.log(webpackConfig);



rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), (err) => {
  if (err) throw err;
  webpack(webpackConfig, (err, stats) => {
    if (err) throw err;
    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
        chunks: false,
        chunkModules: false,
      }) + '\n\n'
    );

    if (stats.hasErrors()) {
      process.exit(1);
    }
  });
});
