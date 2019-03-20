import React , { Component } from 'react';
import { TabBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom';

class Footer extends Component{
    constructor(props){
        super(props);
        this.state ={
            selectedTab: 'blueTab',
            hidden: false,
            fullScreen: false,
        }
    }
    render(){
        const {pathname} = this.props.location;
        return(
            <div style={ { position: 'fixed', bottom:0, width: '100%',}}>
            <TabBar
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="white"
              hidden={this.state.hidden}
            >
              <TabBar.Item
                title="首页"
                key="Life"
                icon={<div style={{
                  width: '22px',
                  height: '22px',
                  background:`url(${require("../image/shouye.png")}) center center /  21px 21px no-repeat`
                 }}
                />
                }
                selectedIcon={<div style={{
                  width: '22px',
                  height: '22px',
                  background:`url(${require("../image/shouye1.png")}) center center /  21px 21px no-repeat`
                }}
                />
                }
                selected={pathname==='/home'}
                onPress={()=>{
                  this.props.history.push('/home')
                }}
                data-seed="logId"
              >
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background:`url(${require("../image/fenlei.png")}) center center /  21px 21px no-repeat` 
                  }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background:`url(${require("../image/fenlei2.png")}) center center /  21px 21px no-repeat`  
                  }}
                  />
                }
                title="商品分类"
                key="Koubei"
                selected={pathname==='/classifiation'}
                onPress={()=>{
                  this.props.history.push('/classifiation')
                }}
                data-seed="logId1"
              >
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background:`url(${require("../image/gouwuche1.png")}) center center /  21px 21px no-repeat` 
                    }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background:`url(${require("../image/gouwuche.png")}) center center /  21px 21px no-repeat` }}
                  />
                }
                title="购物车"
                key="Friend"
                selected={pathname==='/cart'}
                onPress={()=>{
                  this.props.history.push('/cart')
                }}
              >
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background:`url(${require("../image/wode1.png")}) center center /  21px 21px no-repeat` 
                    }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background:`url(${require("../image/wode.png")}) center center /  21px 21px no-repeat` }}
                  />
                }
                title="我的"
                key="my"
                selected={pathname==='/my'}
                onPress={()=>{
                  this.props.history.push('/my')
                }}
              >
              </TabBar.Item>
            </TabBar>
          </div>
        )
    }
}
export default withRouter(Footer);