import React, { Component } from 'react';

export default class Course extends Component {
    render() {
        return (
            <div className="ed-item s-100 m-1-3 main-center plan-card-container">
                <div className="ui card plan-card">
                    {/* <div className="image">
                        <img src={this.props.course.image} />
                    </div> */}

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
                        <div className="ed-item s-50 m-100">
                            <a>
                                <i className="dollar icon"></i>
                                {this.props.course.price}
                            </a>
                        </div>

                        <div className="ed-item s-50 m-100">
                            <a>
                                <i className="users icon"></i>
                                Descuento por grupo
                            </a>
                        </div>

                        <div className="ed-item s-50 m-100">
                            <a>
                                <i className="certificate icon"></i>
                                Mas detalles
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}