function buildConfig(env) {
  console.log(env, 'env');
  if (env.dev) {
    return require('./webpack.dev.js');
  } else if (env.prod) {
    return require('./webpack.prod.js');
  } else {
    console.log(
      "Wrong webpack build parameter. Possible choices: 'dev' or 'prod'."
    );
  }
}

module.exports = buildConfig;
