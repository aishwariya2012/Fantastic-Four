import React, {Component} from 'react';

import image from '../SignUp/Profile.png'
import './App.css';

 export default class PostSignUp extends Component{
    constructor(props)
    {
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {
            username : "",
            password : "",
            authFlag : false,
            inserted:false
        }
       ;
    }
    
    //Call the Will Mount to set the auth Flag to false
    componentWillMount(){
        this.setState({
            authFlag : false
        })
    }
  


    render(){
       
        return(

           
            <div>
                
            </div>    
                   
              
                      
        )
    }
}

 