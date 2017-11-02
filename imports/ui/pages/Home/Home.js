import React, { Component } from 'react';
import Service from './Service';
import Course from './Course';
import Client from './Client';

export default class Test extends Component {
    componentDidMount() {
        let imageSection = document.querySelector('.header-image-section');
        imageSection.style.height = `${window.innerHeight}px`; 
    }

    renderServices() {
        let services = [
            {
                icon: 'asterisk icon',
                label: 'Servicio uno',
                text: 'Es implemente el texto de relleno de las imprentas y archivos de texto'
            },

            {
                icon: 'certificate icon',
                label: 'Servicio dos',
                text: 'Es implemente el texto de relleno de las imprentas y archivos de texto'
            },

            {
                icon: 'circle icon',
                label: 'Servicio tres',
                text: 'Es implemente el texto de relleno de las imprentas y archivos de texto'
            }
        ];

        return services;
    }

    renderCourses() {
        let courses = [
            {
                name: 'Cursos 1',
                image: 'img/curso1.jpg',
                date: 'Lorem ipsum',
                description: 'Es implemente el texto de relleno de las imprentas y archivos de texto',
                price: '250.000' 
            },

            {
                name: 'Cursos 2',
                image: 'img/curso2.jpg',
                date: 'Segundo texto',
                description: 'Es implemente el texto de relleno de las imprentas y archivos de texto',
                price: '300.000'
            },

            {
                name: 'Cursos 3',
                image: 'img/curso3.jpg',
                date: 'Tercer texto',
                description: 'Es implemente el texto de relleno de las imprentas y archivos de texto',
                price: '150.000'
            }
        ];

        return courses;
    }

    renderClients() {
        let clients = [
            {
                name: 'Company 1',
                image: 'img/komatsu.png'
            },

            {
                name: 'Company 2',
                image: 'img/komatsu.png'
            },

            {
                name: 'Company 3',
                image: 'img/komatsu.png'
            },

            {
                name: 'Company 4',
                image: 'img/komatsu.png'
            },

            {
                name: 'Company 5',
                image: 'img/komatsu.png'
            },

            {
                name: 'Company 6',
                image: 'img/komatsu.png'
            },

            {
                name: 'Company 7',
                image: 'img/komatsu.png'
            }
        ];

        return clients;
    }

    render() {
        return (
            <div className="global-container">
                <div className="ed-container full header-image-section s-main-center cross-center">
                    <p className="header-home-text white-font center-text">
                        Es implemente el texto de relleno de las imprentas y archivos de texto
                    </p>
                </div>

                <div className="ed-container welcome-section">
                    <div className="ed-item s-100">
                        <h2 className="center-text"> WELCOME </h2>

                        <p className="welcome-section-text">
                            Es implemente el texto de relleno de las imprentas
                            y archivos de texto. Lorem Ipsum ha sido el texto de
                            relleno estándar de las industrias desde el año 1500,
                            cuando un impresor (N. del T. persona que se dedica a la
                            imprenta) desconocido usó una galería de textos y los mezcló
                            de tal manera que logró hacer un libro de textos especimen
                        </p>  
                    </div>

                    {
                        this.renderServices().map((service, index) => {
                            return <Service key={index} service={service} />
                        })
                    }
                </div>

                <div className="ed-container full plans-section">
                    <div className="ed-container full ed-item s-100 plans-section-black-layer black-light-bgd s-main-center">
                        <h2 className="ed-item s-100 white-font plans-section-title center-text"> CURSOS </h2>
                        
                        <p className="ed-item s-100 white-font center-text plans-text"> 
                            Es implemente el texto de relleno de las imprentas
                            y archivos de texto.
                        </p>
                        
                        {
                            this.renderCourses().map((course, index) => {
                                return <Course key={index} course={course} />
                            })
                        }
                    </div>
                </div>

                <div className="ed-container full clients-section s-main-center yellow-bgd">
                    <div className="ed-item s-100">
                        <h2 className="plans-section-title center-text"> CLIENTES </h2>
                        <p className="center-text"> 
                            Es implemente el texto de relleno de las imprentas
                            y archivos de texto.
                        </p>
                    </div>

                    {
                        this.renderClients().map((client, index) => {
                            return <Client key={index} client={client} />
                        })
                    }
                </div>
            </div>
        )
    }
}