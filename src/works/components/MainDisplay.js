import React from 'react'
import { connect } from 'react-redux'
import Photos from './Photos'
import {setNewIndex} from '../../actions/slideshowActions'
import {ReactComponent as Prev} from '../../assets/prev.svg'
import {ReactComponent as Next} from '../../assets/next.svg'

const MainDisplay = (props) => {
    const {index,view,photos,setNewIndex} = props
    return (
        <div className="main-display">
            <Prev className={index > 0 ? "pc-nav-button" :"hidden-nav"} style={{color:'#121212' }} onClick={() => setNewIndex(index - 1)}/>
            <Photos />
            <Next className={index < photos[view].length - 1 ? "pc-nav-button" : "hidden-nav"} style={{color:'#121212'}} onClick={() => setNewIndex(index + 1)}/>
            <div className="mobile-nav-buttons">
                <Prev className={index > 0 ? "mobile-nav-button" :"hidden-nav"} style={{color:'#121212' }} onClick={() => setNewIndex(index - 1)}/>
                <Next className={index < photos[view].length - 1 ? "mobile-nav-button" : "hidden-nav"} style={{color:'#121212'}} onClick={() => setNewIndex(index + 1)}/>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    index: state.slideshow.slideshowIndex,
    view: state.slideshow.selectedView,
    photos:state.slideshow.slideshowView
  })
  const mapDispatchToProps = {setNewIndex}

  export default connect(mapStateToProps, mapDispatchToProps)(MainDisplay)
