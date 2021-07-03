import './App.css';
import React, {useState} from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import BrandingBar from './components/BrandingBar';
import Login from './components/Pages/Login';
import Quizes from './components/Pages/Quizes';
import AddQuizes from './components/Pages/AddQuizes';
import Questions from './components/Pages/Questions';
import NotFound from './components/NotFound';
import './assets/css/index.scss';
import theme from './theme';



import DarkModeToggle from "react-dark-mode-toggle";



const useStyles = makeStyles(() => ({
    footer: {
        justifyContent: 'center'
    },
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    }
}));

function App() {
    const [isDarkMode, setIsDarkMode] = useState(() => false);
    const classes = useStyles();
    const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};

    console.log('currentUser', currentUser);
    return (
        <ThemeProvider theme={theme}>
          { /*   <DarkModeToggle
       onChange={setIsDarkMode}
       checked={isDarkMode}
      size={80}
    />*/}
            <Router>
                <Box width="100%" height="100vh" display="flex" flexDirection="column">
                    <BrandingBar
                        showProfileMenu={
                            isUserLoggedIn || Object.keys(currentUser).length ? true : false
                        }
                        currentUser={currentUser}
                    />
                    <Box
                        width="100%"
                        height="100%"
                        flexGrow="1"
                        overflow="auto"
                        className={classes.mainContainer}>
                        <Container maxWidth="xl" />
                        <div>
                            <Switch>
                                <Route exact path="/">
                                    <Login setUserLoggedIn={setIsUserLoggedIn} />
                                </Route>
                                <Route exact path="/login">
                                    <Login setUserLoggedIn={setIsUserLoggedIn} />
                                </Route>
                                <Route path="/quizes">
                                    <Quizes />
                                    </Route>
                                    <Route path="/AddQuizes">
                                    <AddQuizes />
                                    </Route>
                               
                                <Route path="/details/:id">
                                    <Questions />
                                </Route>
                                <Route path="*">
                                    <NotFound />
                                </Route>
                            </Switch>
                        </div>
                    </Box>
                    <Grid container className={classes.footer}>
                        <div>Quizone Test your skills via a quiz</div>
                    </Grid>
                </Box>
            </Router>
        </ThemeProvider>
    );
}

export default App;
