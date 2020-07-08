import React, {Component} from 'react'
import Table from 'react-bootstrap/Table'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import mp7 from './pics/indian/mp1.jpg'

class Popup extends Component { 

     render() {
   
     return (

        <div className="re" style={{border:'solid',borderColor:'white'}}>
        <hr style={{border:'solid', borderWidth:'1px', borderColor:'#9C9C9B'}}/>
        <div className="row" style={{marginLeft:'0.5%', marginTop:'1%',marginRight:'0.5%',marginBottom:'15%'}}>
        <div className="col-md-4 col-sm-8" style={{ margin:'2% 1%' }}>
            <img src={mp7} style={{width:'95%', height:'auto', padding:'1%'}}/>
        </div>
        <div className="col-md-4 col-sm-8" style={{border:'solid', margin:'2% 1%', borderWidth:'1px', borderColor:'#9C9C9B'}}>
            <p style={{ padding:'3%', textAlign:'left'}}><b>Pav Bhaji</b></p>
            <hr style={{border:'solid', borderWidth:'0.5px', borderColor:'#000'}}/>
            <p><b>Description :</b></p>
            <p>Lunch Dish</p>
            <p><b>Quantity :</b></p>
        </div>
        </div>
        </div>
     )
     }
 }
  

 export default Popup;
