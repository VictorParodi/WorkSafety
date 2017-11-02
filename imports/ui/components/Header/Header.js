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
        let wideScreen = window.innerWidth;
        
        if (wideScreen < 1024) {
            $('.mobile_sidebar').sidebar('toggle');
        }

        FlowRouter.go('home');
    }

    goToAbout() {
        let wideScreen = window.innerWidth;
        
        if (wideScreen < 1024) {
            $('.mobile_sidebar').sidebar('toggle');
        }

        FlowRouter.go('about');
    }

    goToCourses() {
        let wideScreen = window.innerWidth;

        if (wideScreen < 1024) {
            $('.mobile_sidebar').sidebar('toggle');
        }

        FlowRouter.go('courses');
    }

    goToLogin() {
        let wideScreen = window.innerWidth;
        
        if (wideScreen < 1024) {
            $('.mobile_sidebar').sidebar('toggle');
        }

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

                    <a className="item" onClick={this.goToAbout.bind(this)}>
                        Acerca de mi
                    </a>

                    <a className="item" onClick={this.goToCourses}>
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

                <div className="ed-container ed-item s-100 full top-bar yellow-bgd extra-padding-tb">
                    <div className="ed-item s-50 l-20 l-offset-60 l-main-end">
                        <i className="phone icon"></i>
                        <span className="top-header-font"> 300 444 33 22 </span>  
                    </div>

                    <div className="ed-item s-50 l-20 l-main-center">
                        <i className="marker icon"></i>
                        <span className="top-header-font"> Riohacha, Colombia </span>
                    </div>
                </div>    

                <div className="ed-container full header-section yellow-bgd">
                    <div className="ed-item s-80 l-30">
                        <h1 className="home-header-title"> MARCOS PARODI </h1> 
                        <span className="home-header-subtitle "> Entrenador de trabajo en altura </span>
                    </div>
                    
                    <div className="ed-item s-20 to-m">
                        <i className="sidebar icon menu-mobile-icon pusher"></i>
                    </div>

                    <div className="ed-item l-70 main-end from-l desktop-menu-container">
                        <div className="ui text menu desktop-menu">
                            <a className="item menu-options" onClick={this.goToHome.bind(this)}>
                                INICIO
                            </a>

                            <a className="item menu-options" onClick={this.goToAbout.bind(this)}> 
                                ACERCA DE MI
                            </a>

                            <a className="item menu-options goCourses" onClick={this.goToCourses}>
                                CURSOS
                            </a>

                            <a className="item menu-options">
                                CONSULTAR CERTIFICADOS
                            </a>

                            <a className="item menu-options">
                                CONTACTO
                            </a>

                            <a className="item menu-options" onClick={this.goToLogin.bind(this)}>
                                ADMINISTRADOR
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}