import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
 
import api from '../../Services/api';
import styles from './styles.module.scss';

import PromotionCard from '../../components/Card/index';

export default function CompentsSearch () {
    const [promotions, setPromotions] = useState ([]);
    const [search, setSearch] = useState ('');

    useEffect (() => {
        async function  takeData () {
            const response = await api.get('promotions/?_embed=comments');
            setPromotions(response.data);
        }
        async function  searchDatas () {
            const response = await api.get('promotions/?_embed=comments');
            setPromotions(response.data);
        }
        takeData();
    }, [])

    return (
        <div className={styles.promotion_search}>
            <header>
                <h1>PROMO SHOW</h1>
                <Link to='/create' className={styles.promotion_link}>NOVA PROMOÇÃO</Link>
            </header>

            <section>
                <input 
                    type='search' 
                    placeholder='Buscar'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </section>

            {promotions.map((promotion) => (
                <PromotionCard promotion={promotion} />
              ))}
        </div>
    );
}