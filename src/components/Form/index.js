import React from 'react';
import { useParams } from 'react-router-dom';

import styles from './styles.module.scss';


export default function ComponentsForm () {
    const { id } = useParams();

    return (
        <div className={styles.components_form}>
            <h1>PROMO SHOW</h1>
            <h2>Nova Promoção</h2>

            <form>
                <div className={styles.components_form}>
                    <label htmlFor='title'>Título</label>
                    <input id='title' name='title' type='text' /> <br/>

                    <label htmlFor='link'>Link</label>
                    <input id='link' name='link' type='text' /> <br/>

                    <label htmlFor='image'>Imagem (URL)</label>
                    <input id='image' name='image' type='text' /> <br/>

                    <label htmlFor='price'>Price</label>
                    <input id='price' name='price' type='numeric' />
                </div>
                <button type='submit'>Salvar</button>
            </form>
        </div>
    );
}