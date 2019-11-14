import React from "react";
import {Paper, Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));

const ProjectDetails = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.root} >
            <Typography component={'h3'} variant={'h5'}>
                Some details
            </Typography>
        </Paper>
    )
};

export default ProjectDetails;