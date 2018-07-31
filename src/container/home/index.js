import React, { Component } from 'react';
import { Divider, Row, Col } from 'antd';
import './index.scss'

class Page extends Component {
  state = {
    list: [{ title: '开发中的项目', num: 1 }, { title: '开发项目', num: 3 }, { title: '未开始的项目', num: 14 }, { title: '归档的项目', num: 8 }]
  }
  render() {
    return (
      <div>
        <Row gutter={32}>
          <Col span={12}>
            <Divider>产品推送</Divider>
            <Row gutter={16}>
              {this.state.list.map((val, index) => {
                return (<Col span={6} key={index}>
                  <div className='pro-box'>
                    <div className='pro-title'>{val.title}</div>
                    <div className='pro-num'>{val.num}</div>
                  </div>
                </Col>)
              })}
            </Row>
          </Col>
          <Col span={12}>
            <Divider>活动推送</Divider>
            <Row gutter={16}>
            {this.state.list.map((val, index) => {
                return (<Col span={6} key={index}>
                  <div className='pro-box'>
                    <div className='pro-title'>{val.title}</div>
                    <div className='pro-num'>{val.num}</div>
                  </div>
                </Col>)
              })}
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Page
