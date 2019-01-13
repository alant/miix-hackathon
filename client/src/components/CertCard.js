import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function CertCard(props) {
  const { classes, certInfo } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require('../images/1.jpg')}
          title="准考证"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { certInfo.name }
          </Typography>
          <Typography component="p">
            { certInfo.certHash }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Print
        </Button>
      </CardActions>
    </Card>
  );
}

CertCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CertCard);
