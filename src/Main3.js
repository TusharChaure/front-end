import React,{Component, useState, useRef} from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/js/dist/dropdown';
import Navbar from 'react-bootstrap/Navbar'
import { Button, Carousel} from 'react-bootstrap'
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { FaShoppingCart, FaUserCircle, FaSearchLocation } from 'react-icons/fa' 
import logo2 from './UI/logo2.png'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-bootstrap/Modal'
import { FaCartArrowDown } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import { FaRegUser } from 'react-icons/fa'
import pic from './UI/pic.png'
import home from './UI/home.jpg'
import Body from './Body'
import Footer from './Footer'
import Tab2 from './Tab2'
import Maps from './Maps'
import Main4 from './newui/Main4'
import Vtab1 from './Vtab1'
import Orders from './Orders'
import Cart from './Cart'
import Account1 from './Account1'
import Signin from './Signin'
import Signup from './Signup'
import { GrLogin } from "react-icons/gr";
import { GoLocation } from "react-icons/go";
import { FiLogOut } from "react-icons/fi";
import { FaRegRegistered } from 'react-icons/fa'
import Admin from './Admin'
import Main1 from './Main1'

function Main3 (){

    const [lgShow, setShow] = useState(false)
    
    function logOut(e){
        toast.configure()
        e.preventDefault()
        localStorage.removeItem('usertoken')
        // alert("Logout!!")
        toast("Logout!!", {position: toast.POSITION.TOP_CENTER, autoClose: 1000});

    }
        
        return (  
            
            <div>
                
                <Router>
                
                <Navbar collapseOnSelect expand="lg" className="navbar navbar-dark" style={{ backgroundColor:'white'}}>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ borderColor:'grey'}}/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <a class="navbar-brand" href="#"><img className="logo" src={logo2} alt='logo' style={{width:'150px', height:'100px' }}/></a>
                        </Nav>
                        <div>
                        <div>
                        <Nav>
                        <ul className="navbar-nav mr-auto" style={{marginLeft:'62%'}}>
                            <li ><Link onClick={() => setShow(true)} className="nav-link text-dark "><GoLocation/></Link></li>
                            <li ><Link to="/Account1" className="nav-link text-dark"><FaRegUser /></Link></li>
                            <li ><Link to="/Cart" className="nav-link text-dark"><FaCartArrowDown /></Link></li>
                            <li ><Link to="/Signin" className="nav-link text-dark "><GrLogin /></Link></li>
                            <li ><Link to="/Signup" className="nav-link text-dark "><FaRegRegistered /></Link></li>
                            <li ><Link to="/" onClick={logOut.bind(this)} className="nav-link text-dark "><FiLogOut /></Link></li>
                        </ul>
                        </Nav>
                        </div>
                        <div>
                        <Nav>
                        <ul className="navbar-nav mr-auto" >
                            <li><Link to="/" className="nav-link text-dark "><b style={{color:'#779A25'}}>Home</b></Link></li>
                            <li ><Link to="/Tab2" className="nav-link text-dark"><b style={{color:'black'}}>Shop by</b></Link></li>
                            <li><Link to="/Orders" className="nav-link text-dark"><b style={{color:'black'}}>My Orders</b></Link></li>
                            <li><Link to="/" className="nav-link text-dark"><b style={{color:'black'}}>Products</b></Link></li>
                            <li><Link to="/" className="nav-link text-dark"><b style={{color:'black'}}>About Us</b></Link></li>
                            <li><Link to={'/'} className="nav-link text-dark"><b style={{color:'black'}}>Contact Us</b></Link></li>
                        </ul>
                        </Nav>

                        <Modal
                        size="sm"
                        show={lgShow}
                        onHide={() => setShow(false)}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                        >
                        <Modal.Body>
                            <Maps />
                        </Modal.Body>
                        </Modal>

                        </div>
                        </div>
                    </Navbar.Collapse>
                </Navbar>

                <Switch>
                    <Route path='/Maps' component={Maps}/>
                    <Route path='/Account1' component={Account1} />
                    <Route path='/Cart' component={Cart} />
                    <Route path='/Signin' component={Signin} />
                    <Route path='/Signup' component={Signup} />
                    <Route exact path='/' component={Main4}/>
                    <Route path='/Tab2' component={Tab2} />
                    <Route path='/Orders' component={Orders}/>
                    <Route path='/Admin' component={Admin}/>
                    <Route path='/Main1' component={Main1}/>
                    <Route path='/' />
                    <Route path='/' />
                    <Route path='/Cart' component={Cart} />
                </Switch> 
                </Router> 

                

                  
                {/* <img src={pic} alt='logo' style={{width:'100%', height:'auto'}}/>   */}

                {/* <div className="" style={{ height:'auto', width:'auto',float:'center' }}>
                <div className="row">
                    <div  style={{width:'40%',float:'left'}}>
                        <img src={chef} alt='logo' style={{width:'100%',height:'90%', float:'left',padding:'5% 10%'}}/>
                    </div>
                    <div style={{width:'50%', float:'right', textAlign:'left'}}>
                        <h3 style={{color:'#779A25', marginTop:'15%'}}>About Us</h3>
                        <p>Home-Chef is a platform which enables patrons to have homemade food from homemakers who want to spread their magic from kitchen. The sheer purpose of this platform is unleash the entrepreneur within women. Patrons have an opportunity to try out various secret recipes across India. </p>
                    </div>
                </div>
                </div> */}

                {/* <img src={pic1} alt='logo' style={{width:'100%', height:'auto'}}/>   */}

                
                </div>
            
        )
        
    }




export default Main3;