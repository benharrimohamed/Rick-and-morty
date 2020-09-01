import React from 'react'
import Grid from '@material-ui/core/Grid'
import Childcomponent from './Childcomponent'
import Appbar from './Appbar'
import axios from 'axios'
import { Container } from '@material-ui/core'




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
        axios.get('https://rickandmortyapi.com/api/character/')
        .then(res => {
          
            this.setState({
                items : res.data.results,
                isLoaded : true
            })
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
            <div>
            <Container maxWidth="lg" spacing={2}> 
            <Appbar></Appbar>
            <Grid container spacing={2}>
             { items.map (item => 
             <Childcomponent 
             key={item.name} 
             name={item.name} 
             status ={item.status} 
             species={item.species}
             image={item.image}
             gender={item.gender}
             origin={item.origin.name}
             ></Childcomponent>)}
            </Grid>
            </Container> 
            </div>
         );}
    }
}




    