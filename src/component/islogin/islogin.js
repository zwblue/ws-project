import React from 'react'
import { withRouter } from 'react-router-dom';
@withRouter

class IsLogin extends React.Component {
    componentWillMount() {
        const allRouterArray = ['/login', '/home'];
        const pathname = this.props.location.pathname;
        if (localStorage.getItem('token')) {
            if (sessionStorage.getItem('isLogin')) {
                if (pathname === '/login' || allRouterArray.indexOf(pathname) === -1) {
                    this.props.history.goBack();
                }
            } else {
                this.props.history.push('/login')
            }
        } else {
            this.props.history.push('/login')
        }
    }
    render() {
        return null;
    }
}
export default IsLogin