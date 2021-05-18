import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PhotoReel from './PhotoReel';
import { setNewIndex } from '../../actions/slideshowActions';
import { ReactComponent as Prev } from '../../assets/prev.svg';
import { ReactComponent as Next } from '../../assets/next.svg';

const MainDisplay = (props) => {
  const {
    index, view, photos, setNewIndex,
  } = props;
  return (
    <div className="main-display">
      <Prev className={index > 0 ? 'pc-nav-button' : 'hidden-nav'} style={{ color: '#121212' }} onClick={() => setNewIndex(index - 1)} />
      <PhotoReel />
      <Next className={index < photos[view].length - 1 ? 'pc-nav-button' : 'hidden-nav'} style={{ color: '#121212' }} onClick={() => setNewIndex(index + 1)} />
      <div className="mobile-nav-buttons">
        <Prev className={index > 0 ? 'mobile-nav-button' : 'hidden-nav'} style={{ color: '#121212' }} onClick={() => setNewIndex(index - 1)} />
        <Next className={index < photos[view].length - 1 ? 'mobile-nav-button' : 'hidden-nav'} style={{ color: '#121212' }} onClick={() => setNewIndex(index + 1)} />
      </div>
    </div>
  );
};

MainDisplay.propTypes = {
  index: PropTypes.number.isRequired,
  view: PropTypes.string.isRequired,
  photos: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  setNewIndex: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  index: state.slideshow.slideshowIndex,
  view: state.slideshow.selectedView,
  photos: state.slideshow.slideshowView,
});
const mapDispatchToProps = { setNewIndex };

export default connect(mapStateToProps, mapDispatchToProps)(MainDisplay);
