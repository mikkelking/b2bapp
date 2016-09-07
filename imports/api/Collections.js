import { Mongo } from 'meteor/mongo';
 

export const Volunteers = new Mongo.Collection('volunteers');
export const Checkins = new Mongo.Collection('checkins');
export const Bikes = new Mongo.Collection('bikes');