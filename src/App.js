import React from 'react';
import './App.css';
import ToolbarContainer from "./Containers/ToolbarContainer";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
    return (
        <div className="App">
            <ToolbarContainer/>
                <Switch>
                    <Route path="/indragunawansite"/>
                    <Route path="/photography"/>
                    <Route path="/design"/>
                    <Route path="/programming"/>
                    <Route path="/aboutme"/>
                    <Redirect from="/" to="/indragunawansite"/>
                </Switch>
        </div>
);
};

export default App;
