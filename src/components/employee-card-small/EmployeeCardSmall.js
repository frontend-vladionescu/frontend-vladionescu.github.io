import React from 'react';

import styles from './employee-card-small.module.css';

const EmployeeCardSmall = ({name, title, description}) => {
    return (
        <div className={styles.card}>
            <h3>{name}</h3>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
};

export default EmployeeCardSmall;
