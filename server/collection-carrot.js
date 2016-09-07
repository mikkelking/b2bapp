import {Carrots} from '../imports/api/Carrots.js';

Meteor.methods({
	carrot_update: (userId,id,carrotrecord) => {
		delete carrotrecord._id;	// _id can't change, so nuke it
 	 	carrotrecord.modifiedAt = new Date();
		carrotrecord.modifiedBy = userId;
		console.log(carrotrecord);
		return Carrot.update({_id: id},carrotrecord);
	}
});
Carrots.allow({
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

Meteor.publish("carrots", function() {
	return Carrots.find({}, {});
});

Meteor.publish("carrot_empty", function() {
	return Carrots.find({_id:null}, {});
});

Meteor.publish("carrot_selected", function(customerId) {
	return Carrots.find({_id:customerId}, {});
});

