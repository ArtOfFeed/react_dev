import React from "react";
import TextField from "@material-ui/core/TextField";
import UseForm from "../hooks/UseFormHook";
import Button from "@material-ui/core/Button";
import {makeStyles, Typography} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import {createProjectAC} from "../../store/actions/projectActions";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const UseStyles = makeStyles(theme => ({
    button: {
        marginTop: theme.spacing(2)
    },
    root: {
        padding: theme.spacing(3, 2),
        background: 'rgba(255, 255, 255, 0.8)'
    },
}));

const createProject = (props) => {
    console.log(props);
    const classes = UseStyles();
    const sign = () => {
        let project = {};
        project.email = inputs.title;
        project.content = inputs.content;
        console.log(project);

        props.createProjectFn(project);
    };

    const {inputs, handleInputChange, handleSubmit} = UseForm(sign);

    if (!props.auth.uid) return <Redirect to="/"/>;

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

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createProjectFn: (project) => {dispatch(createProjectAC(project))}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(createProject);