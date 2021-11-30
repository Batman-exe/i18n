import React from "react";
import {FormattedDate, FormattedNumber} from 'react-intl';

const Job = (props) => {
    return (
        <tr>
            <th scope="row">{props.offer.id}</th>
            <td>{props.offer.name}</td>
            <td>{props.offer.company}</td>
            <td>{props.offer.salary} million</td>
            <td>{props.offer.city}</td>
            <td>
                <FormattedDate
                    value={new Date(props.offer.date)}
                    year='numeric'
                    month='long'
                    day='numeric'
                    weekday='long'
                />
            </td>
            <td>
                <FormattedNumber
                    value={props.offer.visits}
                    type='group'
                />
            </td>
        </tr>
    );
};

export default Job;
