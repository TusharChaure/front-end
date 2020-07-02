import React from 'react';
import drinks from './drinks.jpg'
import './Body.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'


function Adminlist3 (props)  {

    function handleClick() {
        console.log('Button click ...');
        console.log(props._id) 

        axios.delete(`http://165.22.208.232:5000/admin/serviceboy/delete/${props._id}`, {
        // axios.get(`admin/serviceboy/delete/${props._id}`, {
            headers: {
              'auth-token': localStorage.usertoken
            }})
         .then(res => {
             if(res.data.status==true){
                toast("Account Deleted", {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
                window.location.reload(1000); 
                }
                else if(res.data.status==false){
                    // alert(res.data.error)
                    toast(res.data.error, {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
                } 
         })
    }

    return (   
                
                <div className="item col-md-4 col-sm-8" style={{textAlign:'left', border:'solid', marginRight:'2%', marginTop:'2%',marginBottom:'2%', paddingTop:'3%', borderRadius:'10px', backgroundColor:'white'}}>    
                    <p><b>ID : </b>{props._id}</p>
                    <p><b>Username : </b>{props.username}</p>
                    <p><b>Name : </b>{props.name}</p>
                    <p><b>Address : </b>{props.address}</p>
                    <p><b>Phone : </b>{props.phone}</p>
                    <p><b>Email : </b>{props.email}</p>
                    <p><button className='btn btn-primary' type="button" onClick={handleClick}  variant="primary" style={{borderRadius:'10px',width:'auto',height:'auto', marginLeft:'30%',background:'#779A25', borderColor:'#779A25'}}>Remove Account</button></p> 
                </div>  

    )   
    
    }

export default Adminlist3;