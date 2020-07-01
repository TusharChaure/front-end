import React, {Component} from 'react' 
import axios from 'axios'
import Orderlist from './Orderlist'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Table from 'react-bootstrap/Table'

class Orders extends Component {
    
    constructor(){
        super();
        this.state = {
            orders: [],

        }
    }


    componentDidMount() {   
        
        toast.configure()
        // axios.get('http://localhost:5000/users/orders', {
        axios.get('users/orders', {
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
    
    render() {
        
        const arr = this.state.orders.map( (order, index) => {
	
            return <Orderlist 
                     id1={order._id}
                     id2={order.catogary}
                     id6={order.totalCost}
                     id7={order.paymentType}
                />
        
        } )
        
        return (

            <div>
            <hr style={{border:'solid', borderWidth:'1px', borderColor:'#9C9C9B'}}/>
            <div className="main-footer" style={{ marginTop:'3%', height:'auto', width:'auto' }}>
            <div className="" style={{ height:'auto', width:'auto', borderRadius:'10px' }}>
                <h5>Past Orders :</h5>
                <div style={{marginTop:'3%', height:'auto', width:'auto'}}>
                    <div className="col-md-13 col-sm-26" style={{border:'solid', margin:'2% 1%', borderWidth:'1px', borderColor:'#9C9C9B'}}>
                   <Table >
                    <thead>
                        <tr style={{width:'90%'}}>
                        <th style={{width:'22.5%', padding:'1%'}}><b>OrderId</b></th>
                        <th style={{width:'22.5%', padding:'1%'}}><b>Category</b></th>
                        <th style={{width:'22.5%', padding:'1%'}}><b>Amount</b></th>
                        <th style={{width:'22.5%', padding:'1%'}}><b>payment Type</b></th>
                        </tr>
                    </thead>
                    </Table> 
                    {arr}
                   </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}
    



export default Orders;