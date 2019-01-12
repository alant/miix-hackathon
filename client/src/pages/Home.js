import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
  },
  ua: {
    padding: theme.spacing.unit * 4,
  }
});

const SchoolBtn = withRouter(({ history }) => (
  <Button variant="contained" color="primary" onClick={() => { history.push('/school') }}>
    开始报名
  </Button>
))

class Home extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h5" component="h3">
            欢迎使用艺考在线报名系统（基于区块链技术方案）
          </Typography>
        </Paper>
        <Typography component="p" className={classes.ua}>
          使用协议
        </Typography>
        <SchoolBtn />
        <div>
          This is Home {this.props.storedData}
        </div>
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    storedData: state.dappReducer.storedValue
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(Home));
