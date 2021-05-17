import React, { useEffect } from 'react';
import './works.scss';
import { connect } from 'react-redux';
import Slideshow from './components/Slideshow';
import SlideShowMenu from './components/SlideShowMenu';
import Loading from '../components/Loading';
import { setHasLoaded } from '../actions/pageActions';
import { imageLoaded } from '../actions/slideshowActions';

const Works = (props) => {
  const { hasLoaded, setHasLoaded, imageLoaded } = props;
  useEffect(() => {
    setHasLoaded(false);
    imageLoaded('void');
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
const mapStateToProps = (state) => ({
  hasLoaded: state.page.hasLoaded,
});
const mapDispatchToProps = { setHasLoaded, imageLoaded };

export default connect(mapStateToProps, mapDispatchToProps)(Works);
