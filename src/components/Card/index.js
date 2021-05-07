import React from  'react';
import styles from './style.module.scss'

export default function ComponentsCard ({ promotion }) {
    return (
        <div className={styles.promotion_card} >
           <img src={promotion.imageUrl} alt={promotion.title}/> 

            <div className={styles.promotion_card_info}>
               <h1> {promotion.title} </h1>
               <span> R$ {promotion.price} </span>

               <footer>
                   {promotion.comments.length > 0 ? (
                       <div className={styles.promotion_card_comment}>
                           "{promotion.comments[0].comment}"
                       </div>
                   ) : (
                       <div className={styles.promotion_card_comment} style={{color: 'var(--gray-50)'}}>
                           aaaaaaaaaaaaaa
                       </div>
                   )}

                    <div className={styles.promotion_card_commentsCount}>
                        {promotion.comments.length} 
                        {promotion.comments.length > 1 ? ' comentários' : ' comentário'}
                    </div>

                    <a 
                        href={promotion.url} 
                        target='_blank' 
                        rel='noreferrer' 
                    >
                        IR PARA O SITE
                    </a>
               </footer>
            </div>
        </div>
    );
}