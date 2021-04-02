const webpack = require('webpack')

module.exports = (cfg, opt) => {

  //html loader for angularjs templates
  cfg.module.rules.push(
    {
      test: /\.html$/,
      use: [
        {loader: 'html-loader', options: {attrs: false}}
      ]
    }
  )

  // strict angularjs di
  cfg.module.rules.unshift({
    test: /\.m?(ts|js)$/,
    exclude: /(node_modules|bower_components)/,
    use: [{
      loader: 'babel-loader',
      options: {
        "presets": ["@babel/preset-env"],
        "plugins": ["angularjs-annotate"]
      }
    }]
  })

  return cfg
}
