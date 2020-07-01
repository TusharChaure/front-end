import React, { Component } from "react";
import axios from 'axios'
import { Button, Form, FormGroup, Label, Jumbotron, Input} from 'reactstrap';
import Switch from "react-switch";
import { ToastContainer, toast } from 'react-toastify';

class Profile extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      status: "true",
    }
    this.onChange = this.onChange.bind(this)
    this.handle = this.handle.bind(this)
  }

  componentDidMount() {

    // axios.get('http://localhost:5000/homechef/profile', {
    axios.get('homechef/profile', {
      headers: {
        'auth-token': localStorage.usertoken
      }})
   .then(res => {
       console.log(res)
       if(res.data.status==true){
        console.log(res.data.data)
          this.setState({items: res.data.data})
      }
      else if(res.data.status==false){
          // alert(res.data.error)
          toast(res.data.error, {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
      } 
   }
   )
   .catch(error => {
      // alert("login first");
     toast("Login First!!", {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
    })
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value})
  }
  
  handle(e) {
    console.log(this.state.status);
    console.log("clicked");
    // axios.post(`http://localhost:5000/homechef/status/${this.state.status}`,{},
    axios.post(`homechef/status/${this.state.status}`,{},
          {
              headers: {
                'auth-token': localStorage.usertoken
              }},
              )
              .then(res => {
                  if(res.data.status==true){
                    //  alert(res.data.data)
                     toast(res.data.data, {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
                  }
                  else{
                      // alert(res.data.error)
                      toast(res.data.data, {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
                  }
              })
              .catch(err => {
                  // console.log("err")
                  toast(err, {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
              })
  
  }

  editform() {
    var form = document.getElementById("form");
    var elements = form.elements;
    for (var i = 0, len = elements.length; i < len; ++i) {
      elements[i].readOnly = !elements[i].readOnly;
    }
    var editButton = document.getElementById("editButton");
    editButton.classList.toggle("btn-danger");
    editButton.innerHTML = editButton.innerHTML === "Edit" ? "Cancel" : "Edit";
  }

  render(){
    return(
      <div>
      <div className="row no-gutters ">
          <div className="container text-left">
            <h4 className="mt-2"><b>My Profile</b></h4>
             {
              <form id="form" onSubmit={this.handleSubmit}>
                <hr />
                <div className="container">
                  <div className="form-row my-2">
                    <div className="col-sm-6">
                      Username:
                      <input
                        readOnly
                        type="text"
                        name="username"
                        id="username"
                        className="form-control"
                        placeholder={this.state.items.name}
                      />
                    </div>
                    <div className="col-sm-6">
                      Address:
                      <input
                        readOnly
                        type="text"
                        name="address"
                        id="address"
                        placeholder={this.state.items.address}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-row my-2">
                    <div className="col-sm-6">
                      Email:
                      <input
                        readOnly
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder={this.state.items.email}
                      />
                    </div>
                    <div className="col-sm-6">
                      Username:
                      <input
                      readOnly
                            maxLength="10"
                            type="text"
                            name="phonenumber"
                            id="phonenumber"
                            placeholder={this.state.items.username}
                            className="form-control"
                    />
                    </div>
                    <div className="col-sm-6">
                      Category:
                      <input
                      readOnly
                            maxLength="10"
                            type="text"
                            name="phonenumber"
                            id="phonenumber"
                            placeholder={this.state.items.username}
                            className="form-control"
                    />
                    </div>
                    <div className="col-sm-6">
                      Subcategory:
                      <input
                      readOnly
                            maxLength="10"
                            type="text"
                            name="phonenumber"
                            id="phonenumber"
                            placeholder={this.state.items.username}
                            className="form-control"
                    />
                    </div>
                  </div>
                  <div className="">
                  <div>
                 {/* <div className='custom-control custom-switch'> */}
                  {/* <input
                    type='checkbox'
                    className='custom-control-input'
                    id='status'
                    readOnly
                  /> */}
                  {/* <label className='custom-control-label' htmlFor='status'> */}
                  <label>
                    Availabilty Status
                  </label>
                  </div> 
                  <Form>
                  <FormGroup onSubmit={this.handle}>
                    <select name="status" value={this.state.value} onChange={this.onChange} style={{width:'20%', height:'40px',borderRadius:'5px'}}>
                            <option value="true">Available</option>
                            <option value="false">Unavailable</option>
                    </select> 
                    <Button style={{ background:'#779A25', borderColor:'#779A25',marginLeft:'2%'}} type="Button" onClick={this.handle}>Set</Button>
                </FormGroup>
                </Form>

                  </div>
                </div>
                <div className="text-right">
                  <button
                    type="button"
                    id="editButton"
                    className="btn btn-secondary"
                    onClick={this.editform}
                    style={{ background:'#779A25', borderColor:'#779A25',marginRight:'2%'}}
                  >
                    Edit
                  </button>
                  <button type="button" className='btn btn-primary' style={{ background:'#779A25', borderColor:'#779A25'}}>Logout</button>
                  {/* <button type="submit" className="btn btn-dark">
                    Update Profile
                  </button>  */}
                </div>
              </form>
             }
          </div>
      </div>
    </div>
    );
  }
}

export default Profile
