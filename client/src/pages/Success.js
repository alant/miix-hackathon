import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icon/DeleteIcon';
import Typography from '@material-ui/icon/Typography';
import { withStyles } from '@material-ui/core/styles';

class Success extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="h6" color="inherit" align="left" noWrap className={classes.toolbarTitle}>
          报名成功！
        </Typography>
        <Button variant="contained" color="secondary" className={classes.button}>
          查看准考证
          <DeleteIcon className={classes.rightIcon} />
        </Button>
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    certInfo: state.certInfo
  }
}

export default connect(mapStateToProps)(withStyles(Success));
