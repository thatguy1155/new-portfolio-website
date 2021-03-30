import React from 'react'

export default function FooterText(props) {
    const {selectedText,color} = props
    return (
        <div>
            <h3 style={{color:color}}>{selectedText}</h3>
        </div>
    )
}
