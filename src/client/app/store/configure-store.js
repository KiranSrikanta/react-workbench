//eslint-disable-next-line no-process-env
if (process.env.NODE_ENV === 'production') {
  //eslint-disable-next-line global-require
  module.exports = require('./configure-store.prod.js');
} else {
  //eslint-disable-next-line global-require
  module.exports = require('./configure-store.dev.js');
}