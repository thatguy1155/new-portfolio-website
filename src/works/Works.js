import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './works.scss';
import { connect } from 'react-redux';
import Slideshow from './components/Slideshow';
import SlideShowMenu from './components/SlideShowMenu';
import Loading from '../components/Loading';
import { setHasLoaded } from '../actions/pageActions';
import { setImageLoaded } from '../actions/slideshowActions';

const Works = (props) => {
  const { hasLoaded, setHasLoaded, setImageLoaded } = props;
  useEffect(() => {
    setHasLoaded(false);
    setImageLoaded('void');
    // eslint-disable-next-line
    },[])
  return (
    <>
      <div className={hasLoaded ? 'main-works-page' : 'gone'}>
        <SlideShowMenu />
        <Slideshow />
      </div>
      <Loading className={hasLoaded ? 'gone' : 'visible'} />
    </>
  );
};

Works.propTypes = {
  hasLoaded: PropTypes.bool.isRequired,
  setHasLoaded: PropTypes.func.isRequired,
  setImageLoaded: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  hasLoaded: state.page.hasLoaded,
});
const mapDispatchToProps = { setHasLoaded, setImageLoaded };

export default connect(mapStateToProps, mapDispatchToProps)(Works);
