import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 300,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    title : {
      textAlign : 'left'
    },
    avatar: {
      backgroundColor: "#fc7703",
    },
  }));

export default function Childcomponent (props)  {
    
        const classes = useStyles();
         
        return (

     <Grid item xs={3}>
      <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.name.charAt(0)}
          </Avatar>
        }
        title={props.name}
        className={classes.title}
      />
      <CardMedia
        className={classes.media}
        image={props.image}
        title="Paella dish"
      />
      <CardContent>
      <Typography variant="caption" display="block" gutterBottom className={classes.title}>
        Species : {props.species}
      </Typography>
      <Typography variant="caption" display="block" gutterBottom className={classes.title}>
        Gender : {props.gender}
      </Typography>
      <Typography variant="caption" display="block" gutterBottom className={classes.title}>
        Origin : {props.origin}
      </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
    </Grid>
        );
    }