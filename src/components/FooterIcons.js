import React from 'react'
import FooterIcon from './FooterIcon'

export default function FooterIcons(props) {
    const {contactMethods} = props
    console.log(contactMethods)
    return (
        <div className="footer-icon-container">
            {contactMethods.map(value => 
            <FooterIcon mode={value} key={value} />
            )}
            
        </div>
    )
}
