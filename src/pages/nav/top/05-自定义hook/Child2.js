import React from 'react'
import useList from './CustomHook';

export default function Child2() {
    const { list } = useList([{ id: 0, name: '苹果', price: 10, num: 1 },])
    return (
        <div>

        </div>
    )
}
