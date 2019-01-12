import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
// import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

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
    color: '#FC4E8E'
  },
  intro: {
    marginTop: theme.spacing.unit * 2,
    fontSize: theme.spacing.unit * 2,
    color: '#889399'
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

class Fail extends Component {
  render() {
    const { classes } = this.props;
    const RetryBtn = withRouter(({ history }) => (
        <Button variant="contained" color="primary" className={ classes.button } onClick={() => { history.push('/cert') }}>
          再次提交
        </Button>
      ));
    return (
      <div>
        <Typography className={classes.title} align="center" noWrap>
          报名失败！
        </Typography>
        <Typography className={classes.intro} align="center" noWrap>
          请点击下方按钮重新提交
        </Typography>
        <RetryBtn />
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

export default connect(mapStateToProps)(withStyles(styles)(Fail));
