import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { setIndex } from '../../actions/slideshowActions';
import { setHasLoaded } from '../../actions/pageActions';
import Photo from './Photo';
import './slideshow-positioning.scss';

const PhotoReel = (props) => {
  const {
    index, newIndex, view, photos, loadedImageIndex, setIndex, setHasLoaded, loadingStatus,
  } = props;
  const [imageArray, setImageArray] = useState(photos[view]);
  const [movingImage, setMovingImage] = useState({
    // image:photos[view][newIndex],
    direction: 'left',
  });

  const animationClasses = {
    left: [
      'one-increase',
      'two-increase',
      'three-increase',
      'four-increase',
      'five-increase',
      'six-increase',
    ],
    right: [
      'zero-decrease',
      'one-decrease',
      'two-decrease',
      'three-decrease',
      'four-decrease',
      'five-decrease',
    ],
  };

  const updateSlideshow = () => {
    const direction = newIndex > index ? 'left' : 'right';

    setMovingImage({
      direction: index !== newIndex ? animationClasses[direction][direction === 'left' ? newIndex - 1 : newIndex] : 'zero',
    });
    setTimeout(setIndex(newIndex), 500);
  };
  // if you need to know how big the number to compare is just use photos[view].length
  // TODO:You made this thing in redux where if the loading status of one of the
  // images in the list changes, then change the image loading status. THis UseEffect
  // is here to monitor that loading status and re-check to see if eveything is loaded.
  useEffect(() => {
    if (loadedImageIndex.length === photos[view].length) {
      setHasLoaded(true);
    }
  }, [loadedImageIndex]);

  useEffect(() => {
    if (loadingStatus) setHasLoaded(true);
  }, [loadingStatus]);

  useEffect(() => {
    updateSlideshow();
  }, [newIndex]);

  useEffect(() => {
    updateSlideshow();
    setImageArray(photos[view]);
  }, [view]);

  return (
    <div className="pictures">
      <div className="photo-container">
        <div className={movingImage.direction}>
          {imageArray.map((item) => (
            <Photo key={uuidv4()} url={item} loadedFrom={movingImage.direction} id="animated" />
          ))}
        </div>

      </div>
    </div>

  );
};

PhotoReel.propTypes = {
  index: PropTypes.number.isRequired,
  newIndex: PropTypes.number.isRequired,
  view: PropTypes.string.isRequired,
  photos: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  loadedImageIndex: PropTypes.arrayOf(PropTypes.string).isRequired,
  setIndex: PropTypes.func.isRequired,
  setHasLoaded: PropTypes.func.isRequired,
  loadingStatus: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  index: state.slideshow.slideshowIndex,
  newIndex: state.slideshow.newIndex,
  view: state.slideshow.selectedView,
  photos: state.slideshow.slideshowView,
  loadedImageIndex: state.slideshow.loadedImageIndex,
  loadingStatus: state.slideshow.loadedImageStatus,
});

const mapDispatchToProps = { setIndex, setHasLoaded };
export default connect(mapStateToProps, mapDispatchToProps)(PhotoReel);
