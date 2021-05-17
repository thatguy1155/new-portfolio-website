
import './App.css';
import './main.scss';
import AppBar from './components/AppBar'
import Footer from './components/Footer'
import Bio from './bio/bio'
import Home from './home/Home'
import Works from './works/Works'
import { Provider } from 'react-redux'
import store from './Store'
import { createMuiTheme, ThemeProvider, useTheme, withStyles } from '@material-ui/core/styles';
import { Route, Link, Switch,BrowserRouter as Router } from 'react-router-dom'

const styles = theme => ({
  [theme.breakpoints.down('sm')]: {
  },
  [theme.breakpoints.up('md')]: {
  },
  [theme.breakpoints.up('lg')]: {
    appBarSpacer: theme.mixins.toolbar
  },
  
});

const style = withStyles(styles);
//for media queries
const theme = createMuiTheme();

function App({classes}) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <AppBar />
            <div className={classes.appBarSpacer}></div>
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
export default style(App)

