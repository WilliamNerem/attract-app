import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Valgomat from "./pages/valgomat";
import Info from "./pages/info";
import { Provider } from "react-redux";
import { store } from "./redux";
import NotFoundPage from "./components/atoms/invalidNotFoundPage";

export default function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="valgomat" element={<Valgomat />} />
                    <Route path="info" element={<Info />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </HashRouter>
        </Provider>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));

