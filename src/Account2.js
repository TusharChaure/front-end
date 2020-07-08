import React, { Component } from "react";
import axios from 'axios'
import { Button, Form, FormGroup, Label, Jumbotron, Input} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';

class Additems extends Component {

  constructor(){
    super();
    this.state = {
        name:'',
        address:'',
        phone:'',
        username:'',
        email:'' 
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit(e){
    e.preventDefault()
    console.log("clicked");
        axios.put('http://165.22.208.232:5000/admin/addProduct',
        // axios.put('admin/addProduct',
         {
            "name": this.state.name,
            "address": this.state.address,
            "phone": this.state.phone,
            "username": this.state.username,
            "email": this.state.email
         },
         {
             headers: {
               'auth-token': localStorage.usertoken
             }},
             )
             .then(res => {
                 if(res.data.status==true){
                    // alert(res.data.data)
                    toast(res.data.data, {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
                 }
                 else{
                    //  alert(res.data.error)
                    toast(res.data.error, {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
                 }
             })
             .catch(err => {
                 console.log(err)
             })
  }

  

  render(){
    return(
    
      <div className="col-lg-10 col-sm-20" style={{ paddingBottom:'8%',width:'300%' }}>
      <div className="col-lg-10 col-sm-20" style={{ marginTop:'3%',width:'300%'}}>
          
            <b> Update Profile :</b> <br/>

              <Form style={{ marginTop:'3%' ,width:'300%', textAlign:'left', color:'green'}} onSubmit={this.onSubmit}>
 
                <FormGroup>
      
              <Label >Name</Label>
              
              <Input type="text" name="name" value={this.state.name} onChange={this.onChange} required placeholder="Name" />
              
              </FormGroup> 
            
              <FormGroup>
              
              <Label >Username</Label>
              
              <Input type="text" name="username" value={this.state.username} onChange={this.onChange} required placeholder="Username" />

              </FormGroup>

              <FormGroup>
              
              <Label >Address</Label>
              
              <Input type="text" name="address" value={this.state.Address} onChange={this.onChange} required placeholder="Address" />

              </FormGroup>

              <FormGroup>
    
              <Label >Phone</Label>
              
              <Input type="text" name="phone" value={this.state.phone} onChange={this.onChange} required placeholder="phone" />
              
              </FormGroup>
              
              <FormGroup>
    
              <Label >Email</Label>
              
              <Input type="text" name="email" value={this.state.email} onChange={this.onChange} required placeholder="E-mail" />
              
              </FormGroup> 

              <div className="d-flex justify-content-center mt-3 login_container">
              
              <Button style={{ background:'#779A25', borderColor:'#779A25'}} type="submit" className="btn btn-primary">Submit</Button>
              
              </div>
              
              </Form>
          </div>
          </div>
    
    );
  }
}

export default Additems
