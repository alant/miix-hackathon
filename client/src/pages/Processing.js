import React, { Component } from 'react';
import { connect } from 'react-redux';
// import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    padding: theme.spacing.unit * 2,
    overflowX: 'auto',
  },
  title: {
    marginTop: theme.spacing.unit * 3,
    fontSize: theme.spacing.unit * 3,
    fontWeight: 'bold',
    color: '#242833'
  },
  intro: {
    marginTop: theme.spacing.unit * 2,
    fontSize: theme.spacing.unit * 2,
    color: '#889399'
  }
});

class Processing extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography align="center" noWrap className={classes.title}>
          报名信息确认中...
        </Typography>
        <Typography align="center" noWrap className={classes.intro}>
          请等待 1 ～ 2 分钟
        </Typography>
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  console.log(state);
  return {
    certInfo: state.dappReducer.certInfo
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Processing));
