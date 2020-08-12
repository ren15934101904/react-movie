import React, { Component, useState,useEffect } from 'react'

/* 
如果抽取组件之间的公共逻辑
    vue里面如何抽取组件的公共逻辑？？
        1. vuex
        2. 提取公共组件
        3. mixin
    react里面如何提取公共逻辑
        1. 高阶组件
            就是一个函数，它接受一个组件作为参数，然后返回一个新的组件
        2. render props
        3. 自定义HOOK
            自定义hook的名字必须以use开头



*/
/* export function HeighterOrderComp(Comp) {
    class InnerComp extends Component {
        state = {
            list: []
        }
        componentDidMount() {
            setTimeout(() => {
                this.setState({
                    list: [
                        { id: 0, name: '苹果', price: 10, num: 1 },
                        { id: 1, name: '香蕉', price: 20, num: 3 },
                        { id: 2, name: '梨子', price: 9, num: 2 },
                    ]
                })
            }, 1000);
        }
        render() {
            return <Comp list={this.state.list} />
        }
    }

    return <InnerComp />
}

 */


export default function useList(initList) {
    const [list, setList] = useState(initList);
    useEffect(()=>{
        setTimeout(() => {
            setList([
                { id: 0, name: '苹果', price: 10, num: 1 },
                { id: 1, name: '香蕉', price: 20, num: 3 },
                { id: 2, name: '梨子', price: 9, num: 2 },
            ]);
        }, 1000);
    },[]);
    function changeNum(index, n) {
        //1.找到操作的数据
        //2. 修改那条数据的num
        list[index].num += n;
        console.log('list', list)
        setList([...list]);//注意引用类型，要修改其应用，才能触发界面的更新
    }
    function removeHandler(index) {
        list.splice(index, 1);
        setList([...list]);
    }
   return {list,changeNum,removeHandler};
}
