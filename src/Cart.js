import React, {Component} from 'react'
import axios from 'axios'
import Cartlist from './Cartlist'
import Cartlist1 from './Cartlist1'
import Table from 'react-bootstrap/Table'
import back1 from './UI/back1.PNG'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import mp7 from './pics/indian/mp1.jpg'
import { Button, Form, FormGroup, Label, Jumbotron, Input} from 'reactstrap';


class Cart extends Component { 

    constructor(){
        super();
        this.state = {
            coupon: [],
            code:''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
     
     onChange(e){
        this.setState({[e.target.name]: e.target.value})
     }

     onSubmit(e){
        e.preventDefault()

    //     // toast("Promo code applied", {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
    
    //     //     toast("Try another promo code!!", {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
   
            console.log(this.state.code)
            localStorage.setItem("promo", this.state.code)
            for( let i=0; i<this.state.coupon.length; i++){
                if(this.state.coupon[i].couponcode == this.state.code){
                    localStorage.amount = localStorage.amount - localStorage.amount*(this.state.coupon[i].off/100)  
                    console.log(localStorage.amount)
                    toast("Promo code applied", {position: toast.POSITION.TOP_CENTER, autoClose: 1000})
                }   
            }
            this.props.history.push('./')
            window.location.reload(1000);
     }

     handleClick() {
        console.log('Button click ...');
        localStorage.removeItem("items");
        localStorage.removeItem("category")
        localStorage.removeItem("total")
        localStorage.removeItem("amount")
        this.props.history.push('./')
        window.location.reload(1000);
      }

      componentDidMount() {
        console.log(localStorage.amount);
        axios.post('http://165.22.208.232:5000/users/getcoupons',
        // axios.post('users/getcoupons',
        {
            "price": localStorage.amount,
         },
        {
            headers: {
              'auth-token': localStorage.usertoken
           }},
        
            )
            .then(res => {
                console.log(res.data)
                this.setState({coupon: res.data})     
            })
             .catch(err => {
                toast(err, {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
             })
      
      }

    //   handle1() {
    //     console.log(localStorage.amount)
    //     // if(localStorage.amount>100){
    //     // localStorage.amount = localStorage.amount - localStorage.amount*(25/100)
    //     // console.log(localStorage.amount)
    //     // toast("Promo code applied", {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
    //     // }
    //     // else{
    //     //     toast("Try another promo code!!", {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
    //     // }
    //     // for( const i=0; i<this.state.coupon.length; i++){
            
    //     // }
    //     console.log(this.state.code)
      
    //     }

     handle() {
        console.log("clicked");
        axios.post('http://165.22.208.232:5000/order/add',
        // axios.post('order/add',
         {
            "catogary": localStorage.category,
            "subcatogary": localStorage.subcategory,
            "product": JSON.parse(localStorage.getItem('items')),
            "paymentType": "cash",
            "totalCost": localStorage.total,
            "discountprice": localStorage.amount,
            "couponcode": localStorage.promo    
         },
         {
             headers: {
               'auth-token': localStorage.usertoken
             }},
             )
             .then(res => {
                 if(res.data.status==true){
                    toast(res.data.data, {position: toast.POSITION.TOP_CENTER});
                    var interval = setInterval(
                        function()
                        {  
                                console.log(res.data.redirect);
                                axios.get(res.data.redirect)
                                .then(res => {
                                    if(res.data.status==true){
                                       clearInterval(interval);
                                       console.log(res.data.data)
                                    }
                                })
                                .catch(err => {
                                    console.log("err")
                                })
                        }, 30000);
                 }
                 else{
                    toast(res.data.error, {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
                 }
             })
             .catch(err => {
                toast("Login First!!", {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
             })
       }

   

     render() {
        toast.configure()
        let arr
        if(localStorage.getItem('items')==undefined){
            // alert('cart is empty!!');
            // toast("Cart is empty!!", {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
        }
        else
        {
            arr = JSON.parse(localStorage.getItem('items')).map( (item, i) => {
	
                return <Cartlist 
                         id={item.itemid}
                         cat={item.quantity}
                         price={item.totalprice} 
                    />
           
            } )
        }

        const ar = this.state.coupon.map( (it, index) => {
	
            return <Cartlist1
                     couponcode={it.couponcode}
                     price={it.price}
                     off={it.off}
                />
        
        } )

        const popover = (
            <Popover id="popover-basic" size="md" >
              <Popover.Title as="h3">Available Offers</Popover.Title>
              <Popover.Content>
                    <div>
                        <Table >
                         <tbody>
                        <tr>
                        <td><b>Code</b></td>
                        <td><b>Price</b></td>
                        <td><b>Off</b></td>
                        </tr>
                         </tbody>
                        </Table>
                        {ar}
                    </div>
              </Popover.Content>
            </Popover>
          );
        
        
        

     return (
        
        
        // <div className="re" style={{border:'solid',borderColor:'white'}}>
        //  <div style={{marginLeft:'0.5%', marginTop:'1%',marginRight:'0.5%',marginBottom:'15%'}}>
        
         
        //  <div style={{border:'solid', borderRadius:'10px',marginLeft:'0.5%',marginRight:'0.5%', backgroundColor:'white'}}>
        //     <Table >
        //          <thead>
        //              <tr style={{width:'90%'}}>
        //              <th style={{width:'30%',textAlign:'center'}}>Item</th>
        //              <th style={{width:'30%',textAlign:'center'}}>quantity</th>
        //              <th style={{width:'30%',textAlign:'center'}}>Price</th>
        //              </tr>
        //          </thead>
        //     </Table>
        //     {arr}
        //     <p style={{textAlign:'right', marginRight:'15%'}}><b>Total Amount : {localStorage.amount}</b></p> 
        //  </div>
        //  <div style={{marginLeft:'5%',marginRight:'5%',marginTop:'3%', marginBottom:'18%'}}>
        //  <p><button type="button" className='btn btn-primary' onClick={this.handle} variant="secondary" style={{float:'right', borderRadius:'10px'}}>Place Order</button> <button className='btn btn-primary' type="button" onClick={this.handleClick} variant="secondary" style={{float:'right', borderRadius:'10px', marginRight:'0.5%'}}>Remove</button> <OverlayTrigger trigger="click" placement="left" overlay={popover}><button type="button" className='btn btn-primary'  variant="secondary" style={{float:'right', borderRadius:'10px', marginRight:'0.5%'}}>Promo Code</button></OverlayTrigger></p>
        //  </div>
        //  </div>
        //  </div>

        <div className="re" style={{border:'solid',borderColor:'white'}}>
        <hr style={{border:'solid', borderWidth:'1px', borderColor:'#9C9C9B'}}/>
        <h5 style={{textAlign:'center'}}>Cart</h5>
        <div className="row" style={{marginLeft:'0.5%', marginTop:'1%',marginRight:'0.5%',marginBottom:'15%'}}>
        {/* <div style={{border:'solid', borderRadius:'10px',marginLeft:'0.5%',marginRight:'0.5%', backgroundColor:'white'}}> */}
        <div className="item1 col-md-7 col-sm-14" style={{border:'solid', margin:'2% 1%', borderWidth:'1px', borderColor:'#9C9C9B'}}>
           {/* <Table >
                 <tbody>
                     <tr style={{width:'90%'}}>
                     <img src={mp7} style={{width:'70%', height:'auto', padding:'5%'}}/>
                     <td style={{width:'22.5%', padding:'8%'}}><b>Misal Pav</b></td>
                     <td style={{width:'22.5%', padding:'8%', color:'green'}}><b>5</b></td>
                     <td style={{width:'22.5%', padding:'8%'}}><b>Rs.500</b></td>
                     </tr>
                     <tr style={{width:'90%'}}>
                     <img src={mp7} style={{width:'70%', height:'auto', padding:'5%'}}/>
                     <td style={{width:'22.5%', padding:'8%'}}><b>Misal Pav</b></td>
                     <td style={{width:'22.5%', padding:'8%', color:'green'}}><b>5</b></td>
                     <td style={{width:'22.5%', padding:'8%'}}><b>Rs.250</b></td>
                     </tr>
                     <tr style={{width:'90%'}}>
                     <img src={mp7} style={{width:'70%', height:'auto', padding:'5%'}}/>
                     <td style={{width:'22.5%', padding:'8%'}}><b>Misal Pav</b></td>
                     <td style={{width:'22.5%', padding:'8%', color:'green'}}><b>5</b></td>
                     <td style={{width:'22.5%', padding:'8%'}}><b>Rs.250</b></td>
                     </tr>
                 </tbody>
           </Table> */}
            {arr}
           {/* <p style={{textAlign:'right', marginRight:'15%'}}><b>Total Amount : {localStorage.amount}</b></p>  */}
        </div>
        <div className="item1 col-md-4 col-sm-8" style={{border:'solid', margin:'2% 1%', borderWidth:'1px', borderColor:'#9C9C9B'}}>
            <p style={{ padding:'3%', textAlign:'left'}}>Order Summary</p>
            <hr style={{border:'solid', borderWidth:'0.5px', borderColor:'#000'}}/>
            <Table >
                <tbody>
                    <tr style={{width:'90%'}}>
                    <td style={{width:'30%',textAlign:'left'}}>Items</td>
                    <td style={{width:'30%',textAlign:'left', color:'green'}}>Rs.{localStorage.amount}</td>
                    </tr>
                    <tr style={{width:'90%'}}>
                    <td style={{width:'30%',textAlign:'left'}}>Shipping</td>
                    <td style={{width:'30%',textAlign:'left', color:'green'}}>Rs.0</td>
                    </tr>
                    <tr style={{width:'90%'}}>
                    <td style={{width:'30%',textAlign:'left'}}>Promo Code</td>
                    <td style={{width:'30%',textAlign:'left', color:'green'}}><Form onSubmit={this.onSubmit}><input style={{marginBottom:'3%'}} type="text" name="code" value={this.state.code} onChange={this.onChange} /> <OverlayTrigger trigger="click" placement="left" overlay={popover}><button type="button" className='btn btn-primary' variant="secondary" style={{ marginLeft:'0%', background:'#779A25', borderColor:'#779A25'}}>Offers</button></OverlayTrigger> <button type="submit" className='btn btn-primary' variant="secondary" style={{ marginLeft:'0%', background:'#779A25', borderColor:'#779A25'}} onClick={this.handle1}>Apply</button> <button type="button" className='btn btn-primary' variant="secondary" style={{ marginLeft:'0%', background:'#779A25', borderColor:'#779A25'}} onClick={this.handleClick}>Remove</button></Form></td>
                    </tr>
                    <tr style={{width:'90%'}}>
                    <td style={{width:'30%',textAlign:'left'}}></td>
                    <td style={{width:'30%',textAlign:'left'}}></td>
                    </tr>
                    <tr style={{width:'90%'}}>
                    <td style={{width:'30%',textAlign:'left'}}>Total Amount</td>
                    <td style={{width:'30%',textAlign:'left', color:'green'}}>Rs.{localStorage.amount}</td>
                    </tr>
                </tbody>
            </Table>
                    <button type="button" className='btn btn-primary' onClick={this.handle} style={{ background:'#779A25', width:'80%', margin:'1%', borderColor:'#779A25'}}>Place Order</button> 
                    <button className='btn btn-primary' type="button" onClick={this.handleClick} variant="secondary" style={{ background:'#779A25', width:'80%', margin:'2%', marginBottom:'5%', borderColor:'#779A25'}}>Remove</button>
        </div>
        </div>
        </div>
     )
     }
 }
  

 export default Cart;
