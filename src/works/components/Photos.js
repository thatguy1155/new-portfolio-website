import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setIndex } from '../../actions/slideshowActions';
import { ReactComponent as Notebook } from '../../assets/notebook.svg';
import Photo from './Photo';

const Photos = (props) => {
  const {
    index, newIndex, view, photos, setIndex,
  } = props;
  const [staticImage, setStaticImage] = useState(photos[view][newIndex]);
  const [movingImage, setMovingImage] = useState({
    image: photos[view][newIndex],
    direction: 'left',
  });

  // useEffect(() => {
  //     imageQueue.push(photos[view][index])
  //     // eslint-disable-next-line
  // },[])

  const updateSlideshow = () => {
    console.log(photos[view][index]);
    const direction = newIndex > index ? 'left' : 'right';
    setMovingImage({
      image: photos[view][newIndex],
      direction: index !== newIndex ? direction : 'center',
    });
    setTimeout(setIndex(newIndex), 500);
    // setTimeout(setMovingImage(), 1050)
    setTimeout(setStaticImage(photos[view][index]), 300);
  };
  useEffect(() => {
    updateSlideshow();
  }, [newIndex]);
  useEffect(() => {
    updateSlideshow();
  }, [view]);

  // const imageQueue = ['center']

  return (
    <div className="pictures">
      <div className="photo-container">
        <Photo url={staticImage} loadedFrom="center" className="shitter" />
        {movingImage && <Photo key={+new Date()} url={movingImage.image} loadedFrom={movingImage.direction} id="animated" />}
        {/* {imageQueue.map((value,index) =>
                    <Photo url={index === 0 ? photos[view][index] : photos[view][newIndex]} key={value} loadedFrom={value} />
                )} */}
      </div>
    </div>

  );
};
const mapStateToProps = (state) => ({
  index: state.slideshow.slideshowIndex,
  newIndex: state.slideshow.newIndex,
  view: state.slideshow.selectedView,
  photos: state.slideshow.slideshowView,

});

const mapDispatchToProps = { setIndex };
export default connect(mapStateToProps, mapDispatchToProps)(Photos);
