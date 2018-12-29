import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

 class Recepie extends Component {
    
    constructor (){
        super();
        this.state = {
            recepies: []
        }
        
        console.log(super());
    } 
     
    componentDidMount(){
        
    } 
     
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Recepie Component</div>

                            <div className="card-body">
                                I'm an example component!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Recepie;


