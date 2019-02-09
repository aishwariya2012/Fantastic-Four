import React, {Component} from 'react';

import image from '../SignUp/Profile.png'
import './App.css';
import Header from '../Headers/Header';
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
<div class="body1">
<Header></Header>
          <div class="row" style={{"margin-top":"25px"}}>
          <div class="col-3">
           <div class="text" style={{"top-margin":"200px", "color":"black","background-color":"rgb(20, 119, 141,0.8)","font-size": "14px","padding": "4px","max-width": "250px","top":"20","text-align": "center","border": "2px solid"}} >
            <p><strong>Zipcode: 95113</strong></p>
            <p><strong>No of letters:50</strong></p>
               <button style={{"border": "2px solid"}}>Find USPS driver</button>
                &nbsp;
                <button style={{"border": "2px solid"}}>Fleet Driver</button>             
            </div>
           </div>
           <div class="col-3">
        <div class="text" style={{"top-margin":"200px", "color":"black","background-color":"rgb(20, 119, 141,0.8)","font-size": "14px","padding": "4px","max-width": "250px","top":"20","text-align": "center","border": "2px solid"}} >
          <p><strong>Zipcode: 95112</strong></p>
        <p><strong>No of letters:50</strong></p>
            <button style={{"border": "2px solid"}}>Find USPS driver</button> 
            &nbsp;
            <button style={{"border": "2px solid"}}>Fleet Driver</button>             
        </div> 
          </div>
          <div class="col-3">
        <div class="text" style={{"top-margin":"200px", "color":"black","background-color":"rgb(20, 119, 141,0.8)","font-size": "14px","padding": "4px","max-width": "250px","top":"20","text-align": "center","border": "2px solid"}} >
          <p><strong>Zipcode: 95002</strong></p>
        <p><strong>No of letters:20</strong></p>
            <button style={{"border": "2px solid"}}>Find USPS driver</button> 
            &nbsp;
            <button style={{"border": "2px solid"}}>Fleet Driver</button>             
        </div> 
        
        </div> 
        <div class="col-3">
        <div class="text" style={{"top-margin":"200px", "color":"black","background-color":"rgb(20, 119, 141,0.8)","font-size": "14px","padding": "4px","max-width": "250px","top":"20","text-align": "center","border": "2px solid"}} >
          <p><strong>Zipcode: 95103</strong></p>
        <p><strong>No of letters:200</strong></p>
            <button style={{"border": "2px solid"}}>Find USPS driver</button> 
            &nbsp;
            <button style={{"border": "2px solid"}}>Fleet Driver</button>             
        </div> 
        
        </div>  

</div>
<div class="row" style={{"margin-top":"25px"}}>
          <div class="col-3">
           <div class="text" style={{"top-margin":"200px", "color":"black","background-color":"rgb(20, 119, 141,0.8)","font-size": "14px","padding": "4px","max-width": "250px","top":"20","text-align": "center","border": "2px solid"}} >
            <p><strong>Zipcode: 95106</strong></p>
            <p><strong>No of letters:45</strong></p>
               <button style={{"border": "2px solid"}}>Find USPS driver</button>
                &nbsp;
                <button style={{"border": "2px solid"}}>Fleet Driver</button>             
            </div>
           </div>
           <div class="col-3">
        <div class="text" style={{"top-margin":"200px", "color":"black","background-color":"rgb(20, 119, 141,0.8)","font-size": "14px","padding": "4px","max-width": "250px","top":"20","text-align": "center","border": "2px solid"}} >
          <p><strong>Zipcode: 95108</strong></p>
        <p><strong>No of letters:75</strong></p>
            <button style={{"border": "2px solid"}}>Find USPS driver</button> 
            &nbsp;
            <button style={{"border": "2px solid"}}>Fleet Driver</button>             
        </div> 
          </div>
          <div class="col-3">
        <div class="text" style={{"top-margin":"200px", "color":"black","background-color":"rgb(20, 119, 141,0.8)","font-size": "14px","padding": "4px","max-width": "250px","top":"20","text-align": "center","border": "2px solid"}} >
          <p><strong>Zipcode: 95109</strong></p>
        <p><strong>No of letters:20</strong></p>
            <button style={{"border": "2px solid"}}>Find USPS driver</button> 
            &nbsp;
            <button style={{"border": "2px solid"}}>Fleet Driver</button>             
        </div> 
        
        </div> 
        <div class="col-3">
        <div class="text" style={{"top-margin":"200px", "color":"black","background-color":"rgb(20, 119, 141,0.8)","font-size": "14px","padding": "4px","max-width": "250px","top":"20","text-align": "center","border": "2px solid"}} >
          <p><strong>Zipcode: 95110</strong></p>
        <p><strong>No of letters:80</strong></p>
            <button style={{"border": "2px solid"}}>Find USPS driver</button> 
            &nbsp;
            <button style={{"border": "2px solid"}}>Fleet Driver</button>             
        </div> 
        
        </div>  

</div>
<div class="row" style={{"margin-top":"25px"}}>
          <div class="col-3">
           <div class="text" style={{"top-margin":"200px", "color":"black","background-color":"rgb(20, 119, 141,0.8)","font-size": "14px","padding": "4px","max-width": "250px","top":"20","text-align": "center","border": "2px solid"}} >
            <p><strong>Zipcode: 95115</strong></p>
            <p><strong>No of letters:40</strong></p>
               <button style={{"border": "2px solid"}}>Find USPS driver</button>
                &nbsp;
                <button style={{"border": "2px solid"}}>Fleet Driver</button>             
            </div>
           </div>
           <div class="col-3">
        <div class="text" style={{"top-margin":"200px", "color":"black","background-color":"rgb(20, 119, 141,0.8)","font-size": "14px","padding": "4px","max-width": "250px","top":"20","text-align": "center","border": "2px solid"}} >
          <p><strong>Zipcode: 95116</strong></p>
        <p><strong>No of letters:50</strong></p>
            <button style={{"border": "2px solid"}}>Find USPS driver</button> 
            &nbsp;
            <button style={{"border": "2px solid"}}>Fleet Driver</button>             
        </div> 
          </div>
          <div class="col-3">
        <div class="text" style={{"top-margin":"200px", "color":"black","background-color":"rgb(20, 119, 141,0.8)","font-size": "14px","padding": "4px","max-width": "250px","top":"20","text-align": "center","border": "2px solid"}} >
          <p><strong>Zipcode: 95117</strong></p>
        <p><strong>No of letters:40</strong></p>
            <button style={{"border": "2px solid"}}>Find USPS driver</button> 
            &nbsp;
            <button style={{"border": "2px solid"}}>Fleet Driver</button>             
        </div> 
        
        </div> 
        <div class="col-3">
        <div class="text" style={{"top-margin":"200px", "color":"black","background-color":"rgb(20, 119, 141,0.8)","font-size": "14px","padding": "4px","max-width": "250px","top":"20","text-align": "center","border": "2px solid"}} >
          <p><strong>Zipcode: 95118</strong></p>
        <p><strong>No of letters:80</strong></p>
            <button style={{"border": "2px solid"}}>Find USPS driver</button> 
            &nbsp;
            <button style={{"border": "2px solid"}}>Fleet Driver</button>             
        </div> 
        
        </div>  

</div>
       
</div>
        )
    }
}

 