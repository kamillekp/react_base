import React from 'react';
import {
    BrowserRouter as Router, 
    Route, 
    Switch} from 'react-router-dom';

import Pages_Search from './pages/Search/index';
import Pages_Form from './pages/Form/index';

export default function Routes(){
   return(
       <Router>
            <Switch>
                <Route path = "/" exact component={Pages_Search}/>

                <Route path = "/register" component={Pages_Form}/>
                <Route path = "/edit/:id" component={Pages_Form}/>
            </Switch>
       </Router> 
    );
}