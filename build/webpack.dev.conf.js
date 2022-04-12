const vueLoaderPlugin = require("vue-loader/lib/plugin");
(webpack = require("webpack")),
  (path = require("path")),
  (merge = require("webpack-merge")),
  (HtmlWebpackPlugin = require("html-webpack-plugin")),
  (FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin")),
  (InsertHtmlSiteConfigPlugin = require("./webpack.config.plugin")),
  (envConfig = require("../config/envConfig")),
  (baseConfig = require("./webpack.base.conf")),
  ({ srcPath, assets, postcssLoaderOptions } = require("../config"));

// add hot-reload related code to entry chunks
Object.keys(baseConfig.entry).forEach(function(name) {
  baseConfig.entry[name] = ["webpack-hot-middleware/client"].concat(
    baseConfig.entry[name]
  );
});

module.exports = merge(baseConfig, {
  mode: "development",
  output: {
    filename: `${assets}/js/[name].js`,
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // creates style nodes from JS strings | translates CSS into CommonJS | compiles Sass to CSS
        include: srcPath,
        use: [
          "style-loader",
          "css-loader",
          postcssLoaderOptions,
          "sass-loader",
          {
            loader: "sass-resources-loader",
            options: {
              resources: path.resolve(
                __dirname,
                "../src/style/base/mixin.scss"
              ),
            },
          },
        ],
        // include: paths.appSrc,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", postcssLoaderOptions],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        include: srcPath,
        options: {
          loaders: {
            css: ["vue-style-loader"],
          },
        },
      },
    ],
  },
  devtool: "#cheap-module-eval-source-map", // #eval-source-map
  plugins: [
    new HtmlWebpackPlugin({
      template: `${srcPath}/templates/index.ejs`,
      //filename: `${key}.html`,
      filename: "index.html",
      favicon: "./src/images/favicon.ico",
      chunks: ["manifest", "vendor", "common", "index"],
      hash: false,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    // 自定义html插件处理系统常量配置
    new InsertHtmlSiteConfigPlugin({
      variableKey: "ENV_CONFIG",
      variableValue: envConfig.dev || {},
    }),
    new vueLoaderPlugin(),
    // 配置环境变量 --开发环境
    new webpack.DefinePlugin({
      isMockEnv: false,
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin(),
  ],
});
