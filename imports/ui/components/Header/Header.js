import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default class Header extends Component {
    componentDidMount() {
        let buttonMenu = document.querySelector('.menu-mobile-icon');

        buttonMenu.addEventListener('click', () => {
            $('.mobile_sidebar').sidebar('toggle');
        });
    }

    goToHome() {
        $('.mobile_sidebar').sidebar('toggle');
        FlowRouter.go('home');
    }

    goToLogin() {
        $('.mobile_sidebar').sidebar('toggle');
        FlowRouter.go('login');
    }

    render() {
        return (
            <div>
                <div className="ui sidebar inverted vertical menu mobile_sidebar">
                    <h4 className="sidebar-title" id="sidebar-title"> Menú </h4>

                    <a className="item" onClick={this.goToHome.bind(this)}>
                        Inicio
                    </a>

                    <a className="item">
                        Acerca de mi
                    </a>

                    <a className="item">
                        Cursos
                    </a>

                    <a className="item">
                        Consultar certificados
                    </a>

                    <a className="item">
                        Contacto
                    </a>

                    <a className="item" onClick={this.goToLogin.bind(this)}>
                        Administrador
                    </a>
                </div>

                <div className="ed-container full top-bar black-bgd extra-padding-tb">
                    <div className="ed-item s-50">
                        <i className="phone icon white-font"></i>
                        <span className="top-header-font white-font"> 300 444 33 22 </span>  
                    </div>

                    <div className="ed-item s-50">
                        <i className="marker icon white-font"></i>
                        <span className="top-header-font white-font"> Riohacha, Colombia </span>
                    </div>
                </div>    

                <div className="ed-container full header-section black-bgd">
                    <div className="ed-item s-80">
                        <h2 className="white-font"> MARCOS PARODI </h2> 
                        <span className="home-header-subtitle white-font"> Entrenador de trabajo en altura </span>
                    </div>
                    
                    <div className="ed-item s-20 white-font">
                        <i className="sidebar icon white-font menu-mobile-icon pusher"></i>
                    </div>
                </div>
            </div>
        )
    }
}