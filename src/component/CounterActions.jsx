import { Button, Slider } from '@mui/material'
import React from 'react'
import CounterHistory from './CounterHistory'

export default function CounterActions() {
    return (
        <div>
            <div className='flex justify-evenly mt-20'>
                <Button variant="contained">Increase</Button>
                <Button variant="contained">Reset</Button>
                <Button variant="contained">Decrease</Button>
            </div>
            <div className='flex justify-evenly mt-10'>
                <Button variant="contained">Undo</Button>
                <Button variant="contained">Redo</Button>
            </div>
            <div className='mt-16'>
                <label htmlFor="stepValue">Step Value: </label>
                <input type='number' name='stepValue' />
            </div>

            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" className='mt-5' />
            <CounterHistory />
        </div>
    )
}
