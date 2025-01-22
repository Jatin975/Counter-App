import { Button, Slider } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterSliceActions } from '../store/store';

export default function CounterHistory() {
    const counterHistoryValues = useSelector(state => state.counterValues);
    const currentIdx = useSelector(state => state.currentIdx);
    const dispatch = useDispatch();
    const marks = counterHistoryValues.map((val, idx) => {
        return {
            value: idx,
            label: val
        }
    })

    const handleHistorySliderChange = (event, newValue) => {
        dispatch(counterSliceActions.setCurrentIdx(newValue));
    }

    const handleClearHistory = () => {
        dispatch(counterSliceActions.clearHistory());
    }
    
    return (
        <div className='mt-4'>
            <p>History value</p>
            <Slider
                value={currentIdx}
                onChange={handleHistorySliderChange}
                marks={marks}
                aria-label="Default"
                valueLabelDisplay="auto"
                step={null}
                max={counterHistoryValues.length - 1}
                min={0}
                disabled={counterHistoryValues.length === 1}
            />
            <Button className='mt-10' variant="outlined" onClick={handleClearHistory}>Clear History</Button>
        </div>
    )
}
