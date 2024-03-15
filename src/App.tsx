import { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { ROUTES as RoutesList } from "./constants.ts";
import LoadingTemplate from "./components/templates/LoadingTemplate";

export default function App()
{
    return (
        <Router>
            <Suspense fallback={<LoadingTemplate />}>
                <Routes>
                    {RoutesList.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={<route.component />}
                        />
                    ))}
                </Routes>
            </Suspense>
        </Router>
    )
}