import React, { useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { connect } from 'react-redux';
import { setHasLoaded } from '../../actions/pageActions';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  small: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

const ImageAvatars = (props) => {
  const classes = useStyles();
  const { isMobile, setHasLoaded } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  useEffect(() => {
    setHasLoaded(false);
    // eslint-disable-next-line
  },[])

  return (
    <div className={classes.root}>
      <Avatar alt="James Glass Profile Pic" src="https://live.staticflickr.com/65535/49907430523_8d1f83272c_b.jpg" onLoad={setHasLoaded(true)} className={matches ? classes.large : classes.small} />
    </div>
  );
};

const mapDispatchToProps = { setHasLoaded };
export default connect(null, mapDispatchToProps)(ImageAvatars);
