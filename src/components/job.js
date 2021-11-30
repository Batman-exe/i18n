import React, {useContext} from "react";
import {FormattedDate, FormattedMessage, FormattedNumber} from 'react-intl';
import {Context} from './LanguageWrapper';

const Job = (props) => {
    const context = useContext(Context);
    return (
        <tr>
            <th scope="row">
                <FormattedMessage
                    id={`${props.offer.id}id`}
                    defaultMessage={props.offer.id}
                />
            </th>
            <td>
                <FormattedMessage
                    id={`${props.offer.name}name`}
                    defaultMessage={props.offer.name}
                />
            </td>
            <td>
                <FormattedMessage
                    id={`${props.offer.company}company`}
                    defaultMessage={props.offer.company}
                />
            </td>
            <td>
                <FormattedMessage
                    id={`${props.offer.salary}salary`}
                    defaultMessage={props.offer.salary + ` ${context.locale==='en'?'million':'millones'}`}
                />
            </td>
            <td>
                <FormattedMessage
                    id={`${props.offer.city}city`}
                    defaultMessage={props.offer.city}
                />
            </td>
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
