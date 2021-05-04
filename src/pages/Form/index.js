import React from 'react';

import { useParams } from 'react-router-dom';

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