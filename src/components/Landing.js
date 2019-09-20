import React from 'react';
import { Grid, TextField, Card, CardContent, CardActions, Button } from "@material-ui/core";

import { connect } from 'react-redux';
import loginUser from "../actions/loginUser";


function SignIn(props) {
    const [state, setState] = React.useState({});
    props.loginUser({
        email: "example@gmail.com",
        password: "qwerty"
    })
    function handleChange({ target: { name, value } }) {
        if (!["email", "password"].includes(name)) return;
        setState({
            [name]: value,
            ...state
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        const { email, password } = state;
        props.loginUser({ email, password });
    }

    return (
        <Grid
            container
        >
            <Grid
                item
                lg={6}
            >

            </Grid>
            <Grid
                item
                lg={6}
            >
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    style={{ height: '100vh' }}
                >
                    <Card>
                        <form onSubmit={handleSubmit}>
                            <CardContent>
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
            </Grid>
        </Grid>
    );
}

const mapDispatchToProps = { loginUser }

export default connect(null, mapDispatchToProps)(SignIn);