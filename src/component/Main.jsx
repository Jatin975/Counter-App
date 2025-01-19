import React from 'react'
import CounterActions from './CounterActions'

export default function Main() {
    return (
        <div className='mt-20' >
            <h2 className="text-xl mb-2">Counter Value</h2>
            <div>
                <h1 className="text-5xl">15</h1>
            </div>
            <CounterActions />
        </div>
    )
}
