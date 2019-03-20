import React , { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../components/footer';

class Cart extends Component{
    constructor(){
        super();
        this.state ={

        }
    }
    render(){
        return(
            <div>
                <h1>我是购物车页面</h1>
                <Footer />
            </div>
        )
    }
}

export default withRouter(Cart);