import React, { Component } from "react";
import axios from 'axios'
import { Button, Form, FormGroup, Label, Jumbotron, Input} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';

class Coupons extends Component {

  constructor(){
    super();
    this.state = {
      promo: '',
      price: '',
      off: ''
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
        axios.put('http://165.22.208.232/admin/addcoupon',
         {
            "couponcode": this.state.promo,
            "price": this.state.price,
            "off": this.state.off
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
                 console.log("err")
             })
  }

  

  render(){
    return(

      <div>
      <div style={{marginRight:'10%', marginLeft:'10%', marginTop:'3%', border:'solid', borderRadius:'10px', padding:'5% 10%'}}>
          
            <b> Discount Coupons :</b> <br/>

              <Form style={{marginTop:'3%'}} onSubmit={this.onSubmit}>
 
              <FormGroup>
      
              <Label >Promo Code</Label>
              
              <Input type="text" name="promo" value={this.state.promo} onChange={this.onChange} required placeholder="Promo code" />
              
              </FormGroup>

              <FormGroup>
    
              <Label >Price</Label>
              
              <Input type="text" name="price" value={this.state.price} onChange={this.onChange} required placeholder="Price" />
              
              </FormGroup>
              
              <FormGroup>
    
              <Label >Off</Label>
              
              <Input type="text" name="off" value={this.state.off} onChange={this.onChange} required placeholder="Off Percentage" />
              
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

export default Coupons
