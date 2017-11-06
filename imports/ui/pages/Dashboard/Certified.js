import React, { Component } from 'react';

const Certified = (props) => {
    const { name,
            lastname,
            id,
            datecourse,
            expdate,
            level,
            company,
            trainer,
            state,
            registryNumber
    } = props.certified;

    return (
        <tr>
            <td> { props.number } </td>
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
        </tr>
    );
}

export default Certified;