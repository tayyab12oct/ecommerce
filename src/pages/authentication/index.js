import React from 'react'
import { Outlet } from 'react-router-dom'

function Auth() {
    return (
        <div className='h-full'>
            <Outlet />
        </div>
    )
}

export default Auth
