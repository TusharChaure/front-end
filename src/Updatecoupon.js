import React, { Component } from "react";
import axios from 'axios'
import { Button, Form, FormGroup, Label, Jumbotron, Input} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Adminlist5 from './Adminlist5'

class Updatecoupon extends Component {

  constructor(){
    super();
    this.state = {
      items: [],
      promo: '',
      price: '',
    } 
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  componentDidMount() {
        
    axios.get('http://165.22.208.232:5000/admin/getcoupons',
    // axios.get('admin/findall',
    {
        headers: {
          'auth-token': localStorage.usertoken
        }},
    )
     .then(res => {
         console.log(res)
         this.setState({items: res.data.data})
     })
}

  onSubmit(e){
    e.preventDefault()
    console.log("clicked");
        axios.put('http://165.22.208.232:5000/admin/updatecoupon',
         {
            "couponcode": this.state.promo,
            "price": this.state.price,
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

    const arr = this.state.items.map( (item, index) => {
	
        return <Adminlist5 
                 code={item.couponcode}
                 price={item.price}
                 off={item.off}	
            />
    
    } )

    return(

      <div>
        
        <div className="main-footer" style={{ marginTop:'0%', height:'auto', width:'auto' }}>
            <div className="container" style={{ height:'auto', width:'auto' }}>
                <div className="row" style={{ height:'auto', width:'auto'}}>
                   {arr} 
                </div> 
            </div>
        </div>
        <hr/>

        <div style={{marginRight:'10%', marginLeft:'10%', marginTop:'3%', border:'solid', borderRadius:'10px', padding:'5% 10%'}}>
                    
            <b> Update Coupons :</b> <br/>

            <Form style={{marginTop:'3%'}} onSubmit={this.onSubmit}>

            <FormGroup>

            <Label >Promo Code</Label>
            
            <Input type="text" name="promo" value={this.state.promo} onChange={this.onChange} required placeholder="Promo code" />
            
            </FormGroup>

            <FormGroup>

            <Label >Price</Label>
            
            <Input type="text" name="price" value={this.state.price} onChange={this.onChange} required placeholder="Price" />
            
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

export default Updatecoupon
