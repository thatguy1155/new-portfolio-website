import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import { ReactComponent as Gmail } from '../assets/gmail.svg';
import { ReactComponent as KakaoTalk } from '../assets/kakaotalk.svg';
import { ReactComponent as LinkedIn } from '../assets/LinkedIn.svg';
import { ReactComponent as Phone } from '../assets/phone.svg';
import { selectContact } from '../actions/footerActions';

const FooterIcon = (props) => {
  const { mode, selectContact, selectedContact } = props;

  const colorParser = () => (selectedContact === mode ? '#101b13' : '#6a7f7a');

  const modeSelector = (input) => {
    if (input === 'email') {
      return <Gmail fill={colorParser()} stroke={colorParser()} />;
    } if (input === 'kakao') {
      return <KakaoTalk fill={colorParser()} stroke={colorParser()} />;
    } if (input === 'linkedin') {
      return <LinkedIn fill={colorParser()} stroke={colorParser()} />;
    }
    return <Phone fill={colorParser()} stroke={colorParser()} />;
  };
  return (
    <div>
      <IconButton onClick={() => selectContact(mode)} className="footer-icon">
        {modeSelector(mode)}
      </IconButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedContact: state.footer.selectedContact,
});

const mapDispatchToProps = { selectContact };

export default connect(mapStateToProps, mapDispatchToProps)(FooterIcon);
