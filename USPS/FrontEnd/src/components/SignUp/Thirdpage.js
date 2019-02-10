import React, {Component} from 'react';

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
<div class="body1">
  
 <p style={{"color":"aliceblue","padding-left":"10px"}}>View Detials of the Letters  </p>
      <div style={{"padding-top":"20px"}}>    
 <div class="text" style={{"padding-top":"100px", "margin-left":"10px","color":"black","background-color":"rgb(20, 119, 141,0.8)","font-size": "14px","padding": "4px","max-width": "1250px","text-align": "center","border": "2px solid","margin-bottom":"10px"}} >
 <div class="row" style={{"padding-left":"30px"}}>
 <p><strong>Source : 868 S 5th St, San Jose, CA, 95113</strong></p> &nbsp; &nbsp;
 <p><strong>   Destination: 24 Willie Mays Plz, San Francisco, CA 94107</strong></p> &nbsp; &nbsp;
 <p><strong>Weight of Package: 0.1lb</strong></p> &nbsp; &nbsp;

 <p><strong>Size: 9 x 12.8 in</strong></p> &nbsp; &nbsp;
 <p><strong>Pincode:95113</strong></p> &nbsp; &nbsp;
 <p><strong>Tracking ID: 95113</strong></p> &nbsp; &nbsp;
 </div>
 </div>
 <div class="text" style={{"padding-top":"100px", "margin-left":"10px","color":"black","background-color":"rgb(20, 119, 141,0.8)","font-size": "14px","padding": "4px","max-width": "1250px","text-align": "center","border": "2px solid","margin-bottom":"10px"}} >
 <div class="row" style={{"padding-left":"30px"}}>
 <p><strong>Source : 868 S 5th St, San Jose, CA, 95113</strong></p> &nbsp; &nbsp;
 <p><strong>   Destination: 24 Willie Mays Plz, San Francisco, CA 94107</strong></p> &nbsp; &nbsp;
 <p><strong>Weight of Package: 0.1lb</strong></p> &nbsp; &nbsp;

 <p><strong>Size: 9 x 12.8 in</strong></p> &nbsp; &nbsp;
 <p><strong>Pincode:95113</strong></p> &nbsp; &nbsp;
 <p><strong>Tracking ID: 95113</strong></p> &nbsp; &nbsp;
 </div>
 </div> 
 <div class="text" style={{"padding-top":"100px", "margin-left":"10px","color":"black","background-color":"rgb(20, 119, 141,0.8)","font-size": "14px","padding": "4px","max-width": "1250px","text-align": "center","border": "2px solid","margin-bottom":"10px"}} >
 <div class="row" style={{"padding-left":"30px"}}>
 <p><strong>Source : 868 S 5th St, San Jose, CA, 95113</strong></p> &nbsp; &nbsp;
 <p><strong>   Destination: 24 Willie Mays Plz, San Francisco, CA 94107</strong></p> &nbsp; &nbsp;
 <p><strong>Weight of Package: 0.1lb</strong></p> &nbsp; &nbsp;

 <p><strong>Size: 9 x 12.8 in</strong></p> &nbsp; &nbsp;
 <p><strong>Pincode:95113</strong></p> &nbsp; &nbsp;
 <p><strong>Tracking ID: 95113</strong></p> &nbsp; &nbsp;
 </div>
 </div> 
 <div class="text" style={{"padding-top":"100px", "margin-left":"10px","color":"black","background-color":"rgb(20, 119, 141,0.8)","font-size": "14px","padding": "4px","max-width": "1250px","text-align": "center","border": "2px solid","margin-bottom":"10px"}} >
 <div class="row" style={{"padding-left":"30px"}}>
 <p><strong>Source : 868 S 5th St, San Jose, CA, 95113</strong></p> &nbsp; &nbsp;
 <p><strong>   Destination: 24 Willie Mays Plz, San Francisco, CA 94107</strong></p> &nbsp; &nbsp;
 <p><strong>Weight of Package: 0.1lb</strong></p> &nbsp; &nbsp;

 <p><strong>Size: 9 x 12.8 in</strong></p> &nbsp; &nbsp;
 <p><strong>Pincode:95113</strong></p> &nbsp; &nbsp;
 <p><strong>Tracking ID: 95113</strong></p> &nbsp; &nbsp;
 </div>
 </div> 
 <div class="text" style={{"padding-top":"100px", "margin-left":"10px","color":"black","background-color":"rgb(20, 119, 141,0.8)","font-size": "14px","padding": "4px","max-width": "1250px","text-align": "center","border": "2px solid","margin-bottom":"10px"}} >
 <div class="row" style={{"padding-left":"30px"}}>
 <p><strong>Source : 868 S 5th St, San Jose, CA, 95113</strong></p> &nbsp; &nbsp;
 <p><strong>   Destination: 24 Willie Mays Plz, San Francisco, CA 94107</strong></p> &nbsp; &nbsp;
 <p><strong>Weight of Package: 0.1lb</strong></p> &nbsp; &nbsp;

 <p><strong>Size: 9 x 12.8 in</strong></p> &nbsp; &nbsp;
 <p><strong>Pincode:95113</strong></p> &nbsp; &nbsp;
 <p><strong>Tracking ID: 95113</strong></p> &nbsp; &nbsp;
 </div>
 </div> 
 <div class="text" style={{"padding-top":"100px", "margin-left":"10px","color":"black","background-color":"rgb(20, 119, 141,0.8)","font-size": "14px","padding": "4px","max-width": "1250px","text-align": "center","border": "2px solid","margin-bottom":"10px"}} >
 <div class="row" style={{"padding-left":"30px"}}>
 <p><strong>Source : 868 S 5th St, San Jose, CA, 95113</strong></p> &nbsp; &nbsp;
 <p><strong>   Destination: 24 Willie Mays Plz, San Francisco, CA 94107</strong></p> &nbsp; &nbsp;
 <p><strong>Weight of Package: 0.1lb</strong></p> &nbsp; &nbsp;

 <p><strong>Size: 9 x 12.8 in</strong></p> &nbsp; &nbsp;
 <p><strong>Pincode:95113</strong></p> &nbsp; &nbsp;
 <p><strong>Tracking ID: 95113</strong></p> &nbsp; &nbsp;
 </div>
 </div> 
 <div class="text" style={{"padding-top":"100px", "margin-left":"10px","color":"black","background-color":"rgb(20, 119, 141,0.8)","font-size": "14px","padding": "4px","max-width": "1250px","text-align": "center","border": "2px solid","margin-bottom":"10px"}} >
 <div class="row" style={{"padding-left":"30px"}}>
 <p><strong>Source : 868 S 5th St, San Jose, CA, 95113</strong></p> &nbsp; &nbsp;
 <p><strong>   Destination: 24 Willie Mays Plz, San Francisco, CA 94107</strong></p> &nbsp; &nbsp;
 <p><strong>Weight of Package: 0.1lb</strong></p> &nbsp; &nbsp;

 <p><strong>Size: 9 x 12.8 in</strong></p> &nbsp; &nbsp;
 <p><strong>Pincode:95113</strong></p> &nbsp; &nbsp;
 <p><strong>Tracking ID: 95113</strong></p> &nbsp; &nbsp;
 </div>
 </div> 
 <div class="text" style={{"padding-top":"100px", "margin-left":"10px","color":"black","background-color":"rgb(20, 119, 141,0.8)","font-size": "14px","padding": "4px","max-width": "1250px","text-align": "center","border": "2px solid","margin-bottom":"10px"}} >
 <div class="row" style={{"padding-left":"30px"}}>
 <p><strong>Source : 868 S 5th St, San Jose, CA, 95113</strong></p> &nbsp; &nbsp;
 <p><strong>   Destination: 24 Willie Mays Plz, San Francisco, CA 94107</strong></p> &nbsp; &nbsp;
 <p><strong>Weight of Package: 0.1lb</strong></p> &nbsp; &nbsp;

 <p><strong>Size: 9 x 12.8 in</strong></p> &nbsp; &nbsp;
 <p><strong>Pincode:95113</strong></p> &nbsp; &nbsp;
 <p><strong>Tracking ID: 95113</strong></p> &nbsp; &nbsp;
 </div>
 </div> 
  
 
       
</div>    
</div>


        )
    }
}

 