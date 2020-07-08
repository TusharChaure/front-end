import React,{Component, useState, useRef} from 'react'
import drinks from './drinks.jpg'
import './Arraylist.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import mp5 from './pics/indian/mp5.jpg'
import mp7 from './pics/indian/mp0.jpg'
import { FaCartArrowDown } from 'react-icons/fa'
import StarRatings from 'react-star-ratings';
import StarRatingComponent from 'react-star-rating-component';
import Modal from 'react-bootstrap/Modal'
import Popup from './Popup'


const items = []

function Arraylis (props)  {
    
    var counter = 1
    let total = 0
        
    toast.configure()

    const [lgShow, setShow] = useState(false)

    function increment() {
          counter= counter + 1
          console.log(counter);
        //   alert("No of selected items"+ counter)
          toast(counter + " Items selected", {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
     
      }
    
    function onStarClick(nextValue, prevValue, name) {
      this.setState({rating: nextValue});
    }
    
    function decrement(){
          counter= counter - 1
          if(counter<1){
            counter=counter+1
            toast("min quantity is 1", {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
        }
        else{
          console.log(counter);
        //   alert("No of selected items"+ counter)
        toast(counter + " Items selected", {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
        }
    
      }
    
    function handleClick() {
        console.log('Button click ...');
        if( localStorage.getItem("category")  == undefined){
            localStorage.setItem('category',props.catogary)
            localStorage.setItem('subcategory',props.subcategaryName)
            const item = {
                "itemid":props.itemId,
                "quantity":counter,
                "totalprice":props.price, 
                "detailsifany":"no",
                "src":props.src
        }
        items.push(item);
        localStorage.setItem("items",JSON.stringify(items)) 
        // alert("item added to cart!!"); 
        toast("item added to cart!!", {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
        }
        else if( localStorage.getItem("category")==props.catogary){
            localStorage.setItem('subcategory',props.subcategaryName)
            let item = {
                "itemid":props.itemId,
                "quantity":counter,
                "totalprice":props.price, 
                "src":props.src,
                "detailsifany":"no"
        }
        items.push(item);
        localStorage.setItem("items",JSON.stringify(items)) 
        // alert("item added to cart!!");
        toast("item added to cart!!", {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
        } 
        else {
            // alert("First remove other category food from cart ")
            toast("First remove other category food from cart ", {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
        }

        total = JSON.parse(localStorage.getItem('items')).map( (item, i) => {return total=total+item.quantity*item.totalprice})
        console.log(total[total.length-1]);
        localStorage.setItem("total",total[total.length-1]) 
        localStorage.setItem("amount", localStorage.total)
    }

    return (   
                
                // <div className="item col-md-2 col-sm-4"  style={{border:'solid', marginRight:'1.5%', marginLeft:'1.5%', marginTop:'2%', borderRadius:'5%', backgroundColor:'#F1EFEF'}}>
                //     <img id={props.id} src={drinks} style={{width:'90%', height:'48%', marginTop:'12%', borderRadius:'5%'}}/>
                //     <p><b>{props.itemId}</b></p>
                //     <p><b>{props.subcategaryName}</b></p>
                //     <p>Rs.{props.price}   <button className='btn btn-primary' type="button" onClick = {increment}>+</button>  <button className='btn btn-primary' type="button" onClick = {decrement}> -- </button></p>
                //     <p><button className='btn btn-primary' type="button" onClick={handleClick}  variant="primary" style={{borderRadius:'10px',width:'auto',height:'auto'}}>Add To Cart</button></p> 
                // </div>
                
                // <div className="item row"  style={{border:'solid', marginRight:'1.5%', marginLeft:'1.5%', marginTop:'2%', borderRadius:'0%', backgroundColor:'#F1EFEF', width:'45%'}}>
                //     <img id={props.id} src={mp5} style={{width:'45%', height:'80%', marginTop:'5%',marginLeft:'5%',marginRight:'5%',marginBottom:'2%', borderRadius:'0%'}}/>
                //     <div style={{marginTop:'6%',marginLeft:'4%'}}>
                //     <p><b>{props.itemId}</b></p>
                //     <p><b>{props.subcategaryName}</b></p>
                //     <p>Rs.{props.price}   <button className='btn btn-primary' type="button" onClick = {increment}>+</button>  <button className='btn btn-primary' type="button" onClick = {decrement}> -- </button></p>
                //     <p><button className='btn btn-primary' type="button" onClick={handleClick}  variant="primary" style={{borderRadius:'10px',width:'auto',height:'auto'}}>Add To Cart</button></p> 
                //     </div>
                // </div>
                
                // <div className="item" style={{ width:'15%', height:'auto',padding:'0.5%', marginRight:'0.5%', marginLeft:'0.5%', marginTop:'2%'}}>
                // <div style={{backgroundColor:'white'}}>
                // <img src={mp7} style={{width:'100%', height:'70%'}}/>
                // <p style={{margin:'0%'}}><b>{props.itemId}</b></p>
                // <p style={{margin:'0%'}}>Rs.{props.price}</p>
                // </div>
                // <div style={{marginTop:'1%',padding:'2%', backgroundColor:'white'}}>
                // <button style={{width:'100%', color:'green',border:'white',backgroundColor:'white', margin:'0%'}}><FaCartArrowDown size="1rem" style={{paddingBottom:'1%',marginRight:'5%'}}/> Add To Cart</button>
                // </div>
                // </div>  

                <div className="col-md-2 col-sm-4" style={{ height:'auto',padding:'0.5%', marginRight:'0.5%', marginLeft:'0.5%'}}>
                <div className="item1" style={{backgroundColor:'white', border:'solid', borderWidth:'1px', borderColor:'#9C9C9B'}}>
                <img src={props.src} style={{width:'100%', height:'70%'}}/>
                <p style={{margin:'0%'}}><b>{props.itemId}</b></p>
                <p style={{margin:'0%'}}>Rs.{props.price}</p>
                <StarRatingComponent
                  style={{margin:'0%'}} 
                  name="rate1" 
                  starCount={5}
                  value={4}
                  onStarClick={onStarClick.bind(this)}
                  />
                </div>
                <div className="item1" style={{marginTop:'1%',padding:'2%', backgroundColor:'white', border:'solid', borderWidth:'1px', borderColor:'#9C9C9B'}}>
                <button onClick={() => setShow(true)} style={{padding:'1%' ,width:'100%', color:'green',border:'white',backgroundColor:'white', margin:'0%'}}><FaCartArrowDown size="1rem" style={{paddingBottom:'1%',marginRight:'5%'}}/> Add To Cart</button>
                
                <Modal
                  size="lg"
                  show={lgShow}
                  onHide={() => setShow(false)}
                  dialogClassName="modal-90w"
                  aria-labelledby="example-custom-modal-styling-title"
                >
                <Modal.Body>
                  <div className="re" style={{border:'solid',borderColor:'white', marginTop:'8%'}}>
                      <div className="row" style={{marginLeft:'0.5%', marginTop:'1%',marginRight:'0.5%',marginBottom:'15%'}}>
                        <div className="col-md-6 col-sm-12" style={{ margin:'2% 1%' }}>
                            <img src={props.src} style={{width:'90%', height:'auto', padding:'1%'}}/>
                        </div>
                        <div className="col-md-5 col-sm-10" style={{ margin:'2% 1%' }}>
                            <p style={{ padding:'3%', textAlign:'left'}}><b>{props.itemId}</b></p>
                              <hr style={{border:'solid', borderWidth:'0.5px', borderColor:'#000'}}/>
                            <p><b>Sub-categary : </b> {props.subcategaryName}</p>
                            <p><b>Description : </b> New Dish</p>
                            <p><b>Price per plate : </b> Rs.{props.price}</p>
                            <p><b>Quantity : <button className='btn btn-primary' style={{marginLeft:'5%', marginRight:'5%'}} type="button" onClick = {increment}>+</button> {  } <button className='btn btn-primary' type="button" onClick = {decrement}> -- </button></b></p>
                            <p><button className='btn btn-primary' type="button" onClick={handleClick}  variant="primary" style={{ height:'auto', float:'center', width:'90%'}}>Add To Cart</button></p>
                        </div>
                      </div>
                  </div>
                </Modal.Body>
                </Modal>
                </div><br/>
                </div>    

    )   
    
    }

export default Arraylis;