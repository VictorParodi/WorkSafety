import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <div className="ed-container full about-section-container">
                <div className="ed-item s-100">
                    <h2 className="about-title"> ACERCA DE MÍ </h2>
                </div>

                <div className="ed-item s-100 m-50 about-image-container">
                    <img src="img/about.jpg" className="about-image" />
                </div>

                <div className="ed-item s-100 m-50 about-text-container">
                    <p className="about-text">
                        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                        Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
                        cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una
                        galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
                    </p>
                </div>

                <div className="ed-container ed-item s-100 full about-info-container yellow-bgd">
                    <div className="ed-item s-100 about-info-subcontainer">
                    <p className="about-info">
                        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                        Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.
                    </p>
                    </div>
                </div>
            </div>
        )
    }
}