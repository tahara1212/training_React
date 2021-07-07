import { useCallback, useState } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Router } from "./router/Router";


export const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Link to="/">Home</Link>
                <br />
                <Link to="/page1">Page1</Link>
                <br />
                <Link to="/page2">Page2</Link>
            </div>
            <Router />
            
        </BrowserRouter>
    )
}