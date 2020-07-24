import React from 'react';
import './App.css';
import ToolbarContainer from "./Containers/ToolbarContainer";
import {Route, Switch} from "react-router-dom";
import HomePageContainer from "./Containers/HomePageContainer";
import PhotographyPageContainer from "./Containers/PhotographyPageContainer";
import ProgrammingPageContainer from "./Containers/ProgrammingPageContainer";
import DesignPageContainer from "./Containers/DesignPageContainer";
import AboutMePageContainer from "./Containers/AboutMePageContainer";

const App = () => {
    return (
        <div className="App">
            <div className='main-container'>
                <ToolbarContainer/>
                <div className='main-content'>
                    <Switch>
                        <Route path="/indragunawansite/" exact component={HomePageContainer}/>
                        <Route path="/indragunawansite/photography" component={PhotographyPageContainer}/>
                        <Route path="/indragunawansite/design" component={DesignPageContainer}/>
                        <Route path="/indragunawansite/programming" component={ProgrammingPageContainer}/>
                        <Route path="/indragunawansite/about-me" component={AboutMePageContainer}/>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default App;
