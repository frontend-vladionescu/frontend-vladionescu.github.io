import React from 'react';

import styles from './employee-card-largel.module.css';

const EmployeeCardLarge = ({name, title, paragraphs, imageName, reversed}) => {
    return (
        <article className={styles.container} style={{flexDirection: reversed ? 'row-reverse' : 'unset'}}>
            <div className={styles.image} style={{backgroundImage: `url("assets/${imageName}")`}} />
            <div className={styles.description}>
                <h1>{name}</h1>
                <h2>{title}</h2>
                {paragraphs.map((text) => <p>{text}</p>)}
            </div>
        </article>
    )
};

export default EmployeeCardLarge;
