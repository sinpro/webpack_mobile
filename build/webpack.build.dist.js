const vueLoaderPlugin = require("vue-loader/lib/plugin");
(webpack = require("webpack")),
  (path = require("path")),
  (merge = require("webpack-merge")),
  (HtmlWebpackPlugin = require("html-webpack-plugin")),
  (BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin),
  (MiniCssExtractPlugin = require("mini-css-extract-plugin")),
  (UglifyJsPlugin = require("uglifyjs-webpack-plugin")),
  (OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin")),
  (CopyWebpackPlugin = require("copy-webpack-plugin")),
  ({ CleanWebpackPlugin } = require("clean-webpack-plugin")),
  (AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin")),
  (InsertHtmlSiteConfigPlugin = require("./webpack.config.plugin")),
  (baseConfig = require("./webpack.base.conf")),
  (envConfig = require("../config/envConfig")),
  ({
    srcPath,
    assets,
    hashLen,
    postcssLoaderOptions,
    imagesPublicPath,
    publicPath,
    dllStaticList,
  } = require("../config")),
  (NODE_ENV = process.env.NODE_ENV), // node环境配置   production|development|...
  (NODE_MODE = process.env.NODE_MODE); // node打包环境配置 dev|fat|uat|prod|...

let bundleAnalyzerPlugin = {
  // plugins: process.env.npm_config_report ? [new BundleAnalyzerPlugin()] : []
  plugins:
    process.env.NODE_TYPE === "watch" ? [new BundleAnalyzerPlugin()] : [], //分析js占比的弹出
};

// dll方式处理的资源
const dllStaticPlugins = {
  plugins: [],
};
for (let dll in dllStaticList) {
  dllStaticPlugins.plugins.push(
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname),
      manifest: path.resolve(
        __dirname,
        "../public/dll",
        `${dll}.manifest.json`
      ),
    })
  );
}

const webpackConfig = merge(
  baseConfig,
  bundleAnalyzerPlugin,
  dllStaticPlugins,
  {
    mode: NODE_ENV,
    output: {
      path:
        NODE_MODE !== "prod"
          ? path.resolve(__dirname, `../dist/dist-${NODE_MODE}`)
          : path.resolve(__dirname, `../dist`),
      publicPath: publicPath,
      filename: `${assets}/js/[name].js?v=[chunkhash:${hashLen}]`,
    },
    module: {
      rules: [
        {
          test: /\.scss$/, // creates style nodes from JS strings | translates CSS into CommonJS | compiles Sass to CSS
          include: srcPath,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: imagesPublicPath,
              },
            },
            "css-loader",
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
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: imagesPublicPath,
              },
            },
            "css-loader",
            postcssLoaderOptions,
          ],
        },
        {
          test: /\.vue$/,
          include: srcPath,
          loader: "vue-loader",
          include: srcPath,
          options: {
            loaders: {
              css: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: imagesPublicPath,
                  },
                },
                "css-loader?sourceMap",
                "sass-loader",
                postcssLoaderOptions,
              ],
            },
          },
        },
      ],
    },
    optimization: {
      minimize: true,
      minimizer: [
        // js mini
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: false, // set to true if you want JS source maps
          uglifyOptions: {
            compress: {
              drop_debugger: true, //移除debugger
              drop_console: true, //移除console
            },
          },
        }),
        // css mini
        new OptimizeCSSPlugin({}),
      ],
      splitChunks: {
        chunks: "all",
        minSize: 30000,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        name: true,
        cacheGroups: {
          antd: {
            chunks: "all",
            test: /[\\/]node_modules[\\/]antd[\\/]/,
            name: "antd",
            minChunks: 1,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 100,
          },
          vendor: {
            chunks: "all",
            test: /[\\/]node_modules[\\/]/,
            name: "vendor",
            minChunks: 1,
            maxInitialRequests: 5,
            minSize: 0,
            priority: -5,
          },
          common: {
            chunks: "all",
            test: /[\\/]src[\\/]views[\\/]/, // eg: /[\\/]src[\\/]js[\\/].*\.vue/,
            name: "common",
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 1,
          },
          mock: {
            chunks: "all",
            test: /[\\/]mock[\\/]/,
            name: "mock",
            minChunks: 1,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 1,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
      runtimeChunk: {
        name: "manifest",
      },
    },
    plugins: [
      // html生成插件
      new HtmlWebpackPlugin({
        template: `${srcPath}/templates/index.ejs`,
        filename: "index.html",
        favicon: "./src/images/favicon.ico",
        chunks: ["manifest", "vendor", "common", "mock", "elementui", "index"],
        chunksSortMode: "manual",
        hash: false,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
        },
      }),
      new AddAssetHtmlPlugin({
        filepath: path.resolve(__dirname, "../public/dll/*.dll.*.js"),
        outputPath: "assets/dll", //文件输出地址
        publicPath: "./assets/dll",
      }),
      // 自定义html插件处理系统常量配置
      new InsertHtmlSiteConfigPlugin({
        nodeMode: NODE_MODE, // 当前的环境
        variableKey: "ENV_CONFIG",
        variableValue: envConfig[`${NODE_MODE}`] || {},
      }),
      // 清理删除上一次打包文件
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [
          path.resolve(__dirname, "../dist/dist-fat"),
        ],
      }),
      // 复制静态资源到对应目录
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, "../public/assets/"),
          to: "assets",
          ignore: [".*"],
        },
      ]),
      new vueLoaderPlugin(),
      // 配置node环境变量或mock环境
      new webpack.DefinePlugin({
        isMockEnv: NODE_MODE === "demo",
        "process.env.NODE_ENV": JSON.stringify(NODE_ENV),
      }),
      new MiniCssExtractPlugin({
        filename: `${assets}/css/[name].css?v=[contenthash:${hashLen}]`,
        chunkFilename: `${assets}/css/[name].css?v=[contenthash:${hashLen}]`,
      }),
      // 能使体积更小
      new webpack.LoaderOptionsPlugin({
        minimize: true,
      }),
    ],
    performance: {
      hints: false,
    },
    devtool: false,
    stats: "errors-only",
  }
);
module.exports = webpackConfig;
