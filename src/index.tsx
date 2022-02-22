import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NoPage from "./pages/noPage";

import Valgomat from "./pages/valgomat";
import Home from "./pages/home";

export default function App() {

    return (
        <div className="test">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                </Route>
                <Route path="valgomat" element={<Valgomat />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));

