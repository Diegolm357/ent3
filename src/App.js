import React from 'react';
import Button from '@material-ui/core/Button'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './temaConfig'
import Navbar from './components/NavBar';
import App from 'App.css';

function App() {
    return ( <
        ThemeProvider theme = { theme } >
        <
        Navbar / >
        <

        Button variant = "contained"
        color = "primary" >
        vINOS TINTOS <
        /Button> <
        Button variant = "contained"
        color = "primary" >
        VINOS BLANCOS <
        /Button> <
        Button variant = "contained"
        color = "primary" >
        VINOS ESPUMANTES <
        /Button> < /
        ThemeProvider >

    );
}
export default App;