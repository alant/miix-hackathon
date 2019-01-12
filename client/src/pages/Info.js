import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Divider } from '@material-ui/core';

const styles = theme => ({
  grid: {
    marginTop: "40px",
    marginLeft: "20px",
    width: "320px",
    flex: 1,
  },
  input_id: {
    marginTop: "15px"
  },
  input_type: {
    margin: "15px 0px"
  },
  button: {
    margin: "60px 0px",
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  }
});
class Info extends Component {
  state = {
    userName: '',
    userNameHelper: '',
    userId: '',
    userIdHelper: '',
    userType: '',
    schoolName: "清华大学",
    major: '',
    open: false,
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
 
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleChangeMajor = event => {
    console.log(event, '------event');
    this.setState({ [event.target.name]: event.target.value });
  };
  handelPost = () => {
    this.setState({ open: false });
    console.log(this.state, '------InputValue');
    //在此做提交操作，比如发dispatch等
    // if(this.state.userName===""){
    //     this.setState({userNameHelper:"姓名不能为空"});
    // }else if(this.state.userId===""){
    //   this.setState({userIdHelper:"身份证号不能为空"});
    // }else if(this.state.userType===""){

    // }
  };
  handelChangeName(e) {
    this.setState({
      userName: e.target.value,
      userNameHelper: ""
    })
  };
  handelChangeId(e) {
    this.setState({
      userId: e.target.value,
      userIdHelper: ""
    })
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <form className={classes.root} autoComplete="off">
          <Grid
            container
            direction="column"
            justify="center"
            className={classes.grid}
          >
            <TextField
              id="username"
              type="text"
              placeholder="姓名"
              label="姓名"
              onChange={this.handelChangeName.bind(this)}
              helperText={this.state.userNameHelper}
            />
            <TextField
              type="text"
              placeholder="身份证号"
              label="身份证号"
              className={classes.input_id}
              onChange={this.handelChangeId.bind(this)}
              helperText={this.state.userIdHelper}
            />
            <FormControl className={classes.input_type} >
              <InputLabel htmlFor="type-simple">考生类型</InputLabel>
              <Select
                value={this.state.userType}
                onChange={this.handleChange}
                name="userType"
                className={classes.input_id}
                inputProps={{
                  name: 'userType',
                  id: 'type-simple',
                }}
              >
                <MenuItem value={"本科"} >本科</MenuItem>
                <MenuItem value={"高职"}>高职</MenuItem>
                <MenuItem value={"大专"}>大专</MenuItem>
              </Select>
            </FormControl>
            <TextField
              disabled
              type="text"
              defaultValue={this.state.schoolName}
              placeholder="身份证号"
              label="报考学校"
              className={classes.input_id}
            />
            <FormControl className={classes.input_type} >
              <InputLabel htmlFor="major-simple">报考专业</InputLabel>
              <Select
                value={this.state.major}
                onChange={this.handleChangeMajor}
                name="major"
                className={classes.input_id}
                inputProps={{
                  name: 'major',
                  id: 'tmajor-simple',
                }}
              >
                <MenuItem value={"舞蹈"}>舞蹈</MenuItem>
                <MenuItem value={"播音主持"}>播音主持</MenuItem>
                <MenuItem value={"美术绘画"}>美术绘画</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" color="primary" className={classes.button} onClick={this.handleClickOpen}>确定</Button>
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="form-dialog-title"
              fullWidth
            >
              <DialogTitle id="form-dialog-title">请确认</DialogTitle>
              <DialogContent>
                <div style={{ flex:"1"}}>
                  <label style={{ fontSize: "16px", color: "#889399"}}>姓名:</label>
                  <label style={{ fontSize: "16px", color: "#333333", marginLeft:"10px",fontWeight:"blod"}}>{this.state.userName}</label>
                </div>
                <div style={{ marginTop: "15px" }}>
                  <label style={{ fontSize: "16px", color: "#889399", flex: "1" }}>身份证号:</label>
                  <label style={{ fontSize: "16px", color: "#333333", textAlign: "right",marginLeft:"10px",fontWeight:"blod"}}>{this.state.userId}</label>
                </div>
                <div style={{ marginTop: "15px" }}>
                  <label style={{ fontSize: "16px", color: "#889399", flex: "1" }}>考生类型:</label>
                  <label style={{ fontSize: "16px", color: "#333333", textAlign: "right", marginLeft:"10px",fontWeight:"blod"}}>{this.state.userType}</label>
                </div>
                <div style={{ marginTop: "15px" }}>
                  <label style={{ fontSize: "16px", color: "#889399", flex: "1" }}>报考学校:</label>
                  <label style={{ fontSize: "16px", color: "#333333", textAlign: "right", marginLeft:"10px",fontWeight:"blod"}}>{this.state.schoolName}</label>
                </div>
                <div style={{ marginTop: "15px" }}>
                  <label style={{ fontSize: "16px", color: "#889399", flex: "1" }}>报考专业:</label>
                  <label style={{ fontSize: "16px", color: "#333333", textAlign: "right", marginLeft:"10px",fontWeight:"blod"}}>{this.state.major}</label>
                </div>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  取消
            </Button>
                <Button onClick={this.handelPost} color="primary">
                  提交
            </Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </form>
      </div>
    )
  }
}

Info.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = function (state) {
  return {
    storedData: state.dappReducer.storedValue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    gotStoredValue: (value) => dispatch({ type: "GOT_STORED_VALUE", storedValue: value })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Info));

