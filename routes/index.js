var _ = require('underscore'),
	keystone = require('keystone'),
	middleware = require('./middleware'),
	importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
	api: importRoutes('./api')
};

// Setup Route Bindings
exports = module.exports = function(app) {

	// Views
	app.get('/', routes.views.index);

	app.get('/api/post/list', keystone.middleware.api, routes.api.posts.list);
	app.all('/api/post/create', keystone.middleware.api, routes.api.posts.create);
	app.get('/api/post/:id', keystone.middleware.api, routes.api.posts.get);
	app.all('/api/post/:id/update', keystone.middleware.api, routes.api.posts.update);
	app.get('/api/post/:id/remove', keystone.middleware.api, routes.api.posts.remove);
}
