import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import {
  setProjectView, setNewIndex, setIndex, imageLoaded,
} from '../../actions/slideshowActions';
import { setHasLoaded } from '../../actions/pageActions';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 300,
  },
  selected: {
    color: 'white',
  },
  unselected: {
    color: 'green',
  },
});

const SlideShowMenu = (props) => {
  const {
    view, setProjectView, setIndex, setNewIndex, setHasLoaded, imageLoaded,
  } = props;
  const classes = useStyles();

  useEffect(() => {
    // console.log(view)
  }, [view]);

  const clickHandler = (clickedProject) => {
    // console.log(clickedProject);
    setProjectView(clickedProject);
    setNewIndex(0);
    setIndex(0);
    setHasLoaded(false);
    imageLoaded('void');
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
      {Object.keys(slideshowPages).map((key, index) => (
        <button className="side-menu-button" key={key + slideshowPages[key]} onClick={() => clickHandler(key)}>
          <h3 className={view === key ? 'selected-button' : 'unselected-button'}>
            {slideshowPages[key]}
          </h3>
        </button>
      ))}

    </div>
  );
};

const mapStateToProps = (state) => ({
  view: state.slideshow.selectedView,
});
const mapDispatchToProps = {
  setProjectView, setNewIndex, setIndex, setHasLoaded, imageLoaded,
};

export default connect(mapStateToProps, mapDispatchToProps)(SlideShowMenu);
