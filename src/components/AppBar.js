import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  Menu, MenuItem } from '@material-ui/core'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { selectContact } from '../actions/footerActions'
import MenuIcon from '@material-ui/icons/Menu';
import {selectPage} from '../actions/pageActions'
import { connect } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color:'#010b13',
    fontFamily:'Neucha'
  },
  link:{
    textDecoration:'none',
    flexGrow: 1,
    textAlign:'left',
  },
  menuLink:{
    textDecoration:'none',
    color:'#010b13',
    fontFamily:'Neucha'
  },
  navItem: {
    marginRight:'20px',
  },
  selected:{
    color:'#65FAC2'
  }
}));

const ButtonAppBar = (props) => {
  const {selected,selectPage,selectContact} = props
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  //on mobile the links will be a menu. this line opens the popup when the menu icon is clicked
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  //close the mobile menu
  const handleClose = () => {
    selectContact(null)
    setAnchorEl(null);
  };

  const handleSelection= (selection) => {
    selectPage(selection)
    selectContact(null)
  }

  useEffect(() => {
    console.log(selected)
  },[selected])


  return (
    <div className={classes.root}>
      <AppBar position="static" className="appBar">
        <Toolbar>
          <Link onClick={() => handleSelection('home')} className={classes.link} to={"/"}>
          <h1 className={classes.title}>
            James Glass
          </h1>
          </Link>
          <div className="nav-container-mobile">
                <Button aria-controls="simple-menu" aria-haspopup="true" className="navs float-r"onClick={handleClick}>
                  <MenuIcon className="menu-icon mobile-menu"/>
                </Button>
                
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem className="nav-btn" onClick={handleClose}><Link to={"/bio"}className={classes.menuLink}>bio</Link></MenuItem>
                  <MenuItem className="nav-btn" onClick={handleClose}><Link to={"/works"}className={classes.menuLink}>works</Link></MenuItem>
                </Menu>
              </div>
              <div className="nav-container-desktop">
                <ul className="navs float-r">
                  <li className="nav-item"><Button className={selected === 'bio' ? 'selected-nav-btn': 'nav-btn'} onClick={() => handleSelection('bio')}><Link to={"/bio"}><b>bio</b></Link></Button></li>
                  <li className="nav-item"><Button className={selected === 'works' ? 'selected-nav-btn': 'nav-btn'} onClick={() => handleSelection('works')}><Link to={"/works"}><b>works</b></Link></Button></li>
                </ul>
              </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

  
  const mapStateToProps = state => ({
    selected: state.page.selectedPage,
    
  })
  const mapDispatchToProps = {selectPage,selectContact}

  export default connect(mapStateToProps, mapDispatchToProps)(ButtonAppBar)