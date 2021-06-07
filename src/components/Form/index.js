import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import styles from './styles.module.scss';

import useApi from '../utils/useApi';

export default function ComponentsForm ({ id }) {
    const initialValue = {
        title: '',
        url: '',
        imageUrl: '',
        price: 0,
    }

    const [values, setValues] = useState(id ? null : initialValue);
    const history = useHistory();
    const [load] = useApi({
        url: `promotions/${id}`,
        method: 'get',
        onCompleted: (response) => {
            setValues(response.data);
        }
      });

    const [save] = useApi({
        url: id ? `promotions/${id}` : 'promotions',
        method: id ? 'put' : 'post',
        onCompleted: (response) => {
            if(!response.error) {
                history.push('/');  
            }
        }
    });

    
    useEffect (() => {
        if(id) {
            load();
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    function onChange (e) {
        const { name, value } = e.target;
        setValues({...values, [name]: value});
    }

    function onSubmit (e) {
        e.preventDefault();
        save({ 
            data: values,
        });
    }


    return (
        <div className={styles.components_form}>
            <header>
                <h1>PROMO SHOW</h1>
                <Link to='/' className='promotion_link'>VOLTAR</Link>
            </header>
            <h2>Nova Promoção</h2>

            {!values ? (
                <div style={{
                    color: 'var(--gray-150)',
                    fontSize: '20px',
                    fontFamily: 'Noto Sans JP, sans-serif',
                    fontWeight: '400'
                }}>Carregando...</div>)
            : (
                <form onSubmit={onSubmit}>
                    <div className={styles.components_form}>
                        <label htmlFor='title'>Título *</label>
                        <input id='title' name='title' type='text' required onChange={onChange} value={values.title} /> <br/>

                        <label htmlFor='url'>Link do site *</label>
                        <input id='url' name='url' type='text' required onChange={onChange} value={values.url} /> <br/>

                        <label htmlFor='imageUrl' >Imagem (URL) *</label>
                        <input id='imageUrl' name='imageUrl' type='text' required onChange={onChange} value={values.imageUrl} /> <br/>

                        <label htmlFor='price'>Price *</label>
                        <input id='price' name='price' type='numeric' required onChange={onChange} value={values.price} />
                    </div>
                    <button type='submit'>Salvar</button>
                </form>
            )}
        </div>
    );
}