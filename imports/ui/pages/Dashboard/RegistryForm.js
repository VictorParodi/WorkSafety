import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Certifieds } from './../../../api/certifieds/certifieds';

class RegistryForm extends TrackerReact(Component) {
    createRegistry(event) {
        event.preventDefault();
        
        const { name,
                lastname,
                id,
                datecourse,
                expdate,
                level,
                company,
                state,
                registryNumber
        } = this.refs;

        let newRegistry = {
            name: name.value.trim(),
            lastname: lastname.value.trim(),
            id: id.value.trim(),
            datecourse: datecourse.value.trim(),
            expdate: expdate.value.trim(),
            level: level.value.trim(),
            company: company.value.trim(),
            trainer: 'Marcos Parodi',
            state: state.value.trim(),
            registryNumber: registryNumber.value.trim()
        }

        Certifieds.insert(newRegistry, (error, res) => {
            if (error) {
                console.log(error.reason);
            } else {
                console.log(res);
                $('.registry_modal').modal('hide');
            }
        });

        name.value = '';
        lastname.value = '';
        id.value = '';
        datecourse.value = '';
        expdate.value = '';
        level.value = '';
        company.value = '';
        state.value = '';
        registryNumber.value = '';
    }

    closeModal(event) {
        event.preventDefault();
        $('.registry_modal').modal('hide');
    }

    render() {
        return (
            <div className="ed-container registry_form_section">
                <div className="ui modal registry_modal">
                    <div className="header">
                        <h2> Nuevo registro </h2>
                    </div>

                    <div className="content">
                        <div className="ed-item s-100 registry_form_container">
                            <form className="ui form registry_form" onSubmit={this.createRegistry.bind(this)}>
                                <div className="field">
                                    <div className="three fields">
                                        <div className="field">
                                            <label> Nombres </label>
                                            <input type="text" name="name" ref="name" required />
                                        </div>

                                        <div className="field">
                                            <label> Apellidos </label>
                                            <input type="text" name="lastname" ref="lastname" required />
                                        </div>

                                        <div className="field">
                                            <label> Identificación </label>
                                            <input type="number" name="id" ref="id" required />
                                        </div>
                                    </div>
                                </div>

                                <div className="field">
                                    <div className="three fields">
                                        <div className="field">
                                            <label> Fecha formación </label>
                                            <input type="date" name="datecourse" ref="datecourse" required />
                                        </div>

                                        <div className="field">
                                            <label> Vencimiento </label>
                                            <input type="date" name="expdate" ref="expdate" required />
                                        </div>

                                        <div className="field">
                                            <label> Nivel </label>
                                            <select name="level" ref="level" required>
                                                <option value="Básico Operativo"> Básico Operativo </option>
                                                <option value="Básico Administrativo"> Básico Administrativo </option>
                                                <option value="Avanzado"> Avanzado </option>
                                                <option value="Coodinador"> Coodinador </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="field">
                                    <div className="three fields">
                                        <div className="field">
                                            <label> Empresa </label>
                                            <input type="text" name="company" ref="company" required />
                                        </div>

                                        <div className="field">
                                            <label> Departamento </label>
                                            <input type="text" name="state" ref="state" required />
                                        </div>  

                                        <div className="field">
                                            <label> Número registro </label>
                                            <input type="text" name="registry-number" ref="registryNumber" required /> 
                                        </div>
                                    </div>
                                </div>

                                <div className="ed-container buttons_actions_form_container no-padding">
                                    <div className="ed-item s-100 m-20">
                                        <button className="ed-item s-100 ui button blue"> Registrar </button>
                                    </div>

                                    <div className="ed-item s-5"></div>
                                    <br/>
                                    <br/>

                                    <div className="ed-item s-100 m-20">
                                        <button className="ed-item s-100 ui button orange" onClick={this.closeModal}> Cancelar </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* <div className="actions">
                        <button className="ui ok blue button" onClick={this.createRegistry}>
                            Registrar
                        </button>

                        <button className="ui cancel orange button">
                            Cancelar
                        </button>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default RegistryForm;