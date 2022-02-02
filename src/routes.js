import React from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';

import Home from "./pages/Home";

const Routs = () => (
    <Router>
        <Switch>
            <Route path="/" exact element={<Home />} />
        </Switch>
    </Router>
)

export default Routs;