var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var Post = new keystone.List('Post');

Post.add({
	content: { type: Types.Text, required: true, index: true, initial: true },
	topic: { type: Types.Relationship, ref: 'Topic' },
});

/**
 * Registration
 */
Post.defaultColumns = '';
Post.register();
