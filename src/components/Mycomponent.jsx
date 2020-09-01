import React from 'react'
import Grid from '@material-ui/core/Grid'
import Childcomponent from './Childcomponent'
import Appbar from './Appbar'
import axios from 'axios'
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button'
import Stepper from './Stepper'



export default class Mycomponent extends React.Component {
 

    constructor (props) {

        super (props)
        this.state = {
            items : [],
            nextPage : '',
            prevPage : '',
            isLoaded : false
        }
    }

    componentDidMount()
    {
        axios.get('https://rickandmortyapi.com/api/character/')
        .then(res => {
          
            this.setState({
                items : res.data.results,
                nextPageLink : res.data.info.next,
                prevPageLink : res.data.info.prev,
                isLoaded : true
            })
        }).catch (err => {
            console.log(err)
        })
    }

    nextPage = () => {
    
      const {nextPageLink} = this.state
      axios.get(nextPageLink)
        .then(res => {
          
            this.setState({
                items : res.data.results,
                nextPageLink : res.data.info.next,
                prevPageLink : res.data.info.prev,
                isLoaded : true
            })
        }).catch (err => {
            console.log(err)
        })
    }

    prevPage = () => {
     
      const {prevPageLink} = this.state
      axios.get(prevPageLink)
      .then(res => {
        
          this.setState({
              items : res.data.results,
              nextPageLink : res.data.info.next,
              prevPageLink : res.data.info.prev,
              isLoaded : true
          })
      }).catch (err => {
          console.log(err)
      })

    }

    render() {

         var {items, isLoaded ,nextPageLink, prevPageLink} = this.state
         if (!isLoaded)
         return <CircularProgress></CircularProgress>
         else
         {return (
            <div>
            <Container maxWidth="lg" spacing={2}> 
            <Appbar></Appbar>
            <Stepper
            isNext={nextPageLink} 
            isPrev={prevPageLink} 
            next={this.nextPage} 
            prev={this.prevPage}
            style={{flexDirection :'row',justifyContent :'flex'}}
            />
            <Grid container spacing={2}>
             { items.map (item => 
             <Childcomponent 
             key={item.id} 
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




    