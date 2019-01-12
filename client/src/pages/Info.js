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

const styles = theme => ({
  grid: {
    marginTop:"40px",
    marginLeft:"20px",
    width:"320px",
    flex:1,
  },
  input_id: {
    margin: "20px 0px"
  }, 
  input_type: {
    margin: "20px 0px"
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
    userNameHelper:'',
    userId: '',
    userIdHelper:'',
    schoolType: '',
    schoolTypeHelper:'',
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handelPost = () => {
    console.log(this.state,'------InputValue');
    //在此做提交操作，比如发dispatch等
    if(this.state.userName==""){
        this.setState({userNameHelper:"姓名不能为空"});
    }else if(this.state.userId==""){
      this.setState({userIdHelper:"身份证号不能为空"});
    }else if(this.state.schoolType==""){
      this.setState({schoolTypeHelper:"考生类型不能为空"});
    }
  };
  handelChangeName(e){
    this.setState({
        userName:e.target.value,
        userNameHelper:""
    })
  };
  handelChangeId(e){
    this.setState({
        userId:e.target.value,
        userIdHelper:""
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
                value={this.state.schoolType}
                onChange={this.handleChange}
                name="schoolType"
                className={classes.input_id} 
                inputProps={{
                  name: 'schoolType',
                  id: 'type-simple',
                }}
              >
                <MenuItem value={"本科"}>本科</MenuItem>
                <MenuItem value={"高职"}>高职</MenuItem>
                <MenuItem value={"大专"}>大专</MenuItem>
              </Select>
              <FormHelperText>{this.state.schoolTypeHelper}</FormHelperText>
            </FormControl>
            <Button variant="contained" color="primary" className={classes.button} onClick={this.handelPost}>保存</Button>
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

