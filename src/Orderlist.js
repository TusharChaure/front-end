import React from 'react';
import Productlist from './Productlist'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap';
import './Orderlist.css'
import Table from 'react-bootstrap/Table'

function Orderlist (props)  {
    
    return (   
                
                // <div className="item" style={{border:'solid', marginRight:'1.5%', marginLeft:'1.5%', marginTop:'2%', paddingTop:'3%', borderRadius:'10px', backgroundColor:'white'}}>
                //     <Route>
                //     <p><b>Order Id : {props.id1}</b></p>
                //     <p><b>Category : {props.id2}</b></p>
                //     <p><b>Total Cost : {props.id6}</b></p>
                //     <p><b>Payment Type : {props.id7}</b></p>
                //     <Nav >
                //     <p ><Link exact to={'/Productlist'} className="nav-link "><b>details</b></Link></p>
                //     <p ><Link exact to={'/'} className="nav-link text-dark"><b>Close</b></Link></p>
                //     </Nav>
                //     <Switch>
                //     <Route path='/Productlist' component={Productlist} />
                //     <Route path='/' />
                      
                //     </Switch>
                //     </Route>
                // </div>  

                <div className="col-md-13 col-sm-26" style={{border:'solid', margin:'2% 1%', borderWidth:'1px', borderColor:'#9C9C9B'}}>
                <Table >
                 <tbody style={{width:'90%'}}>
                     <tr style={{width:'90%'}}>
                     <td style={{width:'22.5%', padding:'1%'}}><a style={{color:'black'}} href="#">{props.id1}</a></td>
                     <td style={{width:'22.5%', padding:'1%'}}>{props.id2}</td>
                     <td style={{width:'22.5%', padding:'1%'}}>Rs.{props.id6}</td>
                     <td style={{width:'22.5%', padding:'1%'}}>{props.id7}</td>
                     </tr>
                 </tbody>
                 </Table> 
                </div>
                

    )   
    
    }

export default Orderlist;

