const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = () => {
  const production = process.env.NODE_ENV === 'production';
  return {
    webpack: config => {
      config.module.rules.push({
        test: [/\.json$/],
        type: 'javascript/auto',
        use: 'json-loader',
      });

      /**
       * TypeScriptでパスを解決するやつ
       * https://github.com/zeit/next.js/issues/7935
       */
      if (config.resolve.plugins) {
        config.resolve.plugins.push(new TsconfigPathsPlugin());
      } else {
        config.resolve.plugins = [new TsconfigPathsPlugin()];
      }

      return config;
    },
    exportTrailingSlash: production,
  };
};
