import React, { Component } from "react";
import axios from 'axios'
import { Button, Form, FormGroup, Label, Jumbotron, Input} from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap';
import Product from './Product'
import Product1 from './Product1'
import Product2 from './Product2'
import { ToastContainer, toast } from 'react-toastify';

class ActiveOrders extends Component {

constructor(props) {
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = { //state is by default an object
        orders: [],
        status: "accepted",
        _id:""
    }
    this.onChange = this.onChange.bind(this)
    this.handle1 = this.handle1.bind(this)
    this.handle2 = this.handle2.bind(this)
    this.handle3 = this.handle3.bind(this)
 }
 
 componentDidMount() {   
        
  toast.configure()
  axios.get('http://165.22.208.232/homechef/orders/active', {
  // axios.get('homechef/orders/active', {
      headers: {
        'auth-token': localStorage.usertoken
      }})
   .then(res => { 
       if(res.data.status==true){
          this.setState({orders: res.data.data})
          }
          else if(res.data.status==false){
              // alert("Login First");
              toast("Login First!!", {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
          } 
   })
   .catch(err => {
      // alert("Login First!!")
      toast("Login First!!", {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
  })
}

onChange(e) {
  this.setState({ [e.target.name]: e.target.value})
}

handle1(e) {
  console.log(this.state.status);
  console.log(this.state.orders._id);
  console.log(localStorage.id0);
  console.log("clicked");
  axios.put(`http://165.22.208.232/homechef/orderstatus/${this.state.status}/${localStorage.id0}`,{},
  // axios.put(`homechef/orderstatus/${this.state.status}/${localStorage.id0}`,{},
        {
            headers: {
              'auth-token': localStorage.usertoken
            }},
            )
            .then(res => {
                if(res.data.status==true){
                  //  alert(res.data.data)
                   toast(res.data.data, {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
                }
                else{
                    // alert(res.data.error)
                    toast(res.data.error, {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
                }
            })
            .catch(err => {
                console.log("err")
                toast(err, {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
            })

}

handle2(e) {
  console.log(this.state.status);
  console.log(this.state.orders._id);
  console.log(localStorage.id1);
  console.log("clicked");
  axios.put(`http://165.22.208.232/homechef/orderstatus/${this.state.status}/${localStorage.id1}`,{},
  // axios.put(`homechef/orderstatus/${this.state.status}/${localStorage.id1}`,{},
        {
            headers: {
              'auth-token': localStorage.usertoken
            }},
            )
            .then(res => {
                if(res.data.status==true){
                  //  alert(res.data.data)
                   toast(res.data.data, {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
                }
                else{
                    // alert(res.data.error)
                    toast(res.data.error, {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
                }
            })
            .catch(err => {
                console.log("err")
                toast(err, {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
            })

}

handle3(e) {
  console.log(this.state.status);
  console.log(this.state.orders._id);
  console.log(localStorage.id2);
  console.log("clicked");
  axios.put(`http://165.22.208.232/homechef/orderstatus/${this.state.status}/${localStorage.id2}`,{},
  // axios.put(`homechef/orderstatus/${this.state.status}/${localStorage.id2}`,{},
        {
            headers: {
              'auth-token': localStorage.usertoken
            }},
            )
            .then(res => {
                if(res.data.status==true){
                  //  alert(res.data.data)
                   toast(res.data.data, {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
                }
                else{
                    // alert(res.data.error)
                    toast(res.data.error, {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
                }
            })
            .catch(err => {
                console.log("err")
                toast(err, {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
            })

}
 
 renderTableData() {
    return this.state.orders.map((order, index) => {
       const { _id, catogary, subcatogary,paymentType,totalCost,discountprice,serviceboyid } = order //destructuring
       if(index==0){      
       return (

         <tr key={index}>
         <td>{_id}
         <Nav >
         <p ><Link exact to={'/Product'} className="nav-link "><b>details</b></Link></p>
         <p ><Link exact to={'/'} className="nav-link text-dark"><b>Close</b></Link></p>
         </Nav>
         </td>
         <td>{catogary}</td>
         <td>{subcatogary}</td>
         <td>{paymentType}</td>
         <td>{totalCost}</td>
         <td>{discountprice}</td>
         <td>{serviceboyid}</td>
         <td>
         {localStorage.setItem("id0",_id)}
         <Form >
           {/* <label>
             status
             <Select value={this.state.vaue} onChange={this.state.handleChange}>
              <option value="accepted"></option>
              <option value="preparing"></option>
              <option value="dispatch"></option>
              <option value="rejected"></option>
             </Select>
           </label> */}

        <FormGroup onSubmit={this.handle1}>
            
            {/* <Input type="text" name="status" value={this.state.status} onChange={this.onChange} required placeholder="Enter a password" />  */}
            <select name="status" value={this.state.value} onChange={this.onChange} style={{width:'100%', height:'40px',borderRadius:'5px'}}>
                    <option value="accepted">Accepted</option>
                    <option value="dispatched">Dispatch</option>
                    <option value="rejected">Rejected</option>
            </select>
        </FormGroup>
         </Form>
        
         </td>
         <td><Button type="Button" style={{ background:'#779A25', borderColor:'#779A25'}} onClick={this.handle1}>Set</Button></td>
         </tr>
         
       )}
       else if(index==1){      
        return (
 
          <tr key={index}>
          <td>{_id}
          <Nav >
          <p ><Link exact to={'/Product1'} className="nav-link "><b>details</b></Link></p>
          <p ><Link exact to={'/'} className="nav-link text-dark"><b>Close</b></Link></p>
          </Nav>
          </td>
          <td>{catogary}</td>
          <td>{subcatogary}</td>
          <td>{paymentType}</td>
          <td>{totalCost}</td>
          <td>{discountprice}</td>
          <td>{serviceboyid}</td>
          <td>
          {localStorage.setItem("id1",_id)}
          <Form >
            {/* <label>
              status
              <Select value={this.state.vaue} onChange={this.state.handleChange}>
               <option value="accepted"></option>
               <option value="preparing"></option>
               <option value="dispatch"></option>
               <option value="rejected"></option>
              </Select>
            </label> */}
 
         <FormGroup onSubmit={this.handle2}>
             
             {/* <Input type="text" name="status" value={this.state.status} onChange={this.onChange} required placeholder="Enter a password" />  */}
             <select name="status" value={this.state.value} onChange={this.onChange} style={{width:'100%', height:'40px',borderRadius:'5px'}}>
                     <option value="accepted">Accepted</option>
                     <option value="dispatched">Dispatch</option>
                     <option value="rejected">Rejected</option>
             </select>
         </FormGroup>
          </Form>
         
          </td>
          <td><Button style={{ background:'#779A25', borderColor:'#779A25'}} type="Button" onClick={this.handle2}>Set</Button></td>
          </tr>
           
        )}
        else if(index==2){      
          return (
   
            <tr key={index}>
            <td>{_id}
            <Nav >
            <p ><Link exact to={'/Product2'} className="nav-link "><b>details</b></Link></p>
            <p ><Link exact to={'/'} className="nav-link text-dark"><b>Close</b></Link></p>
            </Nav>
            </td>
            <td>{catogary}</td>
            <td>{subcatogary}</td>
            <td>{paymentType}</td>
            <td>{totalCost}</td>
            <td>{discountprice}</td>
            <td>{serviceboyid}</td>
            <td>
            {localStorage.setItem("id2",_id)}
            <Form >
   
           <FormGroup onSubmit={this.handle3}>
               <select name="status" value={this.state.value} onChange={this.onChange} style={{width:'100%', height:'40px',borderRadius:'5px'}}>
                       <option value="accepted">Accepted</option>
                       <option value="dispatched">Dispatch</option>
                       <option value="rejected">Rejected</option>
               </select>
           </FormGroup>
            </Form>
           
            </td>
            <td><Button type="Button" style={{ background:'#779A25', borderColor:'#779A25'}} onClick={this.handle3}>Set</Button></td>
            </tr>
             
          )}
    })
 }
  render(){
    return(
      <div>
      <div>
      {/* <ExpenseCards/> */}
        </div>
    
        <div className="table-responsive-md" >
        <table className="table table-hover">
        <thead className="">
          <tr>
            <th scope="col">OrderId</th>
            <th scope="col">Category</th>
            <th scope="col">Subcategory</th>
            <th scope="col">Payment Type</th>
            <th scope="col">Total-Amount</th>
            <th scope="col">Discount-Amount</th>
            <th scope="col">Service Boy Id</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
        {this.renderTableData()}
        </tbody>
      </table>
         <Route>
          <Switch>
            <Route path='/Product' component={Product} />
            <Route path='/' />
            </Switch>  
         </Route>
         <Route>
          <Switch>
            <Route path='/Product1' component={Product1} />
            <Route path='/' />
            </Switch>  
         </Route>
         <Route>
          <Switch>
            <Route path='/Product2' component={Product2} />
            <Route path='/' />
            </Switch>  
         </Route>
        </div>
        </div>
    );
  }
}

export default ActiveOrders
