import React , { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../components/footer';

class My extends Component{
    constructor(){
        super();
        this.state ={

        }
    }
    render(){
        return(
            <div>
                <h1>我是我的中心页面</h1>
                <Footer />
            </div>
        )
    }
}

export default withRouter(My);