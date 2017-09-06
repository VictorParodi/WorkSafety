import React, { Component } from 'react';

export default class Client extends Component {
    render() {
        return (
            <div className="ed-item s-70 m-1-3 client-logo-container main-center">
                <img src={this.props.client.image} className="client-image" />
            </div>
        )
    }
}