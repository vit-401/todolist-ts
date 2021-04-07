import React from 'react'
import './App.css'
import {AppBar, Button, Container, IconButton, LinearProgress, Toolbar, Typography} from '@material-ui/core'
import {Menu} from '@material-ui/icons'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import {connect} from "react-redux";
import {AppRootStateType} from "./store";
import ErrorSnackbar from "../components/ErrorSnackbar/ErrorSnackbar";

function App(props: any) {

    return (
        <div className="App">
            <AppBar position="static">
                <ErrorSnackbar/>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
                {
                    props.status === 'loading' && <LinearProgress/>
                }
            </AppBar>
            <Container fixed>
                <TodolistsList/>
            </Container>
        </div>
    )
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        status: state.app.status
    }
}
export default connect(mapStateToProps, {})(App)
