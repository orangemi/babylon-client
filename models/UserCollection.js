define(
['backbone', 'underscore', 'jquery', 'app/app', 'models/Utils', 'models/User'],
function (Backbone, _, $, app, Utils, User) {

	var Collection = Backbone.Collection.extend({
		model : User,
	});

	Collection.search = function(word, options, callback) {
		callback = typeof(callback) == 'function' ? callback : Utils.emptyFn;
		// var uri = ['search'].join('/');
		var uri = [app.organization.id, 'search'].join('/');
		var post = {
			types: ['user'],
			organization_id: null,
			word: word,
		};
		Utils.post(uri, post, function(rep) {
			callback(rep.user);
		});
	};

	return Collection;
});