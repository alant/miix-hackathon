import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
// import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import bg from '../images/pic_result_success.png';
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
    color: '#2FDA9A'
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

class Success extends Component {
  render() {
    const { classes, certInfo } = this.props;
    const SuccessBtn = withRouter(({ history }) => (
        <Button variant="contained" className={ classes.button } onClick={() => { history.push('/cert') }}>
          查看准考证
        </Button>
      ));
    return (
      <div>
         <img src={bg} alt="报名成功！" style={{width:"300px",height:"240px",marginBottom:"30px",marginTop:"50px"}}/>
        <Typography align="center" noWrap className={classes.title}>
          恭喜您报名成功！
        </Typography>
        <Typography align="center" noWrap className={classes.intro}>
          准考证哈希编码： { certInfo.certNo }
        </Typography>
        <SuccessBtn />
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
