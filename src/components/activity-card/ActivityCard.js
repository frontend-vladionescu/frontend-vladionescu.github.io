import React from 'react';
import { Link } from 'react-router-dom';

import styles from './activitycard.module.css';

const ActivityCard = ({number, title, description, linkUrl}) => {
    return (
        <div className={styles.container}>
            <span>0{number}.</span>
            <h3>{title}</h3>
            <p>{description}</p>
            <Link to={`${linkUrl}`}>Afla Mai Multe</Link>
        </div>
    )
};

export default ActivityCard;
