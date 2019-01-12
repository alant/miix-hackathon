import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';

class Success extends Component {
  render() {
    const certInfo = {
      personalInfo: {
        name: 'My Name',
        photo: 'photo',
        id: '321021198111220901',
        age: 21
      },
      certNo: 'No. 120123',
      issuer: '1',
      owner: 'Li Fu Ming',
      hash: 'M3DDSODHA3304XDMEO',
      state: 1
    }
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="h6" color="inherit" align="left" noWrap className={classes.toolbarTitle}>
          准考证信息： 
        </Typography>
        <Card>
          <span>准考证号：</span><span>{certInfo.certNo}</span>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    certInfo: state.dappReducer.certInfo
  }
}

export default connect(mapStateToProps)(withStyles()(Success));
