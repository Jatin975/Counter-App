import React from 'react'
import CounterActions from './CounterActions'
import { useSelector } from 'react-redux'

export default function Main() {
    const counterState = useSelector(state =>state);
    const counterValue = counterState.counterValues[counterState.currentIdx];

    return (
        <div className='mt-20' >
            <div className='counter-screen rounded-md p-10'>
                <h2 className="text-xl mb-2">Counter Value</h2>
                <div>
                    <h1 className="text-5xl">{counterValue}</h1>
                </div>
            </div>
            <CounterActions />
        </div>
    )
}
