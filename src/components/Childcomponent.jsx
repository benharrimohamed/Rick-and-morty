import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


export default function Childcomponent (props)  {

  const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: props.status == "Alive" ? "#5cb85c" : "#d9534f",
      boxShadow: "0 0 0 3px #fff"
    },
  }))(Badge);
  
  
  const useStyles = makeStyles((theme) => ({
    root: {
    },
    media: {
      height: 0,
      paddingTop: '56.25%', 
    },
    title : {
      textAlign : 'left'
    },
    avatar: {
      backgroundColor: "#0275d8",
    },
  }));
    
  const classes = useStyles();
         
    return (

     <Grid item md={3} xs={12} sm={6}>
      <Card className={classes.root}>
      <CardHeader
        avatar={
          <StyledBadge
          overlap="circle"
          anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
          }}
          variant="dot"
        >
        <Avatar alt="Remy Sharp">{props.name.charAt(0)}</Avatar>
      </StyledBadge>
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
    </Card>
    </Grid>
        );
    }