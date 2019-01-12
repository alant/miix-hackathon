import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
// import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '100%',
    padding: theme.spacing.unit * 2,
    overflowX: 'auto',
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class Success extends Component {
  render() {
    const { classes, certInfo } = this.props;
    const SuccessBtn = withRouter(({ history }) => (
        <Button variant="contained" color="primary" className={ classes.button } onClick={() => { history.push('/cert') }}>
          查看准考证
        </Button>
      ));
    return (
      certInfo.state === 1
      ? <div>
        <Typography variant="h6" color="inherit" align="center" noWrap className={classes.toolbarTitle}>
          恭喜报名成功！
        </Typography>
        <Typography variant="h6" color="inherit" align="center" noWrap className={classes.toolbarTitle}>
          准考证编号： { certInfo.certNo }
        </Typography>
        <SuccessBtn />
      </div>
      : <div>
        <Typography variant="h6" color="inherit" align="center" noWrap className={classes.toolbarTitle}>
          报名信息确认中...
        </Typography>
        <Typography variant="h6" color="inherit" align="center" noWrap className={classes.toolbarTitle}>
          请等待...
        </Typography>
        <CircularProgress />
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

export default connect(mapStateToProps)(withStyles(styles)(Success));
