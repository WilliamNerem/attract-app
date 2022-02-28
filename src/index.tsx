import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoPage from "./pages/noPage";
import Valgomat from "./pages/valgomat";
import Home from "./pages/home";
import { Provider } from "react-redux";
import { store } from "./redux";

export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}>
                    </Route>
                    <Route path="valgomat" element={<Valgomat/>} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));

