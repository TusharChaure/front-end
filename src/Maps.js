import React, { Component } from 'react';
import { GoogleComponent } from 'react-google-location' 
import axios from 'axios'
import back1 from './UI/food.jpg'
 

class Maps extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'Maharashtra',
      latitude: null,
      longitude: null,
      Address: null,
      key: 'AIzaSyB4TESW6B2tp03k08vStngbRHltlNC2O4A'
    };
    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
    this.reverseGeocodeCoordinates = this.reverseGeocodeCoordinates.bind(this);
  }

  handleClick() {
    console.log(localStorage.latitude);
    axios.post('http://165.22.208.232/users/updatelatlong',
    // axios.post('users/updatelatlong',
          {
            longi: localStorage.longitude,
            lat: localStorage.latitude
          }
          ,{
          headers: {
            'auth-token': localStorage.usertoken
          }},
          
          )
        .then(res => {
            alert('Location updated!')
        })
        .catch(err => {
            console.log("err")
        })
  }

  getLocation () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  getCoordinates (position) {
     this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    })
    this.reverseGeocodeCoordinates()
  }

  reverseGeocodeCoordinates() {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&sensor=false&key=${this.state.key}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => alert(error))
  }

  render() {
    localStorage.setItem("latitude",this.state.latitude)
    localStorage.setItem("longitude",this.state.longitude)
    return (
      <div style={{ paddingTop:'1%', paddingBottom:'1%'}}>
      <div style={{ marginTop:'1%', marginBottom:'1%', marginLeft:'10%', marginRight:'10%'}}>
        <p style={{marginLeft:'15%', marginRight:'15%'}}><b>Update Location</b></p>
        <button className='btn btn-primary' onClick={this.getLocation} style={{marginLeft:'0%', marginRight:'0%', background:'#779A25', borderColor:'#779A25', width:'100%'}}>Current location</button>
        {/* <p name="latitude" style={{marginLeft:'15%', marginRight:'15%'}}>Latitute : {this.state.latitude}</p>
        <p name="longitude" style={{marginLeft:'15%', marginRight:'15%'}}>Longitude : {this.state.longitude}</p> */}
        <br />
        <select name="location" value={this.state.value} onChange={this.onChange} style={{ marginLeft:'0%', width:'100%', height:'40px',borderRadius:'5px', marginTop:'3%',marginBottom:'3%'}}>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Delhi">Delhi</option> 
                <option value="Karnataka">Karnataka</option>
        </select>
        <div style={{marginBottom:'3%'}}>
        <button className='btn btn-primary' type="button" style={{marginLeft:'0%', marginRight:'0%', background:'#779A25', borderColor:'#779A25', width:'100%'}} onClick={this.handleClick}>Update Location</button>
        </div>
      </div>
      </div>

    )
  } 
}


export default Maps;