import React from 'react'
import PanelText from './PanelText'
import Line from './Line'
import Fox from '../../assets/fox2.svg'
import Saola from '../../assets/saola2.svg'
import {homepageLoading} from '../../actions/pageActions'
import { Link,useHistory } from 'react-router-dom'
import { connect } from 'react-redux'


const Panel = (props) => {
    const {mode,homepageLoading} = props
    const history = useHistory()

    const reroute = async () => {
        if(mode === 'fox'){
            history.push('/works')
        } else {
            history.push('/bio')
        }
    }

    const setLoading = () => {
        console.log('did shit')
        if (mode === 'fox'){
            homepageLoading('panel2')
        } else {
            homepageLoading('panel1')
        }
    }

    return (
        <div >
            <button className="panel">
                <PanelText mode={mode} />
                <Line mode={mode} />
                <img src={mode === 'fox' ? Fox : Saola} alt={mode === 'fox' ? "Fox" : "Saola"} className={mode === 'fox' ? "panel-image fox" : "panel-image saola"} onLoad={() => setLoading()} onClick={reroute}/>
            </button>
        </div>
    )
}

const mapDispatchToProps = {homepageLoading}
  export default connect(null, mapDispatchToProps)(Panel)
