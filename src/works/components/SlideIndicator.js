import React from 'react'
import { connect } from 'react-redux'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
      [theme.breakpoints.down('sm')]: {
        height:'10px',
        width:'10px'
      },
      [theme.breakpoints.up('md')]: {
        height:'15px',
        width:'15px'
      },
      [theme.breakpoints.up('lg')]: {
        height:'20px',
        width:'20px'
      },
    },
  }));

const SlideIndicator = (props) => {
    const {view,photos,selectedIndex} = props
    const classes = useStyles();
    return (
        <div className="slide-indicator">
            {photos[view].map((item,index) => selectedIndex === index ? <RadioButtonCheckedIcon className={classes.root} key={item} style={{color:'#121212'}} /> : <RadioButtonUncheckedIcon className={classes.root} key={item} style={{color:'#121212'}}/>)}
        </div>
    )
}

const mapStateToProps = state => ({
    selectedIndex: state.slideshow.slideshowIndex,
    view: state.slideshow.selectedView,
    photos:state.slideshow.slideshowView
  })
//   const mapDispatchToProps = {setLoading}

  export default connect(mapStateToProps, null)(SlideIndicator)