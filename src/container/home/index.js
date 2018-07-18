import React, { Component } from 'react';
import './index.scss'

// redux在组件里面的用法 
import { loadData } from '../../redux/user.redux'
import { connect } from 'react-redux'
@connect(
    state => state.user,
    { loadData }
)

class Home extends Component {
    componentDidMount() {
        this.props.loadData({ userName: 'zw', msg: '正常运行' });
    }
    render() {

        return (
            <div className='home'>
                <h1>{this.props.userName}--home</h1>
                <h2>运行情况-{this.props.msg}</h2>
            </div>
        )
    }
}
export default Home
