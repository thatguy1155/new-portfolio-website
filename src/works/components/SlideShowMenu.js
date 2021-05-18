import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  setProjectView, setNewIndex, setIndex, setImageLoaded,
} from '../../actions/slideshowActions';
import { setHasLoaded } from '../../actions/pageActions';

const SlideShowMenu = (props) => {
  const {
    view, setProjectView, setIndex, setNewIndex, setHasLoaded, setImageLoaded,
  } = props;

  const clickHandler = (clickedProject) => {
    setProjectView(clickedProject);
    setNewIndex(0);
    setIndex(0);
    setHasLoaded(false);
    setImageLoaded('void');
  };

  const slideshowPages = {
    PassByWeb: 'PassBy Web',
    PassByMobile: 'PassBy Mobile',
    Petpeeps: 'Pet Peeps',
    NoraeCheck: 'NoraeCheck',
    SPPS: 'SPPS',
  };

  return (
    <div className="side-menu-button-container">
      {Object.keys(slideshowPages).map((key) => (
        <button type="button" className="side-menu-button" key={key + slideshowPages[key]} onClick={() => clickHandler(key)}>
          <h3 className={view === key ? 'selected-button' : 'unselected-button'}>
            {slideshowPages[key]}
          </h3>
        </button>
      ))}

    </div>
  );
};

SlideShowMenu.propTypes = {
  view: PropTypes.string.isRequired,
  setProjectView: PropTypes.func.isRequired,
  setIndex: PropTypes.func.isRequired,
  setNewIndex: PropTypes.func.isRequired,
  setHasLoaded: PropTypes.func.isRequired,
  setImageLoaded: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  view: state.slideshow.selectedView,
});
const mapDispatchToProps = {
  setProjectView, setNewIndex, setIndex, setHasLoaded, setImageLoaded,
};

export default connect(mapStateToProps, mapDispatchToProps)(SlideShowMenu);
