import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FooterIcons from './FooterIcons';
import FooterText from './FooterText';

const Footer = (props) => {
  const { selectedContact } = props;
  const contactInfo = {
    email: 'james.glass1155@gmail.com',
    phone: '(+82) 010 3145 1150',
    linkedin: 'https://www.linkedin.com/in/james-glass-a87190bb/',
    kakao: 'thatguy1155',
    none: 'none',
  };

  const textParser = () => {
    if (!selectedContact) {
      return '^ get in touch with me here ^';
    }
    return contactInfo[selectedContact];
  };

  const colorParser = () => (selectedContact !== 'none' ? '#101b13' : '#6a7f7a');

  return (
    <div className="footer">
      <FooterIcons contactMethods={Object.keys(contactInfo)} />
      <FooterText color={colorParser()} selectedText={textParser()} />

    </div>
  );
};

Footer.propTypes = {
  selectedContact: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  selectedContact: state.footer.selectedContact,
});
//   const mapDispatchToProps = {setLoading}

export default connect(mapStateToProps, null)(Footer);
