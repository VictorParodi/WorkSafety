import { Meteor } from 'meteor/meteor';
import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import { MainLayout } from '../../ui/layouts/MainLayout';
import Home from '../../ui/pages/Home/Home';

FlowRouter.route('/', {
    name: 'home',
    action() {
        mount(MainLayout, {
            content: <Home />
        });
    }
});