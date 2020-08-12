import React, { useEffect, useState } from 'react'

/* 
在组件里面的副作用：发接口、操作DOM，操作本地存储等。。。

*/

/* 
useEffect是以前类组件三个生命周期钩子函数的集合：componentDidMount componentDidUpdate componentWillUnmount



*/

export default function UseEffectDemo() {
    const [count, setCount] = useState(0);
    /* 
    useEffect两个参数
        参数一：回调函数，该回调函数有可能会返回一个函数，如果有返回，那么这个返回的函数，执行时机如下
            return后面函数的执行时机：
                1. 组件卸载的时候回执行（相当于componentWillUnmount）
                2. 每次useEffect被重新调用之前会被执行
        参数二：依赖项（一个数组，可选）
                1. 如果你传递了一个空数组，那么useEffect的第一个参数，即回调函数，只会执行一次（相当于componentDidMount）
                如果该回调函数，有返回的函数的话，那么该返回的函数会在组件卸载的时候执行（componentWillUnmount）
                2. 如果你在依赖项里面有数组元素存在，那么useEffect仅仅会在这些元素变化之后执行
                3. 如果该参数没有传递，那么任何数据变化了，都会导致useEffect被执行
    */
    useEffect(() => {
        document.title = `你点了${count}次`;
        return () => {
            /* 
            return后面函数的执行时机：
                 1. 组件卸载的时候回执行（相当于componentWillUnmount）
                 2. 每次useEffect被重新调用之前会被执行
            
            */
            console.log(1);
        }
    }, [count])
    function addNum() {
        setCount(count + 1);
    }
    return (
        <div>
            <button onClick={addNum}>点我</button>
        </div>
    )
}




/* 
纯函数：函数的返回值，只取决于函数的参数，并且函数在执行过程当中对函数外部没有任何影响（副作用）
        可以变相的理解为：一个没有副作用的函数就是纯函数

*/
function test(params) {

}
