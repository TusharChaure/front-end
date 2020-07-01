import React, { Component } from "react";
import axios from 'axios'
import { Button, Form, FormGroup, Label, Jumbotron, Input} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';

class Additems extends Component {

  constructor(){
    super();
    this.state = {
      itemId: '',
      catogaryName:'',
      subcatogaryName:'',
      description: '',
      price: '',
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
        // axios.put('http://localhost:5000/admin/addProduct',
        axios.put('admin/addProduct',
         {
            "itemId": this.state.itemId,
            "catogaryName": this.state.catogaryName,
            "subcatogaryName": this.state.subcatogaryName,
            "description": this.state.description,
            "price": this.state.price
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
    
      <div style={{  border:'solid', borderRadius:'10px', width:'100%',paddingLeft:'20%', paddingRight:'20%', paddingBottom:'8%' }}>
      <div style={{ marginTop:'3%'}}>
          
            <b> Add Items :</b> <br/>

              <Form style={{ marginTop:'3%' }} onSubmit={this.onSubmit}>
 
                <FormGroup>
      
              <Label >Item</Label>
              
              <Input type="text" name="itemId" value={this.state.itemId} onChange={this.onChange} required placeholder="item name" />
              
              </FormGroup> 
            
              <FormGroup>
              
              <Label >Category</Label>
              
              <Input type="text" name="catogaryName" value={this.state.catogaryName} onChange={this.onChange} required placeholder="Catogary name" />

              </FormGroup>

              <FormGroup>
              
              <Label >Sub-Category</Label>
              
              <Input type="text" name="subcatogaryName" value={this.state.subcatogaryName} onChange={this.onChange} required placeholder="Subcatogary name" />

              </FormGroup>

              <FormGroup>
    
              <Label >Description</Label>
              
              <Input type="text" name="description" value={this.state.description} onChange={this.onChange} required placeholder="description" />
              
              </FormGroup>
              
              <FormGroup>
    
              <Label >Price</Label>
              
              <Input type="text" name="price" value={this.state.price} onChange={this.onChange} required placeholder="Item price" />
              
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
