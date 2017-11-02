import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Signin from './Signin';
import Login from './Login';

class AdminForm extends TrackerReact(Component) {
    renderForm() {
        let form = Meteor.users.find().count()? <Login /> : <Signin />;
        return form;
    }

    render() {
        return this.renderForm();
    }
}

export default AdminForm;