import React from 'react';

import ComponentsCard from '../../components/Card/index';

export default function ComponentsList ({ promotions, loading, error }) {
    if (error) {
        return <div style={{
                    color: 'var(--gray-150)',
                    fontSize: '20px',
                    fontFamily: 'Noto Sans JP, sans-serif',
                    fontWeight: '400'
                }}>Algo de errado não está certo</div>;
      }
      if (loading || promotions === null) {
        return <div style={{
                    color: 'var(--gray-150)',
                    fontSize: '20px',
                    fontFamily: 'Noto Sans JP, sans-serif',
                    fontWeight: '400'
                }}>Carregando...</div>;
      }
    
      if (promotions.length === 0) {
        return <div style={{
                    color: 'var(--gray-150)',
                    fontSize: '20px',
                    fontFamily: 'Noto Sans JP, sans-serif',
                    fontWeight: '400'
                }}>Nenhum resultado encontrado</div>;
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