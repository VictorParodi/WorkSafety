import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base'

export default class Login extends Component {
    render() {
        return (
            <div className="ed-container login_form_section">
                <div className="ed-item s-100 login_form_container">
                    <form className="ui form login_form">
                        <h2> Formulario de registro </h2>

                        <div className="field">
                            <label> Nombre de usuario </label>
                            <input type="text" name="username" ref="username" placeholder="Defina su nombre de usuario" required />
                        </div>

                        <div className="field">
                            <label> Contraseña </label>
                            <input type="password" name="password" ref="password" placeholder="Defina contraseña" required />
                        </div>

                        <div className="field">
                            <label> Repetir contraseña </label>
                            <input type="password" name="password2" ref="password2" placeholder="Repita su contraseña" required />
                        </div>

                        <button className="ui button" type="submit"> Registrar </button>
                    </form>
                </div>
            </div>
        )
    }
}