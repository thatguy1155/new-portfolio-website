import React from 'react'
import { connect } from 'react-redux'
import {setNewIndex} from '../../actions/slideshowActions'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import IconButton from '@material-ui/core/IconButton';

const SlideshowNavButtons = (props) => {
    const {index,view,photos,setNewIndex} = props
    return (
        <div className="slideshow-nav-buttons">
            <IconButton className={index > 0 ? "visible" :"hidden"} style={{color:'#121212'}} onClick={() => setNewIndex(index - 1)}>
                <ArrowBackIcon />
            </IconButton>
            <IconButton className={index < photos[view].length - 1 ? "visible" : "hidden"} style={{color:'#121212'}} onClick={() => setNewIndex(index + 1)}>
                <ArrowForwardIcon />
            </IconButton>
            
        </div>
    )
}

const mapStateToProps = state => ({
    index: state.slideshow.slideshowIndex,
    view: state.slideshow.selectedView,
    photos:state.slideshow.slideshowView
  })
  const mapDispatchToProps = {setNewIndex}

  export default connect(mapStateToProps, mapDispatchToProps)(SlideshowNavButtons)