import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import avatar1 from '../images/1.jpg';
import avatar2 from '../images/2.jpg';
import avatar3 from '../images/3.jpg';

const styles = theme => ({
  root: {
    width: '100%',
    minWidth: 320,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
});


class School extends Component {

  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.shape({
        push: PropTypes.func.isRequired,
        replace: PropTypes.func.isRequired
      }).isRequired,
      staticContext: PropTypes.object
    }).isRequired
  };

  handleClick = (schoolId) => {
    console.log("===> clicked on school: ", schoolId);
    this.props.selectSchool(schoolId);
    this.context.router.history.push('/info')
  }

  render() {
    const { classes } = this.props;

    return (
      <List className={classes.root}>
        <ListItem alignItems="flex-start" onClick={() => this.handleClick(1)}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={avatar1} />
          </ListItemAvatar>
          <ListItemText
            primary="清华美院"
            secondary={
              <React.Fragment>
                <Typography component="span" className={classes.inline} color="textPrimary">
                  北京市
                </Typography>
                {" - 海淀区"}
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem alignItems="flex-start" onClick={() => this.handleClick(2)}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={avatar2} />
          </ListItemAvatar>
          <ListItemText
            primary="中央美院"
            secondary={
              <React.Fragment>
                <Typography component="span" className={classes.inline} color="textPrimary">
                  北京市
                </Typography>
                {" - 望京区"}
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem alignItems="flex-start" onClick={() => this.handleClick(3)}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={avatar3} />
          </ListItemAvatar>
          <ListItemText
            primary="海淀美院"
            secondary={
              <React.Fragment>
                <Typography component="span" className={classes.inline} color="textPrimary">
                  北京市
                </Typography>
                {" - 海淀区"}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    )
  }
}

School.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = function(state) {
  return {
    storedData: state.dappReducer.storedValue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectSchool: (schoolId) => dispatch({ type: "SCHOOL_SELECTED", school: schoolId })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(School));