import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Certifieds } from './../../../api/certifieds/certifieds';
import Certified from './../Dashboard/Certified';

class ConsultCertified extends TrackerReact(Component) {
    // constructor() {
    //     super();
    //     this.state = {
    //         subscription: {
    //             certifieds: Meteor.subscribe('certifieds')
    //         }
    //     }
    // }

    state = {
        subscription: {
            certifieds: Meteor.subscribe('certifieds')
        }
    }

    getCertifieds() {
        return Certifieds.find().fetch();
    }

    render() {
        let certifieds = this.getCertifieds();

        if (!certifieds) {return <div> Cargando... </div>}

        return (
            <div className="ed-container dashboard_section">
                <div className="ed-item s-50 m-20 options_buttons_container">
                    <button className="ui green button">
                        <i className="cancel icon"></i>
                        Filtro 1
                    </button>
                </div>

                <div className="ed-item s-50 m-20 options_buttons_container">
                    <button className="ui blue button">
                        <i className="plus icon"></i>
                        Filtro 2
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
                            {
                                certifieds.map((certified, index) => {
                                    return <Certified key={certified._id} certified={certified} number={index + 1}/>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ConsultCertified;