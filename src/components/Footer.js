import React from 'react'
import FooterIcons from './FooterIcons'
import FooterText from'./FooterText'
import { connect } from 'react-redux'
import {ReactComponent as Line} from '../assets/line.svg'

const Footer = (props) => {
    const {selectedContact} = props
    const contactInfo = {
        email:'james.glass1155@gmail.com',
        phone:'(+82) 010 3145 1150',
        linkedin:'https://www.linkedin.com/in/james-glass-a87190bb/',
        kakao:'thatguy1155'
    }

    const textParser= () => {
        if (!selectedContact) {
            return "^ get in touch with me here ^"
        } else {
            return contactInfo[selectedContact]
        }
    }

    const colorParser = () => {
        return selectedContact  ? '#101b13' : '#6a7f7a'
    }


    return (
        <div className="footer">
            <FooterIcons contactMethods={Object.keys(contactInfo)} />
            <FooterText color={colorParser()}selectedText={textParser()}/>
            
        </div>
    )
}
const mapStateToProps = state => ({
    selectedContact: state.footer.selectedContact
  })
//   const mapDispatchToProps = {setLoading}

  export default connect(mapStateToProps, null)(Footer)
