import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setImageLoaded } from '../../actions/slideshowActions';

const Photo = (props) => {
  const { setImageLoaded, url } = props;

  const imageLoadedFilter = () => {
    let loadedSwitch = 0;
    while (loadedSwitch < 1) {
      setImageLoaded(url);
      loadedSwitch += 1;
    }
  };

  return (
    <div className="centered-photo">
      <img src={url} alt="displayed" onLoad={() => imageLoadedFilter()} className="photo" />
    </div>
  );
};

Photo.propTypes = {
  setImageLoaded: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};

const mapDispatchToProps = { setImageLoaded };
export default connect(null, mapDispatchToProps)(Photo);
