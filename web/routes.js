/**
 * Routes
 */
var config = require('../config.json');
var github = require('./github');

module.exports = function(app) {

  // Index redirects to page one
  app.get('/', function(req, res) {
    res.redirect('/page/1');
  });

  // Github Webhook
  app.post(config.github.webhook, github.update);

  // 404
  app.use(function(req, res) {
    res.status(404);
    res.redirect('/page/1');
  });
};