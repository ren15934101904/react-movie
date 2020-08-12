import React,{useState} from 'react'


export default function UseStateHookDemo() {
    /* 
        useState中的参数表示状态name的初始值
        name 表示当前函数组件中定义的一个内部状态
        setName表示修改name的唯一方式
        注意：name和setName名字随意，但是要语义化
    
    */
    const [name, setName] = useState("张三")

    function changeName() {
        setName('李四');//注意name不能直接修改，只能通过setName
     };
    return (
        <div>
            <label>我叫：{name}</label> <button onClick={changeName}>点我修改名字</button>
        </div>
    )
}
