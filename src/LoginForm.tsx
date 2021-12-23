import React, { useState } from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Button
} from '@mui/material';
import login from "./login";


interface FormProps {
    open: boolean,
    handleClose: () => void
}
export default function LoginForm(props: FormProps) {
    const [data, setData] = useState({
        username: "",
        password: ""
    })

    const inputHandler = (e: any) => {
        const { id, value } = e.target;
        setData((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    }
    const handleSubmit = () => {
        login(data.username, data.password);
        setData({
            username: "",
            password: ""
        });
        props.handleClose();
    }

    return (
        <Dialog open={props.open} onClose={props.handleClose}>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="username"
                    name="username"
                    label="Username"
                    type="email"
                    fullWidth
                    variant="standard"
                    value={data.username}
                    onChange={inputHandler}
                />
                <TextField
                    margin="dense"
                    id="password"
                    name='password'
                    label="Password"
                    type="password"
                    fullWidth
                    variant="standard"
                    value={data.password}
                    onChange={inputHandler}
                />
            </DialogContent>
            <DialogActions>
                <Button id="cancel" onClick={props.handleClose} >Cancel</Button>
                <Button id="submit" onClick={handleSubmit} >Submit</Button>
            </DialogActions>
        </Dialog>
    );
}