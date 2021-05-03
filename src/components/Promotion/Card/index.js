import React from  'react';

export default function PromotionCard ({ promotion }) {
    return (
        <div>
           <img src={promotion.imageUrl} alt='imagem' /> 
        </div>
    );
}