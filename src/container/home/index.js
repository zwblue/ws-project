import React, { Component } from 'react';

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
            <div>
                <h1>home-{this.props.userName}</h1>
                <h1>运行情况-{this.props.msg}</h1>
            </div>
        )
    }
}
export default Home
