import React from 'react'
import { Route } from 'react-router-dom'
import { ProtectedRoutes } from './protected';
import { PublicRoutes } from './public';

export const AllRouter = [...PublicRoutes, ...ProtectedRoutes];

export const RecursiveRoutes = (props) => {
    const { path, index, key, component, children } = props;
    return (
        <Route path={path} index={index} ky={key} element={component} >
            {children &&
                children?.map((v, k) => {
                    return RecursiveRoutes({
                        path: v?.path,
                        index: v?.index,
                        key: k,
                        component: v?.component,
                        children: v?.children
                    })
                })
            }
        </Route>
    )
}
