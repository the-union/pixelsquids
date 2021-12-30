import React from "react";
import ReactDOM from "react-dom";
import { MetaMaskProvider } from "metamask-react";
import App from "./App.js";
ReactDOM.render(
    <React.StrictMode>
        <MetaMaskProvider>
            <App />
        </MetaMaskProvider>
    </React.StrictMode>,
    document.getElementById("root")
    );