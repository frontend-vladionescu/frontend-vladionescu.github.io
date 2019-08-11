import React from 'react';

import styles from './ownercard.module.css';

const OwnerCard = ({name, title, paragraphs, imageName}) => {
    return (
        <article className={styles.container}>
            <div className={styles.image} style={{backgroundImage: `url("assets/${imageName}")`}}></div>
            <div className={styles.description}>
                <h1>{name}</h1>
                <h2>{title}</h2>
                {paragraphs.map((text) => <p>{text}</p>)}
            </div>
        </article>
    )
};

export default OwnerCard;
