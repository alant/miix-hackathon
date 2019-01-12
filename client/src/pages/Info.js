import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

class Info extends Component {
  render() {
    return (
      <div>
        <h1>个人信息页面</h1>
        <Grid 
          container
          direction="column"
          justify="center"
          alignItems="left" >
          <Input type="text" placeholder="姓名" />
          <TextField type="text" placeholder="姓名" label="test" />
        </Grid>
      </div>
    )
  }
}

export default Info;
