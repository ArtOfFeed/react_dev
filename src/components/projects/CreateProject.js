import React from "react";
import TextField from "@material-ui/core/TextField";
import UseForm from "../hooks/UseFormHook";
import Button from "@material-ui/core/Button";
import {makeStyles, Typography} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const UseStyles = makeStyles(theme => ({
    button: {
        marginTop: theme.spacing(2)
    },
    root: {
        padding: theme.spacing(3, 2),
        background: 'rgba(255, 255, 255, 0.8)'
    },
}));

const createProject = () => {
    const classes = UseStyles();
    const sign = () => {
        alert(`Article Created!
         Email: ${inputs.title}
         Password: ${inputs.content}`);
    };

    const {inputs, handleInputChange, handleSubmit} = UseForm(sign);

    return <>
        <Paper className={classes.root}>
            <Typography component="h2" variant="h5">
                Create Project
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    margin="dense"
                    id="title"
                    label="Title"
                    name="title"
                    type="text"
                    value={inputs.title || ''}
                    fullWidth
                    onChange={handleInputChange}
                />
                <TextField
                    id="content"
                    label="Content"
                    name="content"
                    multiline
                    rowsMax="4"
                    value={inputs.content || ''}
                    onChange={handleInputChange}
                    fullWidth
                    margin="dense"
                />
                <Button variant="contained" className={classes.button} type="submit" color="primary" >Create</Button>
            </form>
        </Paper>
    </>
};

export default createProject;