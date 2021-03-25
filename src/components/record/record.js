import React from 'react';

import styles from '../../assets/styles/record.module.scss'

const Record = (props) => {

    return (
        <div>
            <p>{props.date}</p>
            <p>{props.productName}, {props.price}{props.valuta}</p>
        </div>
    );
};

export default Record;