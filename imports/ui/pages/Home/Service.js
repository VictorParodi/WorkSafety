import React, { Component } from 'react';

export default class Service extends Component {
    render() {
        return (
            <div className="ed-item s-100 m-1-3 service-item-container s-main-center m-main-center">
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