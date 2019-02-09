import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Home from './Home/Home';

import View from './SignUp/PostSignUp';


import Post from './SignUp/PostSignUp';




//Create a Main Component
class Main extends Component {
    render(){
        return(
         
            <div>
                {/*Render Different Component based on Route*/}
                
                <Route exact path="/" component={Home}/>
              
                <Route path="/ViewGroups" component={Post}/>
               
         
              
            </div>
   
        )
        
        }
}

export default Main;