import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Typography from '@material-ui/core/Typography';
import CertCard from '../components/CertCard';
import { withStyles } from '@material-ui/core/styles';
import Utils from '../utils';

const styles = theme => ({
  root: {
    width: '100%',
    padding: theme.spacing.unit * 2,
    overflowX: 'auto',
  }
});

class Cert extends Component {
  componentDidMount() {
    this.fetchToken();
  }
  fetchToken: Function = async () => {
    await Utils.sleep(1000);
    const certToken = await Utils.getCertToken();
    console.log(certToken);
    this.props.gotCertValue(certToken);
  }
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

const mapDispatchToProps = dispatch => {
  return {
    gotCertValue: (value) => dispatch({ type: "GOT_CERT_VALUE", certInfo: value })
  };
}

const mapStateToProps = function(state) {
  return {
    certInfo: state.dappReducer.certInfo
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Cert));
