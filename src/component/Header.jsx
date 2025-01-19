import { FormControlLabel, Switch } from '@mui/material'
import React from 'react'

export default function Header() {
    return (
        <div className='flex justify-between'>
            <h1>Welcome to Counter APP!</h1>
            <FormControlLabel control={<Switch />} label="Dark Mode" />
        </div>
    )
}
