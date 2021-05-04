import React from 'react';
import '../../global.scss';

import CompentsSearch from "../../components/Search/index";
import UICentralizedContainer from '../../components/UI/Centralized_Container/index';

export default function PagesSearch () {
  return (
    <UICentralizedContainer>  
      <CompentsSearch/>
    </UICentralizedContainer>
  );
}