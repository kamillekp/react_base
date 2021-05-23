import React from 'react';
import { useParams } from 'react-router';

import ComponentsForm from '../../components/Form/index';
import UICentralizedContainer from '../../components/UI/Centralized_Container/index';

export default function PagesForm () {
    const { id } = useParams();


    return (
        <UICentralizedContainer>
            <ComponentsForm id={id ? Number.parseInt(id, 10) : null}/>
        </UICentralizedContainer>
    );
}