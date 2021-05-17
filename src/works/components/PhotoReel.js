import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setIndex, setLoadedImages, changeLoadedStatus } from '../../actions/slideshowActions';
import { setHasLoaded } from '../../actions/pageActions';
import { ReactComponent as Notebook } from '../../assets/notebook.svg';
import Photo from './Photo';
import './slideshow-positioning.scss';
import { v4 as uuidv4 } from 'uuid';

const Photos = (props) => {
  const {
    index, newIndex, view, photos, loadedImageIndex, setIndex, setHasLoaded, loadingStatus,
  } = props;
  const [imageArray, setImageArray] = useState(photos[view]);
  const [photoReelPosition, setPhotoReelPosition] = useState('zero');
  const [staticImage, setStaticImage] = useState(photos[view][newIndex]);
  const [fullyLoaded, setFullyLoaded] = useState(true);
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

  // if you need to know how big the number to compare is just use photos[view].length

  // TODO:You made this thing in redux where if the loading status of one of the
  // images in the list changes, then change the image loading status. THis UseEffect
  // is here to monitor that loading status and re-check to see if eveything is loaded.
  // Currently it is not being triggered. Find out why.
  useEffect(() => {
    // console.log(loadedImageIndex)
    // console.log(loadedImageIndex.length)
    // console.log(photos[view].length)
    if (loadedImageIndex.length === photos[view].length) {
      setHasLoaded(true);
    }
  }, [loadedImageIndex]);
  useEffect(() => {
    loadingStatus && setHasLoaded(true);
  }, [loadingStatus]);

  // console.log(imageArray)

  useEffect(() => {
    updateSlideshow();
  }, [newIndex]);

  useEffect(() => {
    updateSlideshow();
    setImageArray(photos[view]);
  }, [view]);

  const updateSlideshow = () => {
    // console.log(photos[view][index])
    const direction = newIndex > index ? 'left' : 'right';

    setMovingImage({
      // image:photos[view][newIndex],
      direction: index !== newIndex ? animationClasses[direction][direction === 'left' ? newIndex - 1 : newIndex] : 'zero',
    });

    setTimeout(setIndex(newIndex), 500);
    // setTimeout(setMovingImage(), 1050)
    // setTimeout(setStaticImage(photos[view][index]), 300);
  };

  return (
    <div className="pictures">
      <div className="photo-container">
        <div className={movingImage.direction}>
          {imageArray.map((item, index) => (
            <Photo key={uuidv4()} url={item} loadedFrom={movingImage.direction} id="animated" />
          ))}
        </div>

      </div>
    </div>

  );
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
export default connect(mapStateToProps, mapDispatchToProps)(Photos);
