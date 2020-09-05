import React from 'react'
import Grid from '@material-ui/core/Grid'
import Childcomponent from './Childcomponent'
import Appbar from './Appbar'
import axios from 'axios'
import Container from '@material-ui/core/Container'
import Stepper from './Stepper'



export default class Mycomponent extends React.Component {
 

    constructor (props) {

        super (props)
        this.state = {
            items : [],
            api_URL : 'https://rickandmortyapi.com/api/character/?name=',
            nextPage : '',
            prevPage : '',
            isLoaded : false,
            query : ''
        }
    }

    fetchDataFromApi (url,query) {
          
        axios.get(url+query)
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

    componentDidMount()
    {
        this.fetchDataFromApi(this.state.api_URL,this.state.query);
    }


    handleOnInputChange = (event) => {
        this.setState({
            query : event.target.value,
            isLoaded : false
        }, () => {
            this.fetchDataFromApi(this.state.api_URL,this.state.query)
        })
        
      }

    nextPage = () => {
    
        this.fetchDataFromApi(this.state.nextPageLink,'')
    }

    prevPage = () => {
     
        this.fetchDataFromApi(this.state.prevPageLink,'')
    }

    render() {

         var {items,nextPageLink, prevPageLink} = this.state
          return (
            <div>
            <Container spacing={3}>
            <Grid item md={12} xs={12}> 
            <Appbar search={this.handleOnInputChange}></Appbar>
            </Grid>
            <Grid item md={12}>   
            <Stepper
            isNext={nextPageLink} 
            isPrev={prevPageLink} 
            next={this.nextPage} 
            prev={this.prevPage}
            style={{justifyContent: 'flex-end'}}
            />
            </Grid>
            <Grid item container spacing={2}>
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
            <Grid item container spacing={2}>
            <Grid item md={12}>   
            <Stepper
            isNext={nextPageLink} 
            isPrev={prevPageLink} 
            next={this.nextPage} 
            prev={this.prevPage}
            style={{justifyContent: 'flex-end'}}
            />
            </Grid>
            </Grid>
            </Container> 
            </div>
         );
    }
}




    