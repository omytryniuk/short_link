import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Links = new Mongo.Collection('links');


if(Meteor.isServer) {
  Meteor.publish('links',function (){
    console.log(this.userId);
    return Links.find({userId: this.userId});
  });
}
