import React from 'react'
import { Routes } from 'react-router-dom'
import { AllRouter, RecursiveRoutes } from './router'

function Router() {
    return (
        <Routes>
            {AllRouter?.map((v, k) =>
                RecursiveRoutes({
                    path: v?.path,
                    key: k,
                    component: v?.component,
                    children: v?.children
                })
            )}
        </Routes>
    )
}

export default Router
