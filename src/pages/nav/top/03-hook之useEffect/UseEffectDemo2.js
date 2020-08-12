import React,{useEffect} from 'react'

export default function UseEffectDemo2() {
    useEffect(()=>{
        document.addEventListener('click',test);
        return ()=>{
            document.removeEventListener('click',test);
        }
    });
    function test(){
        console.log('document被点了')
    }
    return (
        <div>
            
        </div>
    )
}
