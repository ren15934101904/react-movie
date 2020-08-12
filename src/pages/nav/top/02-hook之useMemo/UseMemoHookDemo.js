import React, { useState, useMemo } from 'react'


/* 
在vue里面有计算属性computed,可以方便我们根据母体数据，自动衍生出一些新的数据
非常方便，现在react16.8以后，也有类似的功能了，那就hook---useMemo可以实现

*/

export default function UseMemoHookDemo() {
    const [firstName, setFirstName] = useState("张");
    const [lastName, setLastName] = useState("三");
    /* 
    useMemo两个参数
        参数一：回调函数，该回调函数一般会依赖某些母体数据（依赖项），然后返回某个特定的值，
        参数二：是依赖项，你必须指定回调函数中的依赖项，当这些依赖项，变化之后，回调函数会自动执行
        useMemo会返回第一个回调函数执行过后的返回值
    
    */
    const name = useMemo(() => {
        return firstName + lastName;
    }, [firstName, lastName])

    function changeFirstName(){
        setFirstName("赵");
    }
    return (
        <div>
            我叫：{name} <button onClick={changeFirstName}>点我修改firstName</button>
        </div>
    )
}
