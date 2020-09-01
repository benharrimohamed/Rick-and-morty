import React from 'react'

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
        fetch('https://rickandmortyapi.com/api/character/2')
        .then(res => res.json())
        .then(res => {
            this.setState({
                items : res,
                isLoaded : true
            })
            console.log(res);
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
             <Childcomponent name={items.name} status ={items.status} species={items.species}></Childcomponent>
            </div>
         );}
    }
}


class Childcomponent extends React.Component {



    render () {

        return (

            <div>
                <div>{this.props.name}</div>
                <div>{this.props.status}</div>
                <div>{this.props.species}</div>
            </div>
        );
    }
}


    