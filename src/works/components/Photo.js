import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import {setLoading} from '../../actions/pageActions'
import {ReactComponent as Notebook} from '../../assets/notebook.svg'
import Photo from './Photo'

const Photos = (props) => {
    const {setLoading,url,loadedFrom} = props

    
    useEffect(() => {
        console.log(loadedFrom)
    },[url])

    const directionParser = () => {
        if (loadedFrom === 'left'){
            return "centered-photo left"
        } else if(loadedFrom === 'right'){
            return "centered-photo right"
        } else {
            return "centered-photo center"
        }
    }

    return (
        
        <div className={directionParser()}>
            <img src={url} alt="displayed" onLoad={() => setLoading(true)} className="photo"/>
        </div>
    )
}
  const mapDispatchToProps = {setLoading}
  export default connect(null, mapDispatchToProps)(Photos)
