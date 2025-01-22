import { Button, Slider, TextField } from '@mui/material'
import React, { useState } from 'react'
import CounterHistory from './CounterHistory'
import { useDispatch, useSelector } from 'react-redux'
import { counterSliceActions } from '../store/store';

export default function CounterActions() {
    const dispatch = useDispatch();
    const currentIdx = useSelector(state => state.currentIdx);
    const counterValues = useSelector(state => state.counterValues);
    const [stepValue, setStepValue] = useState(1);

    const handleCounterValueChange = (type) => {
        if (type === "increment") {
            dispatch(counterSliceActions.increment(stepValue));
        } else if (type === "decrement") {
            dispatch(counterSliceActions.decrement(stepValue));
        }
        else if (type === "reset") {
            setStepValue(1);
            dispatch(counterSliceActions.reset());
        }
        else if (type === "undo") {
            dispatch(counterSliceActions.undo());
        } else if (type === "redo") {
            dispatch(counterSliceActions.redo());
        }
    }

    const handleStepValueChange = (e) => {
        let stepValueInput = parseInt(e.target.value);
        setStepValue(stepValueInput);
    }

    return (
        <div>
            <div className='flex justify-evenly mt-20'>
                <Button variant="contained" onClick={() => handleCounterValueChange("increment")} disabled={isNaN(stepValue)}>Increment</Button>
                <Button variant="contained" onClick={() => handleCounterValueChange("reset")} disabled={counterValues.length === 1 && counterValues[0] === 10} >Reset</Button>
                <Button variant="contained" onClick={() => handleCounterValueChange("decrement")} disabled={isNaN(stepValue)}>Decrement</Button>
            </div>
            <div className='flex justify-evenly mt-10'>
                <Button variant="contained" disabled={currentIdx === 0} onClick={() => handleCounterValueChange("undo")} > Undo</Button>
                <Button variant="contained" disabled={currentIdx === (counterValues.length - 1)} onClick={() => handleCounterValueChange("redo")} >Redo</Button>
            </div>
            <div className='mt-16 text-left'>
                <TextField
                    error={isNaN(stepValue)}
                    type='number'
                    name='stepValue'
                    label="Step Value"
                    required
                    defaultValue={1}
                    value={stepValue}
                    onChange={handleStepValueChange}
                    helperText={isNaN(stepValue) && "Step Value is required"}
                />
            </div>
            <Slider defaultValue={1} value={stepValue} onChange={handleStepValueChange} aria-label="Default" valueLabelDisplay="auto" className='mt-5' min={1} max={100} />
            <CounterHistory />
        </div>
    )
}
