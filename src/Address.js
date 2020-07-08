import React, { Component } from "react";
import axios from 'axios'
import { Button, Form, FormGroup, Label, Jumbotron, Input} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';

class Additems extends Component {

  constructor(){
    super();
    this.state = {
        address:'',
        items: []
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    toast.configure()
    axios.get('http://165.22.208.232:5000/users/profile', {
    // axios.get('users/profile', {
        headers: {
          'auth-token': localStorage.usertoken
        }})
     .then(res => {
         console.log(res)
         console.log(res.data.data)
         if(res.data.status==true){
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

  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit(e){
    e.preventDefault()
    console.log("clicked");
        axios.put('http://165.22.208.232:5000/users/update/address',
        // axios.put('admin/addProduct',
         {
            "address": this.state.address,
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

      <div>

<div>
                <div >
                    <div style={{backgroundColor:'white',width:'300%'}}>
                        <hr style={{borderColor:'white'}}/>
                        <form id="form" onSubmit={this.handleSubmit}>
                            <hr style={{borderColor:'white'}}/>
                            <div className="col-lg-10 col-sm-20">
                            <p style={{textAlign:'left'}}><b >Current Address</b></p>
                                <div className="col-lg-10 col-sm-20" style={{color:'green', textAlign:'left'}}>
                                <p style={{}}>Address:</p>
                                <input
                                    readOnly
                                    type="text"
                                    name="address"
                                    id="address"
                                    placeholder={this.state.items.address}
                                    // placeholder="90909090"
                                    className="form-control"
                                    style={{backgroundColor:'white'}}
                                />
                                </div>
                            </div>
                        </form> 
                    </div>
                </div>
            </div>


    
      <div className="col-lg-10 col-sm-20" style={{ paddingBottom:'8%',width:'300%', marginTop:'20%' }}>
      <div className="col-lg-10 col-sm-20" style={{ marginTop:'3%',width:'300%'}}>
          
            <b> Update Address </b> <br/>

              <Form style={{ marginTop:'3%' ,width:'300%', textAlign:'left', color:'green'}} onSubmit={this.onSubmit}>

              <FormGroup>
              
              <Label >Address</Label>
              
              <Input type="text" name="address" value={this.state.address} onChange={this.onChange} required placeholder="Address" />

              </FormGroup>

              <div className="d-flex justify-content-center mt-3 login_container">
              
              <Button style={{ background:'#779A25', borderColor:'#779A25'}} type="submit" className="btn btn-primary">Submit</Button>
              
              </div>
              
              </Form>
          </div>
          </div>

    </div>
    
    );
  }
}

export default Additems
