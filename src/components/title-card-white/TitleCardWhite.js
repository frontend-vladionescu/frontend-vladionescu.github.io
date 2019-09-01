import React from 'react';

import styles from './title-card-white.module.css';

const TitleCardWhite = ({reversed = true, imageName, title, number, subtitle}) => {

    return (
        <div className={styles.container} style={{ flexDirection: 'row' }}>
            <div className={styles.description}>
                <div className={styles.title}>
                    <span>0{number}.</span>
                    <h2>{title}</h2>
                </div>
            </div>
            <i className="fas fa-angle-down"></i>
        </div>
    );
};

export default TitleCardWhite;
