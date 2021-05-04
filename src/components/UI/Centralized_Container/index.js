import React from 'react';

import styles from './styles.module.scss';

export default function UICentralizedContainer ({ children }) {
    return (
        <div className={styles.taller}>
          <div className={styles.smoller}>
            { children }
          </div>
        </div>
    );
}