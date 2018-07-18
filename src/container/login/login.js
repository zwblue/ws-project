import React, { Component } from 'react';
import './login.scss'

// redux在组件里面的用法 
import { loadData } from '../../redux/user.redux'
import { connect } from 'react-redux'
@connect(
    state => state.user,
    { loadData }
)

class Home extends Component {
    render() {
        return (
            <div className='login'>
               登录页面
            </div>
        )
    }
}
export default Home
