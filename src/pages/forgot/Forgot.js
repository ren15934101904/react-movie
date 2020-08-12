import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Forgot extends Component {
    render() {
        return (
            <div style={{ display: 'flex', height: '100%' }}>
                <div style={{ width: 100, backgroundColor: '#000', color: '#fff' }}>
                    <div><NavLink to="/forgot/person" activeStyle={{ color: 'red' }}>人员管理</NavLink></div>
                    <div><NavLink to="/forgot/good" activeStyle={{ color: 'red' }} >商品管理</NavLink></div>
                </div>
                <div style={{ flex: 1, backgroundColor: 'orange' }}>
                    {this.props.children}
                    {/* <HashRouter> */}
                    {/*  <Switch>
                        <Redirect from="/reg" exact to="/reg/person"/>
                        <Route path="/reg/person" render={()=><div>人员管理</div>}/>
                        <Route path="/reg/good" render={()=><div>商品管理</div>}/>
                    </Switch> */}
                    {/* </HashRouter> */}
                </div>
            </div>
        )
    }
}
