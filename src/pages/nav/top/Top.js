import React, { Component } from 'react'
import  UseStateHookDemo from './01-hook之useState/UseStateHookDemo'
import UseMemoHookDemo from './02-hook之useMemo/UseMemoHookDemo';
import UseEffectDemo from './03-hook之useEffect/UseEffectDemo';
import UseEffectDemo2 from './03-hook之useEffect/UseEffectDemo2';
import ShopCart from './04-函数组件版的购物车/ShopCart';
export default class Top extends Component {
    render() {
        return (
            <div>
                <ShopCart/>
            </div>
        )
    }
}
