import React from 'react';
import './App.css';
import ToolbarContainer from "./Containers/ToolbarContainer";
import { Switch, Route } from "react-router-dom";

const App = () => {
    return (
        <div className="App">
            <ToolbarContainer/>
                <Switch>
                    <Route path="/" exact/>
                    <Route path="/photography"/>
                    <Route path="/design"/>
                    <Route path="/programming"/>
                    <Route path="/aboutme"/>
                </Switch>
        </div>
);
};

export default App;
