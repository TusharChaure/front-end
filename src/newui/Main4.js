import React,{Component, useState, useRef} from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/js/dist/dropdown';
import Navbar from 'react-bootstrap/Navbar'
import { Button, Carousel} from 'react-bootstrap'
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { FaShoppingCart, FaUserCircle, FaSearchLocation } from 'react-icons/fa' 
import logo1 from '../UI/logo1.png'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-bootstrap/Modal'
import { FaCartArrowDown } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import { FaRegUser } from 'react-icons/fa'
import pic from '../UI/pic.png'
import pic1 from '../UI/pic1.png'
import Body from '../Body'
import Footer from '../Footer'
import Tab2 from '../Tab2'
import key from '../UI/HomePage/key.png'
import Jumbotron from 'react-bootstrap/Jumbotron'
import home from '../UI/home.jpg'

function Main (){

    
    
    function logOut(e){
        toast.configure()
        e.preventDefault()
        localStorage.removeItem('usertoken')
        // alert("Logout!!")
        toast("Logout!!", {position: toast.POSITION.TOP_CENTER, autoClose: 1000});

    }

    
    const [lgShow, setShow] = useState(false);
        
        return (  
            
            <div>

                <Jumbotron style={{textAlign:'left', paddingLeft:'5%', backgroundImage:`url(${home})`,width:'100%', margin:'0%'}}>
                    <h1 style={{color:'white'}}>Tasty homemade Food Now at your Doorstep</h1>
                    <p style={{width:'60%', marginTop:'2%', color:'white'}}>
                        Home-Chef is a platform which enables patrons to have homemade food from homemakers who want to spread their magic from kitchen. The sheer purpose of this platform is unleash the entrepreneur within women. Patrons have an opportunity to try out various secret recipes across India.
                    </p>
                    <p style={{marginTop:'3%'}}>
                        <Button variant="primary" style={{backgroundImage:`url(${home})`, borderColor:'white'}}>Shop Now</Button>
                    </p>
                </Jumbotron> 
                {/* <img src={pic} alt='logo' style={{width:'100%', height:'auto'}}/>   */}

                <img src={key} alt='logo' style={{width:'100%', height:'auto',margin:'0%'}}/>

                <img src={pic1} alt='logo' style={{width:'100%', height:'auto'}}/>  
                  

                <Body />  
              
                </div>
            
        )
        
    }




export default Main;