import React from 'react';
import PropTypes from 'prop-types';

export default function PanelText(props) {
  const { mode } = props;
  const text = {
    saola: 'My Life',
    fox: 'My Work',
  };
  return (
    <div>
      <h1>{text[mode]}</h1>
    </div>
  );
}
PanelText.propTypes = {
  mode: PropTypes.string.isRequired,
};
