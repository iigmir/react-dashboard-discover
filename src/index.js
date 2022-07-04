// Packages
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// User datas
import store from "./store/index.js";
import Layout from "./Layout/index.js";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
    {/* Init router */}
    <BrowserRouter>
        {/* Init redux */}
        <Provider store={store}>
            <Layout />
        </Provider>
    </BrowserRouter>
</React.StrictMode>);

reportWebVitals();
