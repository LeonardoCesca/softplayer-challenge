import React from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Detail from "./pages/Detail";

const Routs = () => (
    <Router>
        <Switch>
            <Route path="/" exact element={<Home />} />
            <Route path="/detalhe/:id" exact element={<Detail />} />
        </Switch>
    </Router>
)

export default Routs;