require('dotenv').config();
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = () => {
  const production = process.env.NODE_ENV === 'production';

  return {
    env: {
      X_API_KEY: process.env.X_API_KEY,
      MAIL_KEY: process.env.MAIL_KEY,
      MY_MAIL: process.env.MY_MAIL,
      API_URL: process.env.API_URL,
    },
    webpack: config => {
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
