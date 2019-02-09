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
           <div class="text" style={{"top-margin":"200px", "color":"black","background-color":"rgb(20, 119, 141)","font-size": "14px","padding": "4px","max-width": "250px","top":"20","text-align": "center","border": "2px solid"}} >
            <p><strong>Zipcode: 95113</strong></p>
            <p><strong>No of letters:50</strong></p>
<button style={{"border": "2px solid"}}>USPS driver</button>; 
&nbsp;
<button style={{"border": "2px solid"}}>Fleet Driver</button>             
</div>
 <div class="text" style={{"top-margin":"200px", "color":"black","background-color":"rgb(20, 119, 141)","font-size": "14px","padding": "4px","max-width": "250px","top":"20","text-align": "center","border": "2px solid"}} >
 <p><strong>Source : 95113</strong></p>
 <p><strong>Destination:50</strong></p>
 <p><strong>Weight of Package: 95113</strong></p>
 <p><strong>No of letters:50</strong></p>
 <p><strong>Size: 95113</strong></p>
 <p><strong>Pincode:50</strong></p>
 <p><strong>Tracking ID: 95113</strong></p>
             
</div>    
</div>
        )
    }
}

 