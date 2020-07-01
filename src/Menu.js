import React, {Component} from 'react'
import Adminlist1 from './Adminlist1' 
import axios from 'axios'
import { Button, Form, FormGroup, Label, Jumbotron, Input} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Menu extends Component {
    
    constructor(){
        super();
        this.state = {
            items: [],
            itemId: '',
            price: 0
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
      }
    
      onSubmit(e){
        e.preventDefault()
       
             console.log(this.state.itemId);
             console.log(this.state.price)
            //  axios.put('http://localhost:5000/admin/change/price',
             axios.put('admin/change/price',
             {
                "itemId": this.state.itemId,
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
                        toast('Price Updated', {position: toast.POSITION.TOP_CENTER});
                        window.location.reload(1000);
                     }
                     else{
                        //  alert(res.data.error)
                        toast('Got some error', {position: toast.POSITION.TOP_CENTER});
                     }
                 })
                 .catch(err => {
                     console.log("err")
                 })
      }

    componentDidMount() {
        
        // axios.get('http://localhost:5000/admin/findall',
        axios.get('admin/findall',
        {
            headers: {
              'auth-token': localStorage.usertoken
            }},
        )
         .then(res => {
             console.log(res)
             this.setState({items: res.data})
         })
    }
    
    render() {
        
        const arr = this.state.items.map( (item, index) => {
	
            return <Adminlist1 
                     _id={item._id}
                     itemId={item.itemId}
                     catogaryName={item.catogaryName}
                     subcategaryName={item.subcatogaryName}
                     price={item.price} 	
                />
        
        } )
        
        return (

            <div>
            {/* <h3 style={{marginTop:'2%'}}>Menu List</h3><br /> */}
            <div className="main-footer" style={{ marginTop:'0%', height:'auto', width:'auto' }}>
            <div className="container" style={{ height:'auto', width:'auto' }}>
                <div className="row" style={{ height:'auto', width:'auto'}}>
                   {arr} 
                </div> 
            </div>
            </div>
            <hr/>
            <div style={{ border:'solid', paddingBottom:'3%',paddingLeft:'3%', paddingRight:'3%', paddingTop:'3%', borderRadius:'10px', marginLeft:'2%',marginRight:'2%', marginTop:'3%', marginBottom:'3%' }}>
            <h3>Update Dish Price</h3><hr />
            <div style={{marginRight:'20%', marginLeft:'20%', marginTop:'3%'}}>
            <Form style={{marginTop:'3%'}} onSubmit={this.onSubmit}>
            <FormGroup >
            <Label >Dish Name</Label><hr />
            <Input type="text" name="itemId" value={this.state.itemId} onChange={this.onChange} required placeholder="Enter Dish name" />
            </FormGroup>      
            <FormGroup>
            <Label >New Price</Label>
            <Input type="number" id="price" name="price" required placeholder="Enter Amount" onChange={this.onChange}/>
            </FormGroup>
            <div className="d-flex justify-content-center mt-3 login_container">
            <Button type="submit" style={{ background:'#779A25', borderColor:'#779A25'}} className="btn btn-primary">Update</Button>      
            </div>      
            </Form>
            </div>
            </div>
            </div>
        )
    }
}
    



export default Menu;