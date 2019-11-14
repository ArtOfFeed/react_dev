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

const SignIn = () => {

    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const sign = () => {
        alert(`User Created!
         Email: ${inputs.email}
         Password: ${inputs.password}`);
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

export default SignIn;