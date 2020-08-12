import React, { useState, useEffect, useMemo } from 'react'
import { HeighterOrderComp } from '../05-自定义hook/CustomHook';

{/* <ShopCart myProps={() => <div>something</div>} /> */}
export default function ShopCart() {
    const [list, setList] = useState([]);
    useEffect(() => {
        console.log('useEffect第一个回调被执行了')
        setTimeout(() => {
            setList([
                { id: 0, name: '苹果', price: 10, num: 1 },
                { id: 1, name: '香蕉', price: 20, num: 3 },
                { id: 2, name: '梨子', price: 9, num: 2 },
            ]);
        }, 1000);
    }, []);

    const total = useMemo(() => {
        let t = 0;
        list.forEach((item) => {
            t += item.price * item.num;
        });
        return t;
    }, [list]);
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

    return (
        <div>
           
            <table>
                <thead>
                    <tr>
                        <th>商品名</th>
                        <th>单价</th>
                        <th>数量</th>
                        <th>小计</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((item, index) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button onClick={() => changeNum(index, -1)}>-</button>
                                        {item.num}
                                        <button onClick={() => changeNum(index, 1)}>+</button>
                                    </td>
                                    <td>{item.price * item.num}</td>
                                    <td><button onClick={() => removeHandler(index)}>删除</button></td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
            总价：{total}
        </div>
    )
}


// export default HeighterOrderComp(ShopCart)
