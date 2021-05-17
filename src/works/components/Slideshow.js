import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import MainDisplay from './MainDisplay';
import SlideshowText from './SlideshowText';
import SlideshowTitle from './SlideshowTitle';
import SlideshowNavContent from './SlideshowNavContent';
import ExternalLink from './ExternalLink';
import Loading from '../../components/Loading';

export default function Slideshow(props) {
//     useEffect(() => {
  //         console.log(hasLoaded)
  //     },[hasLoaded])

  return (
    <div>
      <div className="slideshow-container">
        <SlideshowTitle />
        <div className="view-container">
          <MainDisplay />
          <SlideshowNavContent />
        </div>
        <ExternalLink />
        <SlideshowText />

      </div>

    </div>
  );
}
