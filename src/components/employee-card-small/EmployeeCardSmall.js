import React from 'react';

import styles from './teamcard.module.css';

const TeamCard = ({name, title, imageName}) => {
    return (
        <div className={styles.card}>
            <div className={styles.image} style={{backgroundImage: `url("assets/${imageName}")`}}></div>
            <h3>{name}</h3>
            <p>{title}</p>
        </div>
    )
};

export default TeamCard;
