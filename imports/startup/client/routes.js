import { Meteor } from 'meteor/meteor';
import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import { MainLayout } from '../../ui/layouts/MainLayout';
import Header from '../../ui/components/Header/Header';
import Footer from '../../ui/components/Footer/Footer';
import Home from '../../ui/pages/Home/Home';
import About from '../../ui/pages/About/About';
import Courses from '../../ui/pages/Courses/Courses';
import AdminForm from '../../ui/pages/AdminForm/AdminForm';
import Dashboard from '../../ui/pages/Dashboard/Dashboard';
import ConsultCertified from '../../ui/pages/ConsultCertified/ConsultCertified';

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

FlowRouter.route('/about', {
    name: 'about',
    action() {
        mount(MainLayout, {
            topContent: <Header />,
            content: <About />,
            bottomContent: <Footer />
        });
    }
});

FlowRouter.route('/courses', {
    name: 'courses',
    action() {
        mount(MainLayout, {
            topContent: <Header />,
            content: <Courses />,
            bottomContent: <Footer />
        });
    }
});

FlowRouter.route('/certifieds', {
    name: 'certifieds',
    action() {
        mount(MainLayout, {
            topContent: <Header />,
            content: <ConsultCertified />,
            bottomContent: <Footer />
        });
    }
});

FlowRouter.route('/login', {
    name: 'login',
    action() {
        mount(MainLayout, {
            topContent: <Header />,
            content: <AdminForm />,
            bottomContent: <Footer />
        });
    }
});

FlowRouter.route('/admin', {
    name: 'admin',
    action() {
        mount(MainLayout, {
            topContent: <Header />,
            content: <Dashboard />,
            bottomContent: <Footer />
        });
    }
});