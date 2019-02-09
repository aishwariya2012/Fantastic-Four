import React, {Component} from 'react';
import '../../App.css';
import cookie from 'react-cookies';
import {connect} from 'react-redux';
import 'react-day-picker/lib/style.css';
import Header from '../Headers/Header';
import {Redirect} from 'react-router';

class Home extends Component{

  
    
   
    
    submitLogin = (e) => {
       
        e.preventDefault();
 }


    render(){
        let redirectVar = null;
        if(this.props.authFlag===true){
            redirectVar = <Redirect to="/HomeDisplay"/>
        }
        
      
      
        return(
           <div>
                {redirectVar}
          <div class="body1"> 
               <Header></Header>
                <div class="main">
                      <div class="main-inner">
                         <div class="main-content">
                            <h1 class="content" style={{"color":"black", "text-align":"center"}}>
                            <span >Welcome To United States Postal Services  </span>
                            <br></br>
                            <span >  </span>
                            <button style={{"margin-top":"30px", "height":"50px","text-align":"center","font-size":"25px"}}> <a href="/ViewGroups">View Groups </a></button>
                            <br></br>
                   
                            </h1>
                    

                   
                                       
             
                </div>
               </div>
               </div>
            
        
        </div>
        </div>
        )
    
            
          
               
    
        
    }
}
const mapStateToProps = state => { 
   
    return {
     Search:state.Search,
      authFlag:state.authFlag 
    }
}


export default connect(mapStateToProps)(Home); 