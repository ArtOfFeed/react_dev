import React from "react";
import {LinearProgress, Paper, Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
    progress: {
        backgroundColor: '#b70eae',
        position: 'fixed',
        width: '100%',
        left: '0',
        top: '0'
    }
}));

const ProjectDetails = ({project, auth}) => {
    const classes = useStyles();

    if (!auth.uid) return <Redirect to="/"/>;

    if (project) {
        return (
            <Paper className={classes.root} >
                <Typography component={'h3'} variant={'h5'}>{`${project.authorFirstName} ${project.authorSecondName}`}</Typography>
            </Paper>
        )
    } else {
        return (
            <LinearProgress className={classes.progress}/>
        )
    }
};

const mapStateToProps = (state, ownProps) => {
    const projects = state.firestore.ordered.projects;
    const id = ownProps.match.params.id;

    const project = projects && projects.find(obj => obj.id === id);

    return {
        project: project,
        auth: state.firebase.auth
    }
};

export default compose(
    firestoreConnect(['projects']),
    connect(mapStateToProps, null)
)(ProjectDetails)