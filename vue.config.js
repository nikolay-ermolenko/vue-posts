const BundleAnalyzerPlugin 
  = require ('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  runtimeCompiler: true,
  publicPath: './',
  outputDir: 'docs',
  transpileDependencies: [
    'vuetify',
  ],
  configureWebpack: { 
    plugins: (() => {
      var res = [];

      if (process.env.NODE_ENV === 'production') {
        res.push(new BundleAnalyzerPlugin ({
          analyzerMode: 'static',
          openAnalyzer: false,
        }));
      }
      return res;
    })()
  }, 
};
