import React from 'react';
import { connect } from 'react-redux';

const ExternalLink = (props) => {
  const { link, view } = props;

  console.log(view);

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
const mapStateToProps = (state) => ({
  link: state.slideshow.slideshowLink,
  view: state.slideshow.selectedView,
});
//  const mapDispatchToProps = {setHasLoaded}

export default connect(mapStateToProps, null)(ExternalLink);
