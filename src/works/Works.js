import React,{useEffect} from 'react'
import './works.scss';
import Slideshow from './components/Slideshow'
import SlideShowMenu from './components/SlideShowMenu'
import Loading from '../components/Loading'
import {setLoading} from '../actions/pageActions'
import { connect } from 'react-redux'

const Works = (props) => {
    const {hasLoaded,setLoading} = props
    useEffect(() => {
        setLoading(false)
        //eslint-disable-next-line
    },[])
    return (
        <>
        <div className={hasLoaded ? "main-works-page" : "gone"}>
            <SlideShowMenu />
            <Slideshow />
        </div>
        <Loading className={hasLoaded ? "gone" : "visible"} />
        </>
    )
}
const mapStateToProps = state => ({
    hasLoaded: state.page.hasLoaded
  })
 const mapDispatchToProps = {setLoading}

  export default connect(mapStateToProps, mapDispatchToProps)(Works)