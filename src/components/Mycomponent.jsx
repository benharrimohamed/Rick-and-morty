import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';


export default class Mycomponent extends React.Component {
 

    constructor (props) {

        super (props)
        this.state = {
            items : [],
            isLoaded : false
        }
    }

    componentDidMount()
    {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(res => res.json())
        .then(res => {
            this.setState({
                items : res.results,
                isLoaded : true
            })
            console.log(res.results);
        }).catch (err => {
            console.log(err)
        })
    }

    render() {

         var {items, isLoaded} = this.state
         if (!isLoaded)
         return <div>Loading ...</div>
         else
         {return (
            <Grid container lg={12} xs={12} sm={12} spacing={3}>
             { items.map (item => 
             <Childcomponent 
             key={item.name} 
             name={item.name} 
             status ={item.status} 
             species={item.species}
             image={item.image}
             ></Childcomponent>)}
            </Grid>
         );}
    }
}

class Childcomponent extends React.Component {

    render () {
        return (

     <Grid item xs={4}>
      <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={this.props.image}>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={this.props.name}
        subheader={this.props.status}
      />
      <CardMedia
        image={this.props.image}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
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
}


    