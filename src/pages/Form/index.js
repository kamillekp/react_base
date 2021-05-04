import React from 'react';
import { useParams } from 'react-router-dom';

import styles from './styles.module.scss';

export default function PagesForm () {
    const { id } = useParams();

    return (
    <div>
        FORM
        {id && (
            <div>id: {id}</div>
        )}
    </div>
    );
}