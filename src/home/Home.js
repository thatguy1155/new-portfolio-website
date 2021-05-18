import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Panel from './components/Panel';
import Loading from '../components/Loading';
import { setHasLoaded } from '../actions/pageActions';
import './Home.scss';

const Home = (props) => {
  const { hasLoaded, setHasLoaded } = props;

  useEffect(() => {
    setHasLoaded(false);
    // eslint-disable-next-line
    },[])

  // //Todo this not updating except after saving
  // useEffect(() => {
  //     console.log(homeLoaded.panel1)
  //     if(homeLoaded.panel1 && homeLoaded.panel2){
  //         setLoading(true)
  //     }
  // },[homeLoaded.panel1,homeLoaded.panel2,setLoading])

  return (
    <>
      <div className={hasLoaded ? 'main-container' : 'gone'}>
        <Panel mode="saola" />
        <Panel mode="fox" />
      </div>
      <Loading className={hasLoaded ? 'gone' : 'visible'} />

    </>

  );
};
const mapStateToProps = (state) => ({
  hasLoaded: state.page.hasLoaded,
  homeLoaded: state.page.homepageLoading,
});
const mapDispatchToProps = { setHasLoaded };

Home.propTypes = {
  hasLoaded: PropTypes.bool.isRequired,
  setHasLoaded: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
