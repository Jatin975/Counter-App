import { Button, Slider } from '@mui/material'
import React from 'react'

export default function CounterHistory() {
    return (
        <div className='mt-4'>
            <p>History value</p>
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
            <Button className='mt-10' variant="outlined">Clear History</Button>
        </div>
    )
}
