import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

const goToCourses = () => {
    FlowRouter.go('courses');
}

const Course = (props) => {
    const { name, date, description, price } = props.course;

    return (
        <div className="ed-item s-100 m-1-3 main-center plan-card-container">
            <div className="ui card plan-card">
                <div className="content">
                    <a className="header"> {name} </a>

                    <div className="meta">
                        <span className="date"> {date} </span>
                    </div>

                    <div className="description">
                        {description}
                    </div>
                </div>

                <div className="extra content ed-container no-padding">
                    <div className="ed-item s-50 m-100 l-20">
                        <a>
                            <i className="dollar icon"></i>
                            {price}
                        </a>
                    </div>

                    <div className="ed-item s-50 m-100 l-50 l-main-center">
                        <a>
                            <i className="users icon"></i>
                            Descuento por grupo
                        </a>
                    </div>

                    <div className="ed-item s-50 m-100 l-30" onClick={goToCourses.bind(this)}>
                        <a href=".home-header-title">
                            <i className="certificate icon"></i>
                            Mas detalles
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course;