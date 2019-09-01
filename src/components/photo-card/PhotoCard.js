import React from 'react';

import styles from './photocard.module.css';

const PhotoCard = ({photoName, title, cardTitle, cardParagraphs, isButtonVisible, buttonLink, buttonText}) => {
    return (
        <div className={styles.container}>

            <div className={styles.image__container} style={{backgroundImage: `url("assets/${photoName}")`}}>
                <div className={styles.overlay}>
                    <p className={styles.title}>{title}</p>
                </div>
            </div>
            <div className={styles.card}>
                <h2>{cardTitle}</h2>
                {cardParagraphs.map((text) => <p>{text}</p>)}
                {isButtonVisible &&
                <button className="main__button" onClick={() => window.location = buttonLink}>{buttonText}</button>}
            </div>
        </div>
    )
};

export default PhotoCard;
