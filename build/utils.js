let path = require("path"),
  config = require("../config"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  glob = require("glob");

exports.assetsPath = function(_path) {
  var assetsSubDirectory =
    process.env.NODE_ENV === "production"
      ? config.build.assetsSubDirectory
      : config.dev.assetsSubDirectory;

  return path.posix.join(assetsSubDirectory, _path);
};

exports.cssLoaders = function(options) {
  options = options || {};

  var cssLoader = {
    loader: "css-loader",
    options: {
      minimize: process.env.NODE_ENV === "production",
      sourceMap: options.sourceMap,
      importLoaders: 1,
    },
  };

  // generate loader string to be used with extract text plugin
  function generateLoaders(loader, loaderOptions) {
    var loaders = [cssLoader];
    if (loader) {
      loaders.push({
        loader: loader + "-loader",
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap,
        }),
      });
    }

    if (options.extract) {
      let extractLoader = {
        loader: MiniCssExtractPlugin.loader,
        options: {},
      };
      return [extractLoader, "css-loader"].concat(["postcss-loader"], loaders);
    } else {
      return ["vue-style-loader", "css-loader"].concat(
        ["postcss-loader"],
        loaders
      );
    }
  }

  // http://vuejs.github.io/vue-loader/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders("less"),
    sass: generateLoaders("sass", {
      indentedSyntax: true,
    }),
    scss: generateLoaders("sass"),
    stylus: generateLoaders("stylus"),
    styl: generateLoaders("stylus"),
  };
};

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function(options) {
  var output = [];
  var loaders = exports.cssLoaders(options);
  for (var extension in loaders) {
    var loader = loaders[extension];
    output.push({
      test: new RegExp("\\." + extension + "$"),
      use: loader,
    });
  }
  return output;
};

//??????????????????
exports.getMultiEntry = function(globPath) {
  const entries = {};
  glob.sync(globPath).forEach(function(entry) {
    let pageName = path.basename(entry, path.extname(entry));
    let folders = entry.split("/");
    if (folders && folders.length) {
      entries[pageName] = folders[folders.length - 1];
    }
  });
  return entries;
};

var fs = require("fs"),
  copyStat = fs.stat;

/*
 * ?????????????????????????????????????????????
 * @param{ String } ?????????????????????
 * @param{ String } ????????????????????????
 */
var filecopy = function(src, dst) {
  // ??????????????????????????????/??????
  fs.readdir(src, function(err, paths) {
    if (err) {
      throw err;
    }
    paths.forEach(function(path) {
      var _src = src + "/" + path,
        _dst = dst + "/" + path,
        readable,
        writable;
      copyStat(_src, function(err, st) {
        if (err) {
          throw err;
        }
        // ?????????????????????
        if (st.isFile()) {
          // ???????????????
          readable = fs.createReadStream(_src);
          // ???????????????
          writable = fs.createWriteStream(_dst);
          // ????????????????????????
          readable.pipe(writable);
        }
        // ????????????????????????????????????
        else if (st.isDirectory()) {
          exports.startCopy(_src, _dst);
        }
      });
    });
  });
};

//????????????????????????????????????????????????????????????????????????????????????
exports.startCopy = function(src, dst) {
  fs.exists(dst, function(exists) {
    // ?????????
    if (exists) {
      filecopy(src, dst);
    }
    // ?????????
    else {
      fs.mkdir(dst, function() {
        filecopy(src, dst);
      });
    }
  });
};
