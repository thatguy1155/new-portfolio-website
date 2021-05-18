import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SlideshowTitle = (props) => {
  const { title, view } = props;
  return (
    <div>
      <h1 className="title">
        {title[view]}
      </h1>
    </div>
  );
};

SlideshowTitle.propTypes = {
  view: PropTypes.string.isRequired,
  title: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  title: state.slideshow.slideshowTitle,
  view: state.slideshow.selectedView,
});
//   const mapDispatchToProps = {setLoading}

export default connect(mapStateToProps, null)(SlideshowTitle);
