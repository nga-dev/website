var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var Topic = new keystone.List('Topic', {
	autokey: { path: 'key', from: 'title', unique: true },
	map: {name: 'title' }
});

Topic.add({
	title: { type: Types.Text, required: true, index: true, initial: true }
});

Topic.relationship({
	path: 'posts',
	ref: 'Post',
	refPath: 'topic',
});


/**
 * Registration
 */
Topic.defaultColumns = 'title';
Topic.register();
