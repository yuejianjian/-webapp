import React , { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Carousel,Toast,List, InputItem, } from 'antd-mobile';
import Footer from '../components/footer';
import { bannerImg } from '../api/api';
import  http  from '../utils/ajax';

class Home extends Component{
    constructor(props){
        super(props);
        this.state ={
            imgUrl:[],
            data: ['1', '2', '3'],
            imgHeight: 500,
        }
    }
    componentDidMount =()=>{
        //获取轮播图信息
        this.getLanner();
    }
    async getLanner(){
        console.log(1111);
        let res = await http.post(bannerImg);
        console.log(res);
        if(res.status===200){
            this.setState({
                imgUrl:res.data
            })
        }else{
            Toast.fail('获取轮播图失败', 1);
        }
    }
    render(){
        return(
            <div>
                <Carousel
                    autoplay={true}
                    infinite={true}
                    autoplayInterval={3000}
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    >
                    {this.state.imgUrl.map(val => (
                        <a
                        key={val}
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={val.Banner_image}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                </Carousel>
                <Footer />
            </div>
        )
    }
}

export default withRouter(Home);