import { Meteor } from 'meteor/meteor';
import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import { MainLayout } from '../../ui/layouts/MainLayout';
import Header from '../../ui/components/Header/Header';
import Footer from '../../ui/components/Footer/Footer';
import Home from '../../ui/pages/Home/Home';
import Login from '../../ui/pages/Login/Login';

FlowRouter.route('/', {
    name: 'home',
    action() {
        mount(MainLayout, {
            topContent: <Header />,
            content: <Home />,
            bottomContent: <Footer />
        });
    }
});

FlowRouter.route('/login', {
    name: 'login',
    action() {
        mount(MainLayout, {
            topContent: <Header />,
            content: <Login />,
            bottomContent: <Footer />
        });
    }
});