import React, { Component } from 'react';
import { Button,Toast } from 'antd-mobile';
import '../css/login.css';
import { loginApi } from '../api/api';
import  http  from '../utils/ajax';
import logo from '../image/logo.png';

class Login extends Component {
  constructor() {
    super();
    this.state ={
      val:1
    }
  }
  async getLogin(){
    var params ={
      user: "xm",
      password: 123
    }
    const res = await http.post(loginApi,params)
    if(res.status===200){
      Toast.success('登录成功', 1);
      console.log(res);
    }
  }
  componentDidMount(){
    this.getLogin()
  }
  render() {
    return (
      <div>
        <div className="logoimg">
          <img src={logo} alt="公司logo" />
        </div>
      </div>
    );
  }
}

export default Login;