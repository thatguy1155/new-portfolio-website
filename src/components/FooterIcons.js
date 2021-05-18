import React from 'react';
import PropTypes from 'prop-types';
import FooterIcon from './FooterIcon';

export default function FooterIcons(props) {
  const { contactMethods } = props;
  return (
    <div className="footer-icon-container">
      {contactMethods.map((value) => value !== 'none' && <FooterIcon mode={value} key={value} />)}

    </div>
  );
}

FooterIcons.propTypes = {
  contactMethods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
