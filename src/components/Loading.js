import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { ReactComponent as J } from '../assets/J.svg';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
    paddingTop: '20vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hide: {
    display: 'none',
  },
}));

const Loading = (props) => {
  const { hasLoaded } = props;
  const classes = useStyles();
  return (
    <div className={!hasLoaded ? classes.root : classes.hide}>
      <div className="j-container">
        <J fill="#059033" stroke="#059033" className="j j-green" />
        <J fill="#fd3a4a" stroke="#fd3a4a" className="j j-red" />
        <J fill="#02075d" stroke="#02075d" className="j j-blue" />
      </div>

    </div>
  );
};

Loading.propTypes = {
  hasLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  hasLoaded: state.page.hasLoaded,
});
//   const mapDispatchToProps = {setLoading}

export default connect(mapStateToProps, null)(Loading);
