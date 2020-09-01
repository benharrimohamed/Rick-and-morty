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
            <div>
             { items.map (item => <Childcomponent key={item.name} name={item.name} status ={item.status} species={item.species}></Childcomponent>)}
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


    