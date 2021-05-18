import React from 'react';
import './App.css';
import './main.scss';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import {
  createMuiTheme, ThemeProvider, withStyles,
} from '@material-ui/core/styles';
import {
  Route, Switch, BrowserRouter as Router,
} from 'react-router-dom';
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import Bio from './bio/bio';
import Home from './home/Home';
import Works from './works/Works';
import store from './Store';

const styles = (theme) => ({
  [theme.breakpoints.down('sm')]: {
  },
  [theme.breakpoints.up('md')]: {
  },
  [theme.breakpoints.up('lg')]: {
    appBarSpacer: theme.mixins.toolbar,
  },

});

const style = withStyles(styles);
// for media queries
const theme = createMuiTheme();

function App({ classes }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <AppBar />
            <div className={classes.appBarSpacer} />
            <div className="main-content">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/bio" component={Bio} />
                <Route exact path="/works" component={Works} />
              </Switch>
            </div>
            <Footer />
          </Router>
        </div>
      </ThemeProvider>
    </Provider>
  );
}
App.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default style(App);
