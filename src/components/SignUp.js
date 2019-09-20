import React from 'react';

import { connect } from 'react-redux';
import joinUser from "../actions/joinUser";

import { Grid, TextField, Card, CardContent, CardActions, Button } from "@material-ui/core";
// import history from '../history';


function SignUp(props) {
    const [state, setState] = React.useState({});
    // props.joinUser({
    //     username: "Guest",
    //     email: "example@gmail.com",
    //     password: "qwerty"
    // })
    function handleChange({ target: { name, value } }) {
        if (!["username", "email", "password"].includes(name)) return;
        setState({
            ...state,
            [name]: value
        })
    }
    function handleSubmit(event) {
        event.preventDefault();
        const { username, email, password } = state;
        props.joinUser({ username, email, password });
    }
    return (
        <Grid
            container
            justify="center"
            alignItems="center"
            style={{ height: '100vh' }}
        >
            <Card>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <CardContent>
                        <TextField
                            type="username"
                            name="username"
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            label="username"
                        />
                        <TextField
                            type="email"
                            name="email"
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            label="email"
                        />
                        <TextField
                            type="password"
                            name="password"
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            label="password"
                            autoComplete="foo"
                        />
                    </CardContent>
                    <CardActions>
                        <Button
                            type="submit"
                        >submit</Button>
                    </CardActions>
                </form>
            </Card>
        </Grid>
    );
}

const mapDispatchToProps = {
    joinUser
}
export default connect(null, mapDispatchToProps)(SignUp);