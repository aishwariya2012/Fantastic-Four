import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Home from './Home/Home';

import View from './SignUp/PostSignUp';


import Post from './SignUp/PostSignUp';
import Details from "./SignUp/Thirdpage";





//Create a Main Component
class Main extends Component {
    render(){
        return(
         
            <div>
                {/*Render Different Component based on Route*/}
                
                <Route exact path="/" component={Home}/>
              
                <Route path="/ViewGroups" component={Post}/>
                <Route path="/ViewDetails" component={Details}/>
               
         
              
            </div>
   
        )
        
        }
}

export default Main;