import React, { useState, useEffect } from 'react';

import styles from './carousel.module.css';

let crtIndex = 0;
let interval;

const Carousel = ({children}) => {
    const len = children.length;
    const [crtItem, setItem] = useState(children[crtIndex]);

    useEffect(() => {
        interval = setInterval(() => {
            if (crtIndex === len - 1) {
                crtIndex = 0;
            } else {
                crtIndex++;
            }
            setItem(children[crtIndex])
        }, 3000);
        return () => clearInterval(interval);
    });

    const selectItem = (index) => {
        clearInterval(interval);
        crtIndex = index;
        setItem(children[index]);
    };

    const moveItem = (increment) => {
        crtIndex = crtIndex + increment;
        if(crtIndex < 0) {
            crtIndex = len - 1;
        } else if(crtIndex >= len) {
            crtIndex = 0;
        }
        selectItem(crtIndex);
    };

    return (
        <div>
            <div>{crtItem}</div>
            <div className={styles.navigation}>
                <i className="fas fa-caret-left" onClick={() => moveItem(-1)}></i>
                {children.map((_, index) =>
                    index === crtIndex ?
                        <i key={index} className="fas fa-circle"></i> :
                        <i key={index} className="far fa-circle" style={{fontSize: '10px'}}onClick={() => selectItem(index)}></i>
                )}
                <i className="fas fa-caret-right" onClick={() => moveItem(1)}></i>
            </div>
        </div>
    );
};

export default Carousel;
