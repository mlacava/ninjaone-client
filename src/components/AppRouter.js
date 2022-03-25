import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AddNewScreen } from './screens/AddNewScreen';
import { HomeScreen } from './screens/HomeScreen';
import { UpdateScreen } from './screens/UpdateScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/new" element={<AddNewScreen />} />
                    <Route path="/edit" element={<UpdateScreen />} />
                    <Route element={<HomeScreen />} />
                </Routes>
            </div>
        </Router>
    )
}
