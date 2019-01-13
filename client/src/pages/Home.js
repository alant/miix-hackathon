import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

import bg from '../images/pic_welcome_bg.png';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
  },
  ua: {
    padding: theme.spacing.unit * 4,
  },
  button: {
    margin: theme.spacing.unit,
    marginTop: theme.spacing.unit * 8,
    fontSize: theme.spacing.unit * 2,
    height: theme.spacing.unit * 5,
    width: theme.spacing.unit * 40,
    color: 'white',
    backgroundColor: '#5B8CFF',
    '&:hover': {
      backgroundColor: '#5B8CFF'
    }
  }
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    const SchoolBtn = withRouter(({ history }) => (
      <Button fullWidth className={classes.button} variant="contained" color="primary" onClick={() => { history.push('/school') }} >
        开始报名
      </Button>
    ));
    return (
      <div>
        <img alt="首页" src={bg} style={{width:"300px",height:"240px",marginBottom:"30px",marginTop:"50px"}}/>
        <div>
        <label style={{marginTop:"30px",fontSize:"20px"}}>欢迎使用艺考在线报名系统</label>
        </div>
        <SchoolBtn />
        <Typography component="p" className={classes.ua}>
          使用协议
        </Typography>
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
