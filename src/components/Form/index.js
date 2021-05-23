import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import styles from './styles.module.scss';
import api from '../../Services/api';


export default function ComponentsForm ({ id }) {
    const initialValue = {
        title: '',
        url: '',
        imageUrl: '',
        price: 0,
    }

    const [values, setValues] = useState(id ? null : initialValue);
    const history = useHistory();

    useEffect (() => {
        async function verifyId () {
            if(id) {
                const response = await api.get(`promotions/${id}`);
                setValues(response.data);

                console.log(response.data);
            }
        }
        verifyId();
    }, [id])

    function onChange (e) {
        const { name, value } = e.target;
        setValues({...values, [name]: value});
    }

    function onSubmit (e) {
        e.preventDefault();

        const method = id ? 'put' : 'post'
        const url = id ? `promotions/${id}` : 'promotions'

        api[method](url, values).then((response) => {
            history.push('/');  
        })
    }


    return (
        <div>
            {!values ? (
                <div style={{
                    color: 'var(--gray-150)',
                    fontSize: '20px',
                    fontFamily: 'Noto Sans JP, sans-serif',
                    fontWeight: '400'
                }}>Carregando...</div>)
            : (
                <div className={styles.components_form}>
                    <h1>PROMO SHOW</h1>
                    <h2>Nova Promoção</h2>

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
                </div>
            )}
        </div>
    );
}