import React, { Component } from 'react';

export default class Test extends Component {
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

    render() {
        return (
            <div>
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
                    
                    <div className="ed-item s-20 white-font"> menú </div>
                </div>

                <div className="ed-container full header-image-section s-main-center cross-center">
                    <p className="header-home-text white-font">
                        LOREM IPSUM DOLOR LOREM IPSUM DOLOR LOREM IPSUM DOLOR
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
                    <div className="ed-container ed-item s-100 plans-section-black-layer black-light-bgd s-main-center">
                        {
                            this.renderCourses().map((course, index) => {
                                return <Course key={index} course={course} />
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

class Course extends Component {
    render() {
        return (
            <div className="ui card ed-item s-100 plan-card">
                <div className="image">
                    <img src={this.props.course.image} />
                </div>

                <div className="content">
                    <a className="header"> {this.props.course.name} </a>

                    <div className="meta">
                        <span className="date"> {this.props.course.date} </span>
                    </div>

                    <div className="description">
                        {this.props.course.description}
                    </div>
                </div>

                <div className="extra content ed-container">
                    <div className="ed-item s-50">
                        <a>
                            <i className="money icon"></i>
                            {this.props.course.price}
                        </a>
                    </div>

                    <div className="ed-item s-50">
                        <a>
                            <i className="users icon"></i>
                            Descuento por grupo
                        </a>
                    </div>

                    <div className="ed-item s-50">
                        <a>
                            <i className="certificate icon"></i>
                            Mas detalles
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

class Service extends Component {
    render() {
        return (
            <div className="ed-item s-100 service-item-container">
                <h2 className="ui icon header">
                    <i className={this.props.service.icon}></i>
                    <div className="content">
                        <span className="service-label"> {this.props.service.label} </span> 
                        <div className="sub header">
                            {this.props.service.text}
                        </div>
                    </div>
                </h2>
            </div>
        )
    }
}