import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Login from '../pages/login';
import Home from '../pages/home';
import Classifiation from '../pages/classifiation';
import Cart from '../pages/cart';
import My from '../pages/my';

class RouterMap extends React.Component {
    render(){
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/classifiation' component={Classifiation}/>
                    <Route path='/cart' component={Cart}/>
                    <Route path='/my' component={My}/>
                </Switch>
            </HashRouter>
        )
    }
}

export default RouterMap;