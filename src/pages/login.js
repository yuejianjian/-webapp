import React, { Component } from 'react';
import { Button,Toast,List, InputItem, } from 'antd-mobile';
import { createForm } from 'rc-form';
import '../css/login.css';
import { loginApi } from '../api/api';
import  http  from '../utils/ajax';
import logo from '../image/logo.png';
import user from '../image/user.png';
import password from '../image/password.png';

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
  moneyKeyboardWrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

class Login extends Component {
  constructor() {
    super();
    this.state ={
      msgdata:''
    }
  }
  componentDidMount =() =>{
    if(localStorage.getItem("inputdata")){
      var inputdata =localStorage.getItem("inputdata");
      this.setState({
        msgdata:JSON.parse(inputdata)
      })
    }
  }
  async getLogin(datas){
    const res = await http.post(loginApi,datas)
    console.log(res);
    if(res.data.length>0){
      Toast.success('登录成功', 1);
      localStorage.setItem("userInfo",res.data); 
      localStorage.setItem("inputdata",JSON.stringify(datas));
      this.props.history.push('/home');
    }else{
      Toast.fail('登录失败', 1);
    }
  }
  Login =() =>{
    this.props.form.validateFields((error, value) => {
      if(value){
        let params ={
          user: value.user,
          password: value.password
        }
        this.getLogin(params)
      }
    });
  }
  render() {
    const { getFieldProps } = this.props.form;
    console.log(this.state.msgdata.user);
    return (
      <div className="loginbox">
        <div className="logoimg">
          <img src={logo} alt="公司logo" />
        </div>
        <List>
          <InputItem
            {...getFieldProps('user')}
            placeholder="请输入账号"
          ><div style={{ backgroundImage: `url(${user})`, backgroundSize: 'cover', height: '22px', width: '22px' }} /></InputItem>
          <InputItem
            {...getFieldProps('password')}
            type="password"
            placeholder="请输入密码"
          ><div style={{ backgroundImage: `url(${password})`, backgroundSize: 'cover', height: '22px', width: '22px' }} /></InputItem>
        </List>
        <Button type="primary" className="login" onClick={this.Login.bind(this)}>登录</Button>
      </div>
    );
  }
}

export default createForm()(Login);