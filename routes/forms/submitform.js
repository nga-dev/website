var keystone = require('keystone');
var Post = keystone.List('Post');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

  locals.form = req.body;

  console.log(req.body)

  view.on('post', { action: 'submitform' }, function(next) {
    console.log('test')
    res.send('meow')

		// if (!req.body.content) {
		// 	res.send({'error': 'no content'})
		// 	return next();
		// }
    //
    // var newPost = new Post.model({
	  //   content: req.body.content
		// });
    //
		// newPost.save(function(err) {
		//   if(err) {
    //     res.send({'error': 'something way worse happened'})
    //     next();
    //   }
    //
    //   res.send({'success': 'posted'})
		// });
	});
};
