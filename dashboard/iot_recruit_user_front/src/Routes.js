import React from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import DashboardProfile from "./Dashboard-profile";
import DashboardLeaderboard from "./Dashboard-leaderboard";
import Questions from "./Questions";


const Routes = () =>{
    return(
    <BrowserRouter>
    <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/Dashboard" exact component={Dashboard}/>
        <Route path="/Dashboard-Profile" exact component={DashboardProfile}/>
        <Route path="/Dashboard-Leaderboard" exact component={DashboardLeaderboard}/>
        <Route path="/Questions" exact component={Questions}/>
    </Switch>
    </BrowserRouter>
    )
}

export default Routes;