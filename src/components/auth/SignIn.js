import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {makeStyles, Typography} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Slide from "@material-ui/core/Slide";
import UseForm from "../hooks/UseFormHook";
import {connect} from 'react-redux';
import {SignInAC} from "../../store/actions/authActions";

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

const SignIn = (props) => {

    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const sign = () => {
        let SignObj = {};
        SignObj.email = inputs.email;
        SignObj.password = inputs.password;

        props.SignInFn(SignObj);

    };

    const {inputs, handleInputChange, handleSubmit} = UseForm(sign);

    const inputParams = [
        {label: 'Email', type: 'email', value: inputs.email, name: 'email'},
        {label: 'Password', type: 'password', value: inputs.password, name: 'password'}
    ];

    return (
        <>
            <Link className={classes.link} onClick={handleClickOpen}>Login</Link>
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
                        {props.authError ? <Typography component="p" color="secondary">{props.authError}</Typography> : null}
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

const mapStateToProps = (state) => {
  return {
      authError: state.auth.authError
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
        SignInFn: (creads) => dispatch(SignInAC(creads))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);