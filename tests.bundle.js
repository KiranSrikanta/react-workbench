var context = require.context('./src/client/tests', true, /.+\.spec\.js?$/);
context.keys().forEach(context);
module.exports = context;