import React from "react";
import {NavLink} from "react-router-dom";
import {makeStyles} from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';
import {connect} from 'react-redux';
import {SignOutAC} from "../../store/actions/authActions";

const useStyles = makeStyles(theme => ({
    icon: {
        color: '#fff'
    },
    links: {
        color: '#fff',
        textDecoration: 'none',
        cursor: 'pointer'
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

const SingInLinks = (props) => {
    const classes = useStyles();

    return <ul className={classes.list}>
        <li className={classes.item} ><NavLink className={classes.links} to={'/create_project'}>New project</NavLink></li>
        <li className={classes.item} ><a className={classes.links} onClick={props.SignOutFn}>Log out</a></li>
        <li className={classes.item} >
            <NavLink to={'/'}>
                <PersonIcon className={classes.icon} />
            </NavLink>
        </li>
    </ul>
};

const mapDispatchToProps = (dispatch) => {
    return {
        SignOutFn: () => dispatch(SignOutAC())
    };
};

export default connect(null, mapDispatchToProps)(SingInLinks);