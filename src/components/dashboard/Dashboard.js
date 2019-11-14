import React from "react";
import Grid from "@material-ui/core/Grid";
import ProjectList from "../projects/ProjectList";
import Notifications from "./Notifications";

const Dashboard = () => {
    return (
        <Grid container spacing={3}>
            <Grid item md={8}><ProjectList/></Grid>
            <Grid item md={4}><Notifications/></Grid>
        </Grid>
    )
}

export default Dashboard;