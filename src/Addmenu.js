import React, { Component } from "react";
import axios from 'axios'
import { Button, Form, FormGroup, Label, Jumbotron, Input} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';

class Addmenu extends Component {
  // state={
  //   isLoading: true,
  //   dataNew:{
  //       username:"Srushti",
  //       address:"pune",
  //       email:"s@gmail.com",
  //       phonenumber:"7896541230",
  //   },
// };

  constructor(){
    super();
    this.state = {
      items: [],
      catogaryName:'Indian',
      subcatogaryName:'North',
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
        axios.put('http://165.22.208.232:5000/homechef/menu/additems',
        //  axios.put('homechef/menu/additems',
         {
            "catogaryName": this.state.catogaryName,
            "subcatogaryName": this.state.subcatogaryName,
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
      <div style={{marginRight:'20%', marginLeft:'20%', marginTop:'3%'}}>
          
            <b> Menu Cooked :</b> <br/>

              <Form style={{marginTop:'3%'}} onSubmit={this.onSubmit}>
 
              {/* <FormGroup>
      
              <Label >Item</Label>
              
              <Input type="text" name="itemId" value={this.state.itemId} onChange={this.onChange} required placeholder="item name" />
              
              </FormGroup> */}
            
              <FormGroup>
              
              <Label >Category</Label>
              
              <br />
              <select name="catogaryName" value={this.state.value} onChange={this.onChange} style={{width:'100%', height:'40px',borderRadius:'5px'}}>
                      <option value="Indian">Indian</option>
                      <option value="Chinese">chinese</option>
                      <option value="Italian">Italian</option>
                      <option value="Mexican">Mexican</option>
                      <option value="Thai">Thai</option>
              </select>

              </FormGroup>

              <FormGroup>
              
              <Label >Sub-Category</Label>
              
              {/* <Input type="text" name="status" value={this.state.status} onChange={this.onChange} required placeholder="Enter a password" />  */}
              <br />
              <select name="subcatogaryName" value={this.state.value} onChange={this.onChange} style={{width:'100%', height:'40px',borderRadius:'5px'}}>
                      <option value="Maharastrian">Maharastrian</option>
                      <option value="North Indian">North Indian</option>
                      <option value="South Indian">South Indian</option>
                      <option value="Rajasthani">Rajasthani</option>
                      <option value="Street food">Street food</option>
                      <option value="Mughlai">Mughlai</option>
                      <option value="Bengali">Bengali</option>
                      <option value="Biryani">Biryani</option>
                      <option value="Gujarati">Gujarati</option>
              </select>

              </FormGroup>

             
              
              {/* <FormGroup>
    
              <Label >Price</Label>
              
              <Input type="text" name="price" value={this.state.price} onChange={this.onChange} required placeholder="Item price" />
              
              </FormGroup>  */}

              <div className="d-flex justify-content-center mt-3 login_container">
              
              <Button style={{ background:'#779A25', borderColor:'#779A25'}} type="submit" className="btn btn-primary">Submit</Button>
              
              </div>
              
              </Form>
          </div>
    
    );
  }
}

export default Addmenu
