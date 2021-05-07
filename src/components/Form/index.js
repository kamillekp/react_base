import React, { useState } from 'react';

import { useParams, useHistory } from 'react-router-dom';

import styles from './styles.module.scss';

import api from '../../Services/api';


export default function ComponentsForm () {
    const history = useHistory();
    const { id } = useParams();

    const initialValue = {
        title: '',
        url: '',
        imageUrl: '',
        price: 0,
    }
    const [values, setValues] = useState(initialValue);

    function onChange (e) {
        const { name, value } = e.target;
        setValues({...values, [name]: value});
    }

    function onSubmit (e) {
        e.preventDefault();

        if (api.post('promotions', values)) {
            history.push('/');  
        }
    }

    return (
        <div className={styles.components_form}>
            <h1>PROMO SHOW</h1>
            <h2>Nova Promoção</h2>

            <form onSubmit={onSubmit}>
                <div className={styles.components_form}>
                    <label htmlFor='title'>Título *</label>
                    <input id='title' name='title' type='text' required onChange={onChange} /> <br/>

                    <label htmlFor='url'>Link do site *</label>
                    <input id='url' name='url' type='text' required onChange={onChange} /> <br/>

                    <label htmlFor='imageUrl' >Imagem (URL) *</label>
                    <input id='imageUrl' name='imageUrl' type='text' required onChange={onChange} /> <br/>

                    <label htmlFor='price'>Price *</label>
                    <input id='price' name='price' type='numeric' required onChange={onChange} />
                </div>
                <button type='submit'>Salvar</button>
            </form>
        </div>
    );
}