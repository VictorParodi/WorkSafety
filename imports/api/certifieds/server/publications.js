import { Meteor } from 'meteor/meteor';
import { Certifieds } from './../certifieds';

Meteor.publish('certifieds', function() {
    return Certifieds.find();
});