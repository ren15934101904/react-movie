import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//引入重置样式
import './assets/styles/reset.css';
//引入的字体图标
// import './assets/fonts/iconfont.css';
//引入ant design mobile的全局样式
import 'antd-mobile/dist/antd-mobile.css';
//引入公共样式
import './assets/styles/common.css';
//引入axios拦截器
import './utils/axiosUtil';


ReactDOM.render(
    <App />,
  document.getElementById('root')
);

