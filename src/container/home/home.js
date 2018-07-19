
import React, { Component } from 'react';
import { Message } from 'antd'
import './home.scss'

import { getInfo } from '../../redux/user.redux'
import { connect } from 'react-redux'

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
    state = {
        collapsed: false,
        current: '1'
    };
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
                            <Menu.Item key="1">
                                <span>nav 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <span>nav 2</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <span>nav 3</span>
                            </Menu.Item>
                        </Menu.ItemGroup>
                    </Menu>
                </Sider>
                <Layout>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        Content
          </Content>
                </Layout>
            </Layout>
        );
    }
}

export default SiderDemo

