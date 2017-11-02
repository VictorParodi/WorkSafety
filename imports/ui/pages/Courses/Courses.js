import React, { Component } from 'react';

class Courses extends Component {
    componentWillMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="ed-container full courses-section-container">
                <div className="ed-item s-100">
                    <h2 className="courses-title center-text"> CURSOS </h2>
                </div>
    
                <div className="ed-item s-100">
                    <p className="courses-text">
                        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                        Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
                        cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una 
                        galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
                    </p>
                </div>
    
                <div className="ed-container full ed-item s-100 course-item">
                    <div className="ed-item s-100 m-45 no-padding image-course-container-1">
                        {/* <img src="img/curso2.jpg" alt="imagen curso 1"/> */}
                    </div>
    
                    <div className="ed-item s-100 m-55 yellow-bgd info-course-container">
                        <h3> Curso 1 </h3>
    
                        <p className="course-item-text">
                            Esta es la descripción del curso, Cada curso debe presentar de manera resumida los
                            objetivos que se desarrolan a lo largo del mismo.
                        </p>
    
                        <ul className="course-points-list">
                            <li>
                                <i className="checkmark icon"></i>
                                Item
                            </li>

                            <li>
                                <i className="checkmark icon"></i>
                                Item
                            </li>

                            <li>
                                <i className="checkmark icon"></i>
                                Item
                            </li>

                            <li>
                                <i className="checkmark icon"></i>
                                Item
                            </li>
                        </ul>
                    </div>
                </div>
    
                <div className="ed-container full ed-item s-100 course-item">
                    <div className="ed-item s-100 m-45 no-padding image-course-container-2">
                        {/* <img src="img/curso2.jpg" alt="imagen curso 1"/> */}
                    </div>
    
                    <div className="ed-item s-100 m-55 yellow-bgd info-course-container">
                        <h3> Curso 2 </h3>
    
                        <p className="course-item-text">
                            Esta es la descripción del curso, Cada curso debe presentar de manera resumida los
                            objetivos que se desarrolan a lo largo del mismo.
                        </p>
    
                        <ul className="course-points-list">
                            <li>
                                <i className="checkmark icon"></i>
                                Item
                            </li>

                            <li>
                                <i className="checkmark icon"></i>
                                Item
                            </li>

                            <li>
                                <i className="checkmark icon"></i>
                                Item
                            </li>

                            <li>
                                <i className="checkmark icon"></i>
                                Item
                            </li>
                        </ul>
                    </div>
                </div>
    
                <div className="ed-container full ed-item s-100 course-item">
                    <div className="ed-item s-100 m-45 no-padding image-course-container-3">
                        {/* <img src="img/curso2.jpg" alt="imagen curso 1"/> */}
                    </div>
    
                    <div className="ed-item s-100 m-55 yellow-bgd info-course-container">
                        <h3> Curso 3 </h3>
    
                        <p className="course-item-text">
                            Esta es la descripción del curso, Cada curso debe presentar de manera resumida los
                            objetivos que se desarrolan a lo largo del mismo.
                        </p>
    
                        <ul className="course-points-list">
                            <li>
                                <i className="checkmark icon"></i>
                                Item
                            </li>

                            <li>
                                <i className="checkmark icon"></i>
                                Item
                            </li>

                            <li>
                                <i className="checkmark icon"></i>
                                Item
                            </li>

                            <li>
                                <i className="checkmark icon"></i>
                                Item
                            </li>
                        </ul>
                    </div>
                </div>  
            </div>
        );
    }
}

export default Courses;