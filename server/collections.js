import {Checkins, Volunteers, Bikes} from '../imports/api/Collections.js';

Meteor.methods({
});
Checkins.allow({
	insert: function (userId, doc) {
		return true; //Carrots.userCanInsert(userId, doc);
	},

	update: function (userId, doc, fields, modifier) {
		return true;//Carrots.userCanUpdate(userId, doc);
	},

	remove: function (userId, doc) {
		return true;//Carrots.userCanRemove(userId, doc);
	}
});

Volunteers.allow({
	insert: function (userId, doc) {
		return true; //Carrots.userCanInsert(userId, doc);
	},

	update: function (userId, doc, fields, modifier) {
		return true;//Carrots.userCanUpdate(userId, doc);
	},

	remove: function (userId, doc) {
		return true;//Carrots.userCanRemove(userId, doc);
	}
});

Bikes.allow({
	insert: function (userId, doc) {
		return true; //Carrots.userCanInsert(userId, doc);
	},

	update: function (userId, doc, fields, modifier) {
		return true;//Carrots.userCanUpdate(userId, doc);
	},

	remove: function (userId, doc) {
		return true;//Carrots.userCanRemove(userId, doc);
	}
});

Meteor.publish("checkins", function() {
	return Checkins.find({}, {});
});
Meteor.publish("volunteers", function() {
	return Volunteers.find({}, {});
});
Meteor.publish("bikes", function() {
	return Bikes.find({}, {});
});


