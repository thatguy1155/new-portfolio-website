import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ExternalLink = (props) => {
  const { link, view } = props;
  return (
    <>
      {view !== 'PassByMobile' && (
      <a className="external-link" href={link[view]}>
        {view === 'PassByWeb' ? <span>Website</span> : <span> Github Repository</span>}
      </a>
      )}
    </>
  );
};

ExternalLink.propTypes = {
  link: PropTypes.objectOf(PropTypes.string).isRequired,
  view: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  link: state.slideshow.slideshowLink,
  view: state.slideshow.selectedView,
});
//  const mapDispatchToProps = {setHasLoaded}

export default connect(mapStateToProps, null)(ExternalLink);
