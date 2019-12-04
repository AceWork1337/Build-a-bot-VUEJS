module.exports = {
  // configureWebpack: {
  //   module: {
  //     rules: [
  //       {
  //         test:/\.coffee$/,
  //         use: ['coffee-loader'],
  //       },
  //     ],
  //   },
  // },
  //vue inspect --mode=production > webpack.config.js
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
      },
    },
  },
};
