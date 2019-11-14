import React from "react";
import {NavLink} from "react-router-dom";
import {makeStyles} from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';

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
        width: '300px',
        alignContent: 'space-around',
        flexWrap: 'nowrap',
        alignItems: 'center'
    },
    item: {
        width: '100%',
        textAlign: 'center'
    }
}));

const SingInLinks = () => {
    const classes = useStyles();

    return <ul className={classes.list}>
        <li className={classes.item} ><NavLink className={classes.links} to={'/create_project'}>New project</NavLink></li>
        <li className={classes.item} ><NavLink className={classes.links} to={'/'}>Log out</NavLink></li>
        <li className={classes.item} >
            <NavLink to={'/'}>
                <PersonIcon className={classes.icon} />
            </NavLink>
        </li>
    </ul>
};

export default SingInLinks;