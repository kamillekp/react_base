import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
 
import useApi from '../utils/useApi';
import styles from './styles.module.scss';

import ComponentsList from '../List/index';

export default function CompentsSearch () {
    const mounteRef = useRef(null);
    const [search, setSearch] = useState ('');
    const [load, loadInfo] = useApi({
        debounceDelay: 500,
        url: 'promotions',
        method: 'get',
        params: {
          _embed: 'comments',
          _order: 'desc',
          _sort: 'id',
          title_like: search || undefined,
        },
      });

      useEffect(() => {
        load({
            debounced: mounteRef.current,
        });

        if(!mounteRef.current) {
            mounteRef.current = true;
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
      }, [search]);

    return (
        <div className={styles.promotion_search}>
            <header>
                <h1>PROMO SHOW</h1>
                <Link to='/register' className='promotion_link'>NOVA PROMOÇÃO</Link>
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
                 promotions={loadInfo.data}
                 loading={loadInfo.loading}
                 error={loadInfo.error}
            />
        </div>
    );
}