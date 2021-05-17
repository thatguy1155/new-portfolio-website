import React from 'react';
import { Link, useHistory } from 'react-router-dom';
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
      <button className="panel">
        <PanelText mode={mode} />
        <Line mode={mode} />
        <img src={mode === 'fox' ? Fox : Saola} alt={mode === 'fox' ? 'Fox' : 'Saola'} className={mode === 'fox' ? 'panel-image fox' : 'panel-image saola'} onLoad={() => setLoading()} onClick={reroute} />
      </button>
    </div>
  );
};

const mapDispatchToProps = { homepageLoading, selectPage };
export default connect(null, mapDispatchToProps)(Panel);
