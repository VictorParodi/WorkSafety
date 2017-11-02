import React, { Component } from 'react';

const Client = (props) => {
    return (
        <div className="ed-item s-70 m-1-3 client-logo-container main-center">
            <img src={props.client.image} className="client-image" />
        </div>
    )
}

export default Client;