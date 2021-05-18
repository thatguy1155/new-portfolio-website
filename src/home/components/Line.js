import React from 'react';
import PropTypes from 'prop-types';
import SaolaLine from '../../assets/saola_comic_line.svg';
import FoxLine from '../../assets/fox_comic_line.svg';

export default function Line(props) {
  const { mode } = props;
  return (
    <div className="comic-line-container">
      <img src={mode === 'fox' ? FoxLine : SaolaLine} alt="Speech line" />
    </div>
  );
}

Line.propTypes = {
  mode: PropTypes.string.isRequired,
};
