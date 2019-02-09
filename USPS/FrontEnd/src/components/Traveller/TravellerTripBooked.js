import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import TravellerHeader from '../Headers/TravellerHeader';
import image from './Profile.png'
import { graphql, compose, withApollo } from 'react-apollo';
import { TravellerTrip } from '../../queries/queries';
import { addBooking } from '../../mutation/mutations';
//Define a Login Component
class travellerdashboard extends Component
{
    //call the constructor method
    constructor(props)
    {
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {
            properties : [],
            imageView: [],
            currentPage: 1,
            propertiesPerPage: 5,
        }
    }
    setStateAsync(state) {
        return new Promise(resolve => {
          this.setState(state, resolve);
        });
      }
    //Call the Will Mount to set the auth Flag to false
    componentWillMount(){

     
        this.props.client.query({
            query : TravellerTrip,
            variables: {
             UserName:localStorage.getItem("username")
                       
                   }
        }).then(res=>{
            console.log("Data",res)
            console.log("Data",res.data.TravellerTrip)
            this.setState({
                properties:this.state.properties.concat(res.data.TravellerTrip)
            })
        });
           


        // var properties,i;
        // var data={
        //     username:this.props.name
            
        // }
    //     console.log(data);
    //   axios.post('http://localhost:3001/TravellerTrip',data)
    //     .then(async (response) => {
    //         console.log(response.data);
    //         if(response.data.updatedList.length==0){
    //             alert("you have nt Booked any property!!! Please ClickTo HomeAway");
        
    //         }
    //         else{
    //     this.setState({
    //         properties : this.state.properties.concat(response.data.updatedList) 
    //     });
    // //     this.state.properties.map (property =>
    //         {
               
    //            console.log(property.ImageName);
    //            i=property.ImageName.split(',');
    //             console.log(i[0]);
    //   axios.post('http://localhost:3001/download/'+i[0])
    //             .then(response => {
    //                 console.log("Imgae Res : ",response);
    //                 let imagePreview = 'data:image/jpg;base64, ' + response.data;
    //                 this.setStateAsync({imageView: this.state.imageView.concat(imagePreview)  });
    //             });
    //         })

    // }
       
                
    //     });
        
        
    
    }
   

    render()
    {
        const {  currentPage, propertiesPerPage,imageView,properties } = this.state;
        
        

        const indexOfLastTodo = currentPage * propertiesPerPage;
        const indexOfFirstTodo = indexOfLastTodo - propertiesPerPage;
        const currentProperties = properties.slice(indexOfFirstTodo, indexOfLastTodo);
        // const imageView1=imageView.slice(indexOfFirstTodo, indexOfLastTodo);
        var i=-1;
        let details = currentProperties.map(property => {
            i=i+1;
                return (
                    
            <div class="backclm">
            <div class="mar">
            <div class="border2">
            <div class="row">
            {/* <img class="images"  onClick={() =>this.imageClick(property.PropertyID)} src={imageView1[i]}/>  */}
            <div class="h">    
              <h3> {property.Headline}</h3>
              <div class="row">
              <p> {property.BedRoom} BedRoom |</p>
              <p>{property.BathRoom} BathRooms|</p>
              <p>Accomodates {property.Accomodates}|</p>
              <p>$ {property.RentalRates}</p>
              
              </div>
                {/* From: {property.Start} 
                <br></br>
                To: {property.End} */}
              <p>{property.City}</p>
            Property Listed By:  <p>{property.PropertyListedBy}</p>
              
             
</div>
</div>
          </div>
                
                
                </div>
                </div>
                       
                 
              
                )
            })
            const pageNumbers = [];
            for (let i = 1; i <= Math.ceil(properties.length / propertiesPerPage); i++) {
              pageNumbers.push(i);
            }
            const renderPageNumbers = pageNumbers.map(number => {
                return (
                   
                  <li class="fontcolor"
                    key={number}
                    id={number}
                    onClick={this.handleClick}>
                    {number}
                    &nbsp;
                  </li>
               
                  
                );
              });
        
            return(       
                <div >
                    
                    <div >
                    <TravellerHeader></TravellerHeader>
                    </div>
                
               <div class="row">
        
               <p class="p1">       Your Booked Trips:</p>
              
                     
                     
                    
               </div>
                        
               <div class="mainpage">
            
               {details}
               <div class="pagenumber">
            <div class="pagination">
            <ul>
            <li class="fontcolor">&laquo;</li>
            {renderPageNumbers}   
            
            <li class="fontcolor">&raquo;</li>
                  </ul>
                  </div>
            </div>
            
            </div>
            </div>
                    
                )
            }
        }
     
        // export default connect(mapStateToProps)( travellerdashboard);
export default compose(
            graphql(TravellerTrip, { name: "TravellerTrip" }),
           
            )
            (withApollo(travellerdashboard))
        