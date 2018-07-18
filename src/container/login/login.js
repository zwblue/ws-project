import React, { Component } from 'react';
import './login.scss'

import { loadData } from '../../redux/user.redux'
import { connect } from 'react-redux'

// 布局
import { Layout, Menu, Icon } from 'antd';
const { Sider, Content } = Layout;


// redux在组件里面的用法 

@connect(
    state => state.user,
    { loadData }
)


class SiderDemo extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
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
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
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

