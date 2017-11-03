import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Accounts } from 'meteor/accounts-base';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

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
                    <button className="ui blue button">
                        <i className="plus icon"></i>
                        Nuevo registro
                    </button>
                </div>

                <div className="ed-item s-100">
                    <table className="ui striped selectable celled table">
                        <thead>
                            <tr>
                                <th> Número </th>
                                <th> ID </th>
                                <th> Nombre </th>
                                <th> Apellido </th>
                                <th> Edad </th>
                                <th> Identificación </th>
                                <th> Cargo </th>
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
                            </tr>

                            <tr>
                                <td> Dato 1 </td>
                                <td> Dato 2 </td>
                                <td> Dato 3 </td>
                                <td> Dato 4 </td>
                                <td> Dato 5 </td>
                                <td> Dato 6 </td>
                                <td> Dato 7 </td>
                            </tr>

                            <tr>
                                <td> Dato 1 </td>
                                <td> Dato 2 </td>
                                <td> Dato 3 </td>
                                <td> Dato 4 </td>
                                <td> Dato 5 </td>
                                <td> Dato 6 </td>
                                <td> Dato 7 </td>
                            </tr>

                            <tr>
                                <td> Dato 1 </td>
                                <td> Dato 2 </td>
                                <td> Dato 3 </td>
                                <td> Dato 4 </td>
                                <td> Dato 5 </td>
                                <td> Dato 6 </td>
                                <td> Dato 7 </td>
                            </tr>

                            <tr>
                                <td> Dato 1 </td>
                                <td> Dato 2 </td>
                                <td> Dato 3 </td>
                                <td> Dato 4 </td>
                                <td> Dato 5 </td>
                                <td> Dato 6 </td>
                                <td> Dato 7 </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Dashboard;