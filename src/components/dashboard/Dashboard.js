import React from "react";
import Grid from "@material-ui/core/Grid";
import ProjectList from "../projects/ProjectList";
import Notifications from "./Notifications";
import {firestoreConnect} from "react-redux-firebase";
import {connect} from "react-redux";
import {compose} from "redux";

const Dashboard = ({projects}) => {
    return (
        <Grid container spacing={3}>
            <Grid item md={8}><ProjectList projects={projects}/></Grid>
            <Grid item md={4}><Notifications/></Grid>
        </Grid>
    )
};

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects
    }
};

export default compose(
    firestoreConnect(['projects']),
    connect(mapStateToProps, null)
)(Dashboard)