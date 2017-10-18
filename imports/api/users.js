import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';


Accounts.validateNewUser((user)=>{
  const email = user.emails[0].address;
  console.log('This is a user', user);
/*
  try{
    new SimpleSchema({
      type: String,
      email: SimpleSchema.RegEx.Email
    }).validate({email: email});

  }catch(e){
    throw new Meteor.Error(400, e.message);
  }*/
  return true;

});
