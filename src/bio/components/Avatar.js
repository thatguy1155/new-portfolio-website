import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent:'center'
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

export default function ImageAvatars(props) {
  const classes = useStyles();
  const {isMobile} = props
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));


  return (
    <div className={classes.root}>
      <Avatar alt="James Glass Profile Pic" src="https://live.staticflickr.com/65535/49907430523_8d1f83272c_b.jpg" className={matches ? classes.large : classes.small} />
    </div>
  );
}