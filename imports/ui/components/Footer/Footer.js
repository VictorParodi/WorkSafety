import React, { Component } from 'react';

const Footer = () => {
    return (
        <div className="ed-container full footer-section black-bgd">
            <div className="ed-item s-100 m-1-3">
                <div className="footer-label-container">
                    <span className="footer-label"> DATOS DE CONTACTO </span>
                </div>

                <div className="footer-item-container">
                    <i className="phone icon white-font"></i>
                    <span className="footer-item white-font"> 300 444 22 11 </span>
                </div>

                <div className="footer-item-container">
                    <i className="mail icon white-font"></i>
                    <span className="footer-item white-font"> marcos@gmail.com </span>
                </div>

                <div className="footer-item-container">
                    <i className="marker icon white-font"></i>
                    <span className="footer-item white-font"> Riohacha, Colombia </span>
                </div>
            </div>

            <div className="ed-item s-100 m-1-3">
                <div className="footer-label-container">
                    <span className="footer-label"> MAPA DEL SITIO </span>
                </div>

                <div className="footer-item-container">
                    <i className="checkmark icon white-font"></i>
                    <span className="footer-item white-font"> Enlace 1 </span>
                </div>

                <div className="footer-item-container">
                    <i className="checkmark icon white-font"></i>
                    <span className="footer-item white-font"> Enlace 2 </span>
                </div>

                <div className="footer-item-container">
                    <i className="checkmark icon white-font"></i>
                    <span className="footer-item white-font"> Enlace 3 </span>
                </div>
            </div>

            <div className="ed-container ed-item s-100 m-1-3">
                <div className="ed-item s-100 footer-label-container">
                    <span className="footer-label"> SÍGUEME </span>
                </div>

                <div className="ed-item s-1-3 footer-item-container">
                    <i className="facebook icon white-font"></i>
                    {/* <span className="footer-item white-font"> facebook </span> */}
                </div>

                <div className="ed-item s-1-3 footer-item-container">
                    <i className="twitter icon white-font"></i>
                    {/* <span className="footer-item white-font"> Twitter </span> */}
                </div>

                <div className="ed-item s-1-3 footer-item-container">
                    <i className="youtube icon white-font"></i>
                    {/* <span className="footer-item white-font"> Youtube </span> */}
                </div>
            </div>
        </div>
    )
}

export default Footer;