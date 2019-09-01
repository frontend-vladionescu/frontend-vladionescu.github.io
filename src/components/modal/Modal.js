import React from 'react';

import styles from './modal.module.css';

const Modal = ({children, onClose}) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modal__header}><h3>Programare</h3><i className="" onClick={onClose}>&#10005;</i>
            </div>
            <div className={styles.modal__content}>{children}</div>
        </div>
    );
};

export default Modal;
