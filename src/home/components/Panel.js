import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PanelText from './PanelText';
import Line from './Line';
import Fox from '../../assets/fox2.svg';
import Saola from '../../assets/saola2.svg';
import { homepageLoading, selectPage } from '../../actions/pageActions';

const Panel = (props) => {
  const { mode, homepageLoading, selectPage } = props;
  const history = useHistory();

  const reroute = async () => {
    if (mode === 'fox') {
      selectPage('works');
      history.push('/works');
    } else {
      selectPage('bio');
      history.push('/bio');
    }
  };

  const setLoading = () => {
    if (mode === 'fox') {
      homepageLoading('panel2');
    } else {
      homepageLoading('panel1');
    }
  };

  return (
    <div>
      <button className="panel" type="button" onClick={reroute}>
        <PanelText mode={mode} />
        <Line mode={mode} />
        <img src={mode === 'fox' ? Fox : Saola} alt={mode === 'fox' ? 'Fox' : 'Saola'} className={mode === 'fox' ? 'panel-image fox' : 'panel-image saola'} onLoad={() => setLoading()} />
      </button>
    </div>
  );
};

Panel.propTypes = {
  mode: PropTypes.string.isRequired,
  homepageLoading: PropTypes.func.isRequired,
  selectPage: PropTypes.func.isRequired,
};
const mapDispatchToProps = { homepageLoading, selectPage };
export default connect(null, mapDispatchToProps)(Panel);
