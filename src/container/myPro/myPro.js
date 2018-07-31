import React, { Component } from 'react';
class Page extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
  }
  render(){
    console.log(3333333,this.props)
    return(
      <div>myPro页面</div>
    )
  }
}
export default Page