import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import RecepieCard from './RecpieCard';

 class Recepie extends Component {
    
    constructor (){
        super();
        this.state = {
            recepies: [],
            error: false
        }
        
        console.log(super());
    } 
     
    componentDidMount(){
        axios.get('/api/recepie')
        .then(response => {
            // console.log(response);
            this.setState({
                recepies: response.data
            })
            .catch(error => {
                // console.log(error);
                this.setState({error: true});
            });
            
        })
    } 
     
    render() {
        
        console.log(this.state.recepies);
         
        let recepie = <p>Recepies did not load!</p>;
        
            recepie = this.state.recepies.map(res => {
                return  <RecepieCard 
                    key={res.id}
                    name={res.name} 
                    ingredients={res.ingredients}/>
            })
            
        
                
        
        return (
            <div className="container">
                {recepie}
            </div>
        );
    }
}

export default Recepie;


