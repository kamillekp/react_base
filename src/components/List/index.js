import React from 'react';

import ComponentsCard from '../../components/Card/index';

export default function ComponentsList ({ loading, promotions }) {
    if (loading) {
        return <div style={{
            color: 'var(--gray-150)',
            fontSize: '20px',
            fontFamily: 'Noto Sans JP, sans-serif',
            fontWeight: '400'
        }}>Carregando...</div>
    }

    return (
        <div>
            {promotions.map((promotion) => (
                <li key = {promotion.id} style = {{ listStyleType: 'none' }}>
                    <ComponentsCard promotion={promotion} />
                </li>
            ))}
        </div>
    );
    
}