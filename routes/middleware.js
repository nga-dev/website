var _ = require('lodash');


/**
	Initialises the standard view locals
*/
exports.initLocals = function (req, res, next) {
	res.locals.navLinks = [
		{ label: 'NGA', key: 'home', href: '/' },
		{ label: 'New', key: 'new', href: '/' },
		{ label: 'Topics', key: 'topics', href: '/' }
	];
	res.locals.user = req.user;
	next();
};


/**
	Prevents people from accessing protected pages when they're not signed in
 */
exports.requireUser = function (req, res, next) {
	if (!req.user) {
		req.flash('error', 'Please sign in to access this page.');
		res.redirect('/keystone/signin');
	} else {
		next();
	}
};
