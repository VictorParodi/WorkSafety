import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Accounts } from 'meteor/accounts-base';
import { Certifieds } from './../../../api/certifieds/certifieds';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import RegistryForm from './RegistryForm';
import Certified from './Certified';

class Dashboard extends TrackerReact(Component) {
    state = {
        subscription: {
            certifieds: Meteor.subscribe('certifieds')
        }
    }

    componentDidMount() {
        if (!Meteor.userId()) {
            FlowRouter.go('home');
        }
    }

    logOut() {
        Meteor.logout(() => {
            FlowRouter.go('home');
        });
    }

    showRegistryModal() {
        $('.registry_modal').modal('show');
    }

    getCertifieds() {
        return Certifieds.find().fetch();
    }

    render() {
        let certifieds = this.getCertifieds();

        if (!certifieds) {
            return <div> Cargando... </div>
        }

        return (
            <div className="ed-container full dashboard_section">
                <div className="ed-item s-50 m-20 options_buttons_container">
                    <button className="ui green button" onClick={this.logOut}>
                        <i className="cancel icon"></i>
                        Cerrar sesión
                    </button>
                </div>

                <div className="ed-item s-50 m-20 options_buttons_container">
                    <button className="ui blue button" onClick={this.showRegistryModal}>
                        <i className="plus icon"></i>
                        Nuevo registro
                    </button>
                </div>

                <div className="ed-item s-100">
                    <table className="ui striped selectable celled table">
                        <thead>
                            <tr>
                                <th> No. </th>
                                <th> NOMBRES </th>
                                <th> APELLIDOS </th>
                                <th> IDENTIFICACIÓN </th>
                                <th> FECHA FORMACIÓN </th>
                                <th> VENCIMIENTO </th>
                                <th> NIVEL </th>
                                <th> EMPRESA </th>
                                <th> ENTRENADOR </th>
                                <th> DEPARTAMENTO </th>
                                <th> REGISTRO </th>
                                <th> ACCIONES </th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                certifieds.map((certified, index) => {
                                    return <Certified key={certified._id} certified={certified} number={index + 1}/>
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <RegistryForm showModal={this.showRegistryModal} />
            </div>
        );
    }
}

export default Dashboard;