import React from "react";
import {makeStyles} from "@material-ui/core";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";

const useStyles = makeStyles(theme => ({
    icon: {
        color: '#fff'
    },
    links: {
        color: '#fff',
        textDecoration: 'none'
    },
    list: {
        display: 'flex',
        width: '200px',
        alignContent: 'space-around',
        flexWrap: 'nowrap',
        alignItems: 'center'
    },
    item: {
        width: '100%',
        textAlign: 'center'
    }
}));

const SingOutLinks = () => {
    const classes = useStyles();

    return <ul className={classes.list}>
        <li className={classes.item} ><SignUp/></li>
        <li className={classes.item} ><SignIn/></li>
    </ul>
};

export default SingOutLinks;