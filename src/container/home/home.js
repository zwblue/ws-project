
import React, { Component } from 'react';
import { Message } from 'antd'
import './home.scss'

import { getInfo } from '../../redux/user.redux'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import ApplyPro from '../applyPro/applyPro';
import HomeIndex from './index';
import CountPro from '../countPro/countPro';
import DelayPro from '../delayPro/delayPro';
import FinishedPro from '../finishedPro/finishedPro';
import MyPro from '../myPro/myPro';
import OnlinePro from '../onlinePro/onlinePro';
import RecyclePro from '../recyclePro/recyclePro';
import DayReport from '../dayReport/dayReport';

import { getMenuApi } from '../../api/user'
// 布局
import { Layout, Menu } from 'antd';
const { Sider, Content } = Layout;



// redux在组件里面的用法 

@connect(
    state => state.user,
    { getInfo }
)

class SiderDemo extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        collapsed: false,
        current: '0',
        menuList: [
            { title: '首页', url: '/home' },
            { title: '申请', url: '/home/applyPro' },
            { title: '上线待审批', url: '/home/onlinePro' },
            { title: '我的项目', url: '/home/myPro' },
            { title: '延期待审批', url: '/home/delayPro' },
            { title: '归档项目', url: '/home/finishedPro' },
            { title: '项目回收站', url: '/home/recyclePro' },
            { title: '项目统计', url: '/home/countPro' },
            { title: '日报', url: '/home/dayReport' }
        ]
    };
    componentWillMount() {
        console.log(this.props.location.pathname)
        this.state.menuList.forEach((val,index)=>{
            if( val.url===this.props.location.pathname){
                console.log(val,index)
                this.setState({current:String(index)})
            }
        })
    }
    componentDidMount() {
        localStorage.getItem('token') ? this.props.getInfo({}) : null;
    }
    // async getInfoData() {
    //     try {
    //         const data = await getMenuApi()
    //     } catch (e) {
    //         Message.error('')
    //     }


    // }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    handleClick = (e) => {
        console.log('click ', e.key);
        this.setState({
            current: e.key,
        },()=>{
            let current=this.state.current;
            this.props.history.push(this.state.menuList[current].url);
        });
    }
    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <Menu theme="dark" mode="inline" selectedKeys={[this.state.current]} onClick={this.handleClick} defaultSelectedKeys={['1']}>
                        <Menu.ItemGroup key="g1" title="项目管理系统">
                            {this.state.menuList.map((item, index) => {
                                return (<Menu.Item key={index}>
                                    <span>{item.title}</span>
                                </Menu.Item>)
                            })}
                        </Menu.ItemGroup>
                    </Menu>
                </Sider>
                <Layout>
                    <div className='header-title blue'>{this.state.menuList[this.state.current].title}</div>
                    <Content style={{ margin: '0 16px 16px', padding: 15, background: '#fff', minHeight: 280 }}>
                        <Switch>
                            <Route path='/home' exact component={HomeIndex}></Route>
                            <Route exact path='/home/applyPro' component={ApplyPro}></Route>
                            <Route path='/home/onlinePro' component={OnlinePro}></Route>
                            <Route path='/home/myPro' component={MyPro}></Route>
                            <Route path='/home/delayPro' component={DelayPro}></Route>
                            <Route path='/home/finishedPro' component={FinishedPro}></Route>
                            <Route path='/home/recyclePro' component={RecyclePro}></Route>
                            <Route path='/home/countPro' component={CountPro}></Route>
                            <Route path='/home/dayReport' component={DayReport}></Route>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default SiderDemo

