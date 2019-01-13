import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import QRCode from 'qrcode.react';
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
        <img
          src={require(`../images/${certInfo.school}.jpg`)}
          title="准考证"
          alt="学校"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { certInfo.name }
          </Typography>
          <Typography gutterBottom>
            { certInfo.major }
          </Typography>
          <QRCode value={ certInfo.certHash } size={256}/>
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
