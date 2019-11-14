import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import {Container} from "@material-ui/core";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import createProject from "./components/projects/CreateProject";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Container maxWidth={"md"}>
                <h1>Home</h1>
                <Switch>
                    <Route path={'/'} exact component={Dashboard} />
                    <Route path={'/project/:id'} component={ProjectDetails} />
                    <Route pathc={'/create_project'} exact component={createProject}/>
                </Switch>
            </Container>
        </BrowserRouter>
    );
}

export default App;
