import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import bg from '../images/pic_result_waiting.png';
import Utils from '../utils';
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
  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.shape({
        push: PropTypes.func.isRequired,
        replace: PropTypes.func.isRequired
      }).isRequired,
      staticContext: PropTypes.object
    }).isRequired
  };
  componentDidMount() {
    console.log(this.props.submitInfo);
    this.submitInfo();
  }
  submitInfo: Function = async () => {
    try {
      const { info, school } = this.props;
      const regInfo = `${info.userName};${info.userId};${info.userType};${info.major}`;
      await Utils.submitRegister(school, regInfo);
      this.context.router.history.push('/success');
      console.log('submit_finished');
    } catch (e) {
      this.context.router.history.push('/fail');
      console.log('error:', e);
    }

  }
  render() {
    const { classes } = this.props;
    return (
      <div>
         <img src={bg} alt="确认信息中" style={{width:"300px",height:"240px",marginBottom:"30px",marginTop:"50px"}}/>
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
  return {
    submitInfo: state.dappReducer.submitInfo,
    school: state.dappReducer.schoolSelected
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Processing));
