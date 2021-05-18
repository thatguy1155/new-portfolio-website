import React from 'react';
import MainDisplay from './MainDisplay';
import SlideshowText from './SlideshowText';
import SlideshowTitle from './SlideshowTitle';
import SlideshowNavContent from './SlideshowNavContent';
import ExternalLink from './ExternalLink';

export default function Slideshow() {
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
