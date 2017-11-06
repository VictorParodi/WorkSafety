import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Accounts } from 'meteor/accounts-base';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import RegistryForm from './RegistryForm';

class Dashboard extends TrackerReact(Component) {
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

    render() {
        return (
            <div className="ed-container dashboard_section">
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
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td> Dato 1 </td>
                                <td> Dato 2 </td>
                                <td> Dato 3 </td>
                                <td> Dato 4 </td>
                                <td> Dato 5 </td>
                                <td> Dato 6 </td>
                                <td> Dato 7 </td>
                                <td> Dato 8 </td>
                                <td> Dato 9 </td>
                                <td> Dato 10 </td>
                                <td> Dato 11 </td>
                            </tr>

                            <tr>
                                <td> Dato 1 </td>
                                <td> Dato 2 </td>
                                <td> Dato 3 </td>
                                <td> Dato 4 </td>
                                <td> Dato 5 </td>
                                <td> Dato 6 </td>
                                <td> Dato 7 </td>
                                <td> Dato 8 </td>
                                <td> Dato 9 </td>
                                <td> Dato 10 </td>
                                <td> Dato 11 </td>
                            </tr>

                            <tr>
                                <td> Dato 1 </td>
                                <td> Dato 2 </td>
                                <td> Dato 3 </td>
                                <td> Dato 4 </td>
                                <td> Dato 5 </td>
                                <td> Dato 6 </td>
                                <td> Dato 7 </td>
                                <td> Dato 8 </td>
                                <td> Dato 9 </td>
                                <td> Dato 10 </td>
                                <td> Dato 11 </td>
                            </tr>

                            <tr>
                                <td> Dato 1 </td>
                                <td> Dato 2 </td>
                                <td> Dato 3 </td>
                                <td> Dato 4 </td>
                                <td> Dato 5 </td>
                                <td> Dato 6 </td>
                                <td> Dato 7 </td>
                                <td> Dato 8 </td>
                                <td> Dato 9 </td>
                                <td> Dato 10 </td>
                                <td> Dato 11 </td>
                            </tr>

                            <tr>
                                <td> Dato 1 </td>
                                <td> Dato 2 </td>
                                <td> Dato 3 </td>
                                <td> Dato 4 </td>
                                <td> Dato 5 </td>
                                <td> Dato 6 </td>
                                <td> Dato 7 </td>
                                <td> Dato 8 </td>
                                <td> Dato 9 </td>
                                <td> Dato 10 </td>
                                <td> Dato 11 </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <RegistryForm showModal={this.showRegistryModal} />
            </div>
        );
    }
}

export default Dashboard;