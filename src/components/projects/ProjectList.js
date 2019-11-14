import React from "react";
import {makeStyles, Paper, Typography} from "@material-ui/core";

const UseStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        background: 'rgba(255, 255, 255, 0.8)'
    },
}));

const ProjectList = () => {

    const classes = UseStyles();

    return (
        <Paper className={classes.root}>
            <Typography component="h2" variant="h5">
                Projects List
            </Typography>
        </Paper>
    )
};

export default ProjectList;