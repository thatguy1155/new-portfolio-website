import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { imageLoaded } from '../../actions/slideshowActions';

const Photos = (props) => {
  const { imageLoaded, url, loadedFrom } = props;

  // useEffect(() => {
  //     imageLoaded()
  // },[loadedSwitch])

  // const directionParser = () => {
  //     if (loadedFrom === 'left'){
  //         return "centered-photo left"
  //     } else if(loadedFrom === 'right'){
  //         return "centered-photo right"
  //     } else {
  //         return "centered-photo center"
  //     }
  // }
  const imageLoadedFilter = () => {
    let loadedSwitch = 0;
    while (loadedSwitch < 1) {
      imageLoaded(url);
      loadedSwitch += 1;
    }
  };

  return (

    <div className="centered-photo">
      <img src={url} alt="displayed" onLoad={() => imageLoadedFilter()} className="photo" />
    </div>
  );
};
const mapDispatchToProps = { imageLoaded };
export default connect(null, mapDispatchToProps)(Photos);
