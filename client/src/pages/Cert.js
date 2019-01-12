import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Typography from '@material-ui/core/Typography';
import CertCard from '../components/CertCard';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    padding: theme.spacing.unit * 2,
    overflowX: 'auto',
  }
});

class Cert extends Component {
  render() {
    const { classes, certInfo } = this.props;
    return (
      <div className={classes.root}>
        <CertCard certInfo={certInfo} />
      </div>
    )
  }
}


Cert.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = function(state) {
  return {
    certInfo: state.dappReducer.certInfo
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Cert));
