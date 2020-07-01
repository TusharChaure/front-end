import React,{Component, useState, useRef} from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/js/dist/dropdown';
import Navbar from 'react-bootstrap/Navbar'
import { Button, Carousel} from 'react-bootstrap'
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaShoppingCart, FaUserCircle, FaSearchLocation } from 'react-icons/fa' 
import logo1 from './UI/logo1.png'
import Tab2 from './Tab2'
import Tab1 from './Tab1'
import Tab3 from './Tab3'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Maps from './Maps'
import Signup from './Signup'
import Signin from './Signin'
import Orders from './Orders'
import Account from './Account'
import Cart from './Cart'
import './Main.css'
import back1 from './UI/back1.PNG'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer'
import Modal from 'react-bootstrap/Modal'
import { FaCartArrowDown } from 'react-icons/fa'

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

                <Router>
                <Navbar collapseOnSelect expand="lg" className="navbar navbar-dark" style={{ marginTop:'8px',backgroundColor:'#04334F'}}>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{borderColor:'#FFFFFF'}}/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <a class="navbar-brand" href="#"><img className="logo" src={logo1} alt='logo' style={{width:'110px', padding:'1px', borderRadius:'10px' }}/></a>
                        </Nav>
                        
                        <Nav>
                        <ul className="navbar-nav mr-auto" >
                            <li><Link exact to={'/Maps'} className="nav-link text-dark "><b style={{color:'#FFFFFF'}}>Location</b></Link></li>
                            <li><Link exact to={'/Signin'} className="nav-link text-dark"><b style={{color:'#FFFFFF'}}>Login in</b></Link></li>
                            <li><Link exact to={'/Signup'} className="nav-link text-dark"><b style={{color:'#FFFFFF'}}>Register</b></Link></li>
                            <li><Link exact to={'/'} onClick={logOut.bind(this)} className="nav-link text-dark"><b style={{color:'#FFFFFF'}}>Logout</b></Link></li>
                            <li><Link exact to={'/'} className="nav-link text-dark"><b style={{color:'#FFFFFF'}}>Close</b></Link></li>
                        </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route path='/Maps' component={Maps} />
                    <Route path='/Signin' component={Signin} />
                    <Route path='/Signup' component={Signup} />
                    <Route path='/' />
                    <Route path='/' />
                </Switch>

                
                {/* <hr style={{ height:'5px',borderColor:'black' }}/> */}

                
                <Tabs>
                    <TabList style={{marginTop:'10px', fontFamily:'serif',color:'grey', height:'auto',width:'auto'}}>
                    <b>
                    <Tab style={{paddingRight:'3%', paddingLeft:'3%', paddingTop:'15px',paddingBottom:'15px'}}>Home</Tab>
                    <Tab style={{paddingRight:'3%', paddingLeft:'3%', paddingTop:'15px',paddingBottom:'15px'}}>Shop By</Tab>
                    <Tab style={{paddingRight:'3%', paddingLeft:'3%', paddingTop:'15px',paddingBottom:'15px'}}>Blog</Tab>
                    <Tab style={{paddingRight:'3%', paddingLeft:'3%', paddingTop:'15px',paddingBottom:'15px'}}>Your Account</Tab>
                    <Tab style={{paddingRight:'3%', paddingLeft:'3%', paddingTop:'15px',paddingBottom:'15px'}}>Contact Us</Tab>
                    <Tab style={{paddingRight:'3%', paddingLeft:'3%', paddingTop:'15px',paddingBottom:'15px'}}>Support</Tab>
                    {/* <Tab style={{paddingRight:'3%', paddingLeft:'3%', paddingTop:'15px',paddingBottom:'15px'}}>Cart</Tab> */}
                    <Tab style={{paddingRight:'3%', paddingLeft:'3%', paddingTop:'15px',paddingBottom:'15px'}}>Orders</Tab>
                    </b>
                    
                    <Button variant="secondary" style={{backgroundColor:'#04334F'}} onClick={() => setShow(true)}>
                        <FaCartArrowDown />
                    </Button>

                    <Modal
                        size="lg"
                        show={lgShow}
                        onHide={() => setShow(false)}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Cart
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <p>
                            <Cart />
                        </p>
                        </Modal.Body>
                    </Modal>
                    
                    </TabList>

                    
                
                    <TabPanel>
                        <Tab1 />
                    </TabPanel>

                    <TabPanel>
                        <div style={{border:'solid',borderRadius:'10px',marginTop:'30px', marginLeft:'2%',marginRight:'2%',paddingBottom:'30px',backgroundImage:`url(${back1})`}}>
                        <Tab2 />
                        </div>
                    </TabPanel>

                    <TabPanel>
                    
                    </TabPanel>

                    <TabPanel>
                        <div style={{border:'solid',marginTop:'30px',paddingBottom:'30px',backgroundImage:`url(${back1})`}}>
                            <Account />
                        </div>
                    </TabPanel>

                    <TabPanel>
                    
                    </TabPanel>

                    <TabPanel>
                    
                    </TabPanel>

                    {/* <TabPanel>
                        <Cart />
                    </TabPanel> */}

                    <TabPanel>
                        <div style={{border:'solid',marginTop:'30px',paddingBottom:'30px',backgroundImage:`url(${back1})`}}>
                            <Orders />
                        </div>
                    </TabPanel>
                </Tabs>
                
                
                </Router> 

                <Footer />      
  
            </div>
            
        )
        
    }




export default Main;