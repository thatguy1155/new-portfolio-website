import React from 'react';
import PropTypes from 'prop-types';

export default function FooterText(props) {
  const { selectedText, color } = props;
  return (
    <div>
      <h3 style={{ color }}>{selectedText !== 'none' && selectedText}</h3>
    </div>
  );
}

FooterText.propTypes = {
  selectedText: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
