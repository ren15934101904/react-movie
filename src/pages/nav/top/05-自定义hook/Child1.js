import React from 'react'
import useList from './CustomHook';

export default function Child1() {
    const { list, changeNum, removeHandler } = useList([]);
    return (
        <div>

        </div>
    )
}
