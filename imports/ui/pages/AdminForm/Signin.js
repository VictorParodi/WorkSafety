import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

export default class Signin extends Component {
    createAdministrator(event) {
        event.preventDefault();
        let username = this.refs.username.value.trim();
        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();
        let password2 = this.refs.password2.value.trim();

        let admin = {
            username,
            email,
            password
        }

        console.log(admin);

        Accounts.createUser(admin, (error, res) => {
            if (error) {
                console.log(error.reason);
            }
        });

        this.refs.username.value = '';
        this.refs.email.value = '';
        this.refs.password.value = '';
        this.refs.password2.value = '';
    }

    render() {
        return (
            <div className="ed-container Signin_form_section">
                <div className="ed-item s-100 l-60 login_form_container to-center">
                    <form className="ui form login_form" onSubmit={this.createAdministrator.bind(this)}>
                        <h2> Formulario de registro </h2>

                        <div className="field">
                            <label> Nombre de usuario </label>
                            <input type="text" name="username" ref="username" placeholder="Defina su nombre de usuario" required />
                        </div>

                        <div className="field">
                            <label> Correo Electrónico </label>
                            <input type="email" name="email" ref="email" placeholder="Ingrese su email" required />
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