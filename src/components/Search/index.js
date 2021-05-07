import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
 
import api from '../../Services/api';
import styles from './styles.module.scss';

import ComponentsList from '../List/index';

export default function CompentsSearch () {
    const [promotions, setPromotions] = useState ([]);
    const [search, setSearch] = useState ('');

    useEffect (() => {
        async function  takeData () {
            const params = {};
            if (search) {
                params.title_like = search;
            }

            const response = await api.get('promotions/?_embed=comments&_order=desc&_sort=id', {params});
            setPromotions(response.data);
        }
        takeData();
    }, [search])

    return (
        <div className={styles.promotion_search}>
            <header>
                <h1>PROMO SHOW</h1>
                <Link to='/register' className={styles.promotion_link}>NOVA PROMOÇÃO</Link>
            </header>

            <section>
                <input 
                    type='search' 
                    placeholder='Buscar'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </section>

            <ComponentsList 
                promotions={promotions} 
                loading={!promotions.length} 
            />
        </div>
    );
}