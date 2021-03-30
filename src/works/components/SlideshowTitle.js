import React from 'react'
import { connect } from 'react-redux'
import { Typography } from '@material-ui/core';

const SlideshowTitle = (props) => {
    const {title,view} = props
    return (
        <div>
            <h1 className="title">
                {title[view]}
            </h1>
        </div>
    )
}

const mapStateToProps = state => ({
    title: state.slideshow.slideshowTitle,
    view: state.slideshow.selectedView,
  })
//   const mapDispatchToProps = {setLoading}

  export default connect(mapStateToProps, null)(SlideshowTitle)
