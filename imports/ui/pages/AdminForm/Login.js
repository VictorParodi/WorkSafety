import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

export default class Login extends Component {
    render() {
        return (
            <div className="ed-container login_form_section">
                <div className="ed-item s-100 l-60 login_form_container to-center">
                    <form className="ui form login_form">
                        <h2> Formulario de ingreso </h2>

                        <div className="field">
                            <label> Nombre de usuario </label>
                            <input type="text" name="username" ref="username" placeholder="Defina su nombre de usuario" required />
                        </div>

                        <div className="field">
                            <label> Contraseña </label>
                            <input type="password" name="password" ref="password" placeholder="Defina contraseña" required />
                        </div>

                        <button className="ui button" type="submit"> Login </button>
                    </form>
                </div>
            </div>
        )
    }
}