import React, { useState } from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Button,
    TableBody,
} from '@mui/material';

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
        fetch('http://localhost:3000', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(data)
        }).then(() => {
            if (data.username === "isaac" && data.password === "123456") {
                console.log("Logged in");
            }
            else {
                alert("Invalid login");
            }
        });
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
                    label="Password"
                    type="password"
                    fullWidth
                    variant="standard"
                    value={data.password}
                    onChange={inputHandler}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Submit</Button>
            </DialogActions>
        </Dialog>
    );
}