import React from "react";
import {makeStyles, Paper, Typography} from "@material-ui/core";
import ProjectSummary from "./ProjectSummary";
import {Link} from "react-router-dom";

const UseStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        background: 'rgba(255, 255, 255, 0.8)'
    },
}));

const ProjectList = ({projects}) => {
    const classes = UseStyles();

    return (
        <Paper className={classes.root}>
            <Typography component="h2" variant="h5">
                Projects List
            </Typography>
            {projects && projects.map((project, i) => (
                <Link key={project.id} to={`project/${project.id}`} ><ProjectSummary project={project} /></Link>
            ))}
        </Paper>
    )
};

export default ProjectList;