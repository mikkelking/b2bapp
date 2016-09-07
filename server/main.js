import { Meteor } from 'meteor/meteor';
import {Checkins, Volunteers, Bikes} from '../imports/api/Collections.js';

Meteor.startup(() => {
  // code to run on server at startup
// Check through the default users (supplied in a local package gscripts) 
// - to see if we should create them
  _.each(gScripts.users, function (user) {
      var id;

      if (Meteor.users.find({ emails: {$elemMatch: {address: user.email}}}).fetch().length === 0) {
          id = Accounts.createUser({
              email: user.email,
              password: (user.password) ? user.password : "me2",
              username: user.name, 
              profile: { name: user.name }
          });
          // if (user.roles.length > 0) {
          //     //                // Need _id of existing user record so this call must come 
          //     //                // after `Accounts.createUser` or `Accounts.onCreate`
          //     Roles.addUsersToRoles(id, user.roles);

          //     var s = '';
          // }

      } else {

      } 
  }); 


//
// Loop through the other things...
//
  _.each(gScripts.checkins , function (c) {
      var id;

      if (Checkins.find({volunteer: c.volunteer}).fetch().length === 0) {
        console.log("Adding checkin '"+c.volunteer+"'");
        id = Checkins.insert(c);
      } else {
//        console.log(" '"+c.volunteer+"' exists");
      } 
  });

  _.each(gScripts.volunteers , function (c) {
      var id;

      if (Volunteers.find({name: c.name}).fetch().length === 0) {
        console.log("Adding volunteer '"+c.name+"'");
        id = Volunteers.insert(c);
      } else {
//        console.log(" '"+c.name+"' exists");
      } 
  });

});
