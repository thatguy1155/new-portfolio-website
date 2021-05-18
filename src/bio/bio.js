import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from './components/Avatar';
import TextContent from './components/TextContent';
import Loading from '../components/Loading';
import './bio.scss';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  gridContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const Bio = (props) => {
  const classes = useStyles();
  const { hasLoaded } = props;

  return (
    <>
      <div className={hasLoaded ? 'home-content' : 'gone'}>
        <div className={classes.root}>
          <Grid className={classes.gridContainer} container>
            <Grid item xs={10} sm={6} md={3}>
              <Avatar />
            </Grid>
            <Grid item xs={11} sm={10} md={6}>
              <TextContent className="home-text" />
            </Grid>
          </Grid>
        </div>
      </div>
      <Loading className={hasLoaded ? 'gone' : 'visible'} />
    </>
  );
};

const mapStateToProps = (state) => ({
  hasLoaded: state.page.hasLoaded,
});
// const mapDispatchToProps = {setHasLoaded}

Bio.propTypes = {
  hasLoaded: PropTypes.bool.isRequired,
};
export default connect(mapStateToProps, null)(Bio);
