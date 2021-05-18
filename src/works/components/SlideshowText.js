import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '65%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '20%',
    left: '8%',
    display: 'flex',
    flexDirection: 'column',
  },
  close: {
    alignSelf: 'flex-end',
    width: '24px',
    padding: 0,
  },
}));

const SlideshowText = (props) => {
  const classes = useStyles();
  const { text, title, view } = props;
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="text">
        <p>
          {text[view]}
        </p>
      </div>
      <div className="modal">
        <IconButton onClick={handleOpen}>
          <MoreHorizIcon />
        </IconButton>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className={classes.paper}>
            <IconButton className={classes.close} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
            <h2 id="simple-modal-title">{title[view]}</h2>
            <p id="simple-modal-description">
              {text[view]}
            </p>
          </div>
        </Modal>
      </div>

    </div>

  );
};

SlideshowText.propTypes = {
  view: PropTypes.string.isRequired,
  text: PropTypes.objectOf(PropTypes.string).isRequired,
  title: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  text: state.slideshow.slideshowText,
  title: state.slideshow.slideshowTitle,
  view: state.slideshow.selectedView,
});
//   const mapDispatchToProps = {setLoading}

export default connect(mapStateToProps, null)(SlideshowText);
