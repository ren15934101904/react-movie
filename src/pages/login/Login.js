import React, { Component } from 'react'
import { WingBlank, List, InputItem, Button, WhiteSpace, Flex,Toast } from 'antd-mobile';
// import axios from 'axios'
import './login.scss';
import {loginApi} from '../../apis/users';
export default class Login extends Component {
    state = {
        username: "",
        pwd: ""
    }
    usernameChange = (val) => {
        // e.target.value
        this.setState({ username: val })
    }
    pwdChange = (val) => {
        this.setState({ pwd: val });
    }
    goToForgot = () => {
        this.props.history.push("/forgot");
    }
    login = () => {
        //1. 收集手机号和密码
        const { username, pwd } = this.state;
        console.log(username, pwd)
        //2. 发送接口
        const params = {
            username,
            password: pwd,
        }
        // axios.post(`/users/login`, params)
        loginApi(params)
            .then((res) => {
                console.log('res', res);
                // const { userInfo, token } = res.data;
                const { userInfo, token } = res;
                if (userInfo && token) {
                    localStorage.setItem("token", token);
                    localStorage.setItem('userInfo', JSON.stringify(userInfo));
                    this.props.history.push("/");
                }else{
                    console.log(111)
                    Toast.fail("用户名或密码错误")
                }
            }).catch((err) => {
                console.log('err', err)
            })
    }
    render() {
        const { username, pwd } = this.state;
        return (
            <div className="login">

                <div className="title">豆瓣账号密码登录</div>
                {/* 表单 */}
                <WingBlank size="lg">
                    <List>
                        <InputItem
                            value={username}
                            onChange={this.usernameChange}
                            placeholder="手机号/邮箱"
                            style={{ borderBottom: '1px solid #ccc' }}
                        />
                        <InputItem
                            value={pwd}
                            onChange={this.pwdChange}
                            placeholder="密码"
                            style={{ borderBottom: '1px solid #ccc' }}
                        />

                    </List>
                    <WhiteSpace size="xl" />
                    <Button onClick={this.login} style={{ backgroundColor: 'green', color: '#fff' }}>登录</Button>
                    <WhiteSpace size="xl" />
                    <Flex justify="between">
                        <div style={{ color: 'green' }}>短信验证登录/注册</div>
                        <div style={{ color: 'green' }}>海外手机密码登录</div>
                    </Flex>

                    <div onClick={this.goToForgot} style={{ position: 'fixed', bottom: 20, left: 0, right: 0, textAlign: 'center', color: '#5B6F98' }}>忘记密码，找回密码</div>

                </WingBlank>

            </div>
        )
    }
}
