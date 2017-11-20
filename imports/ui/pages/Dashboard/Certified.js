import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Certifieds } from './../../../api/certifieds/certifieds';

class Certified extends Component {
    state = {
        subscription: {
            users: Meteor.subscribe('users')
        }
    }

    renderActions(id) {
        let route = FlowRouter.getRouteName();
        if (route === 'certifieds') {
            return false;
        } else {
            return <Action id={id} />;
        }
    }

    render() {
        const {
            _id,
            name,
            lastname,
            id,
            datecourse,
            expdate,
            level,
            company,
            trainer,
            state,
            registryNumber
        } = this.props.certified;

        return (
            <tr>
                <td> { this.props.number } </td>
                <td> { name } </td>
                <td> { lastname } </td>
                <td> { id } </td>
                <td> { datecourse } </td>
                <td> { expdate } </td>
                <td> { level } </td>
                <td> { company } </td>
                <td> { trainer } </td>
                <td> { state } </td>
                <td> { registryNumber } </td>
                { this.renderActions(_id) }
            </tr>
        );
    }
}

class Action extends Component {
    delCertified() {
        console.log('El id es ', this.props.id);
        Certifieds.remove(this.props.id);
    }

    render() {
        return(
            <td className="ed-container full no-padding">
                <div className="ed-item s-50">
                    <i className="green edit icon actions_icons"></i>
                </div>
    
                <div className="ed-item s-50" onClick={this.delCertified.bind(this)}>
                    <i className="red trash icon actions_icons"></i>
                </div>
            </td>
        );
    }
}

export default Certified;