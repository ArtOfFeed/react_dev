import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {makeStyles} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Slide from "@material-ui/core/Slide";
import UseForm from "../hooks/UseFormHook";
import {connect} from 'react-redux';
import {SignUpAC} from "../../store/actions/authActions";

const useStyles = makeStyles(theme => ({
    link: {
        color: '#fff',
        textTransform: 'initial',
        fontSize: '16px',
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'none'
        }
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />;
});

const SignUp = (props) => {

    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const sign = () => {
        let SignUpObj = {};

        SignUpObj.email = inputs.email;
        SignUpObj.password = inputs.password;
        SignUpObj.firstName = inputs.first_name;
        SignUpObj.lastName = inputs.last_name;
        console.log(SignUpObj);
        props.SignUpFn(SignUpObj);
    };

    const {inputs, handleInputChange, handleSubmit} = UseForm(sign);

    const inputParams = [
        {label: 'First Name', type: 'text', value: inputs.first_name, name: 'first_name'},
        {label: 'Last Name', type: 'text', value: inputs.last_name, name: 'last_name'},
        {label: 'Email', type: 'email', value: inputs.email, name: 'email'},
        {label: 'Password', type: 'password', value: inputs.password, name: 'password'}
    ];

    return (
        <>
            <Link className={classes.link} onClick={handleClickOpen}>SignUp</Link>
            <Dialog open={open} TransitionComponent={Transition} onClose={handleClose} aria-labelledby="form-dialog-title">
                <form onSubmit={handleSubmit}>
                    <DialogTitle id="form-dialog-title">Login</DialogTitle>
                    <DialogContent>
                        {inputParams.map((field, i) => (
                            <TextField
                                key={i}
                                margin="dense"
                                id={field.name}
                                label={field.label}
                                name={field.name}
                                type={field.type}
                                value={field.value || ''}
                                fullWidth
                                onChange={handleInputChange}
                            />
                            )
                        )}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">Cancel</Button>
                        <Button type={'submit'} color="primary">Submit</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        SignUpFn: (user) => dispatch(SignUpAC(user))
    }
};

export default connect(null, mapDispatchToProps)(SignUp);