import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/js/dist/dropdown';
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';
import 'react-web-tabs/dist/react-web-tabs.css';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import logo1 from './UI/logo1.png'
import Signin from './Signin'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Maps from './Maps'
import  './Main.css';
import { ToastContainer, toast } from 'react-toastify';
import { NavItem, Button} from 'react-bootstrap';
import Menu from './Menu'
import Homechef from './Homechef'
import Serviceboy from './Serviceboy'
import Activechefs from './Activechefs'
import Customer from './Customer'
import Activeboy from './Activeboy'
import Additems from './Additems';
import back1 from './UI/back1.PNG'
import { GrLogin } from "react-icons/gr";
import { GoLocation } from "react-icons/go";
import { FiLogOut } from "react-icons/fi";
import { FaRegRegistered } from 'react-icons/fa'
import { FaCartArrowDown } from 'react-icons/fa'
import { FaRegUser } from 'react-icons/fa'
import logo2 from './UI/logo2.png'
import Coupons from './Coupons'
import Updatecoupon from './Updatecoupon'

export default class Admin extends Component{

    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        // alert("Logout!!")
        toast("Logout!!", {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
        this.props.history.push("/") 
        window.location.reload(1000)  
    } 

    render(){

        return (  
            
            <div>
                <Router>
                {/* <Navbar collapseOnSelect expand="lg" className="navbar navbar-dark"  style={{ marginTop:'8px',backgroundColor:'#04334F'}}>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{borderColor:"#FFF"}} />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <a class="navbar-brand" href="#"><img className='logo' src={logo1} alt='logo' style={{width:'110px', padding:'1px', borderRadius:'10px'}}/></a>
                        </Nav>
                        
                        <Nav>
                        <ul className="navbar-nav mr-auto">
                            <li><Link exact to={'/'} onClick={this.logOut.bind(this)} className="nav-link text-dark"><b style={{color:'#FFFFFF'}}>Logout</b></Link></li>
                        </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route path='/' />
                </Switch> */}


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
                        <ul className="navbar-nav mr-auto" style={{marginLeft:'75%'}}>
                            <li ><Link className="nav-link text-dark "><GoLocation/></Link></li>
                            <li ><Link to="/Account1" className="nav-link text-dark"><FaRegUser /></Link></li>
                            <li ><Link to="/Cart" className="nav-link text-dark"><FaCartArrowDown /></Link></li>
                            {/* <li ><Link to="/Signin" className="nav-link text-dark "><GrLogin /></Link></li> */}
                            <li ><Link to="/" onClick={this.logOut.bind(this)} className="nav-link text-dark "><FiLogOut /></Link></li>
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

                        {/* <Modal
                        size="sm"
                        show={lgShow}
                        onHide={() => setShow(false)}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                        >
                        <Modal.Body>
                            <Maps />
                        </Modal.Body>
                        </Modal> */}

                        </div>
                        </div>
                    </Navbar.Collapse>
                </Navbar>

                
                <hr style={{ height:'5px',borderColor:'black' }}/>

                <div>
    
                <Tabs defaultTab="vertical-tab-one" >
                    
                    <TabList style={{marginTop:'50px', width:'auto'}}>
                    
                        {/* <Tab tabFor="vertical-tab-one" style={{ textAlign:'left' }}><b>Main</b></Tab> */}
                        <Tab tabFor="vertical-tab-one" style={{ marginTop:'20px', textAlign:'left' }}><b>Menu </b></Tab>
                        <Tab tabFor="vertical-tab-two" style={{ marginTop:'20px',textAlign:'left' }}><b>Homechef</b></Tab>
                        <Tab tabFor="vertical-tab-three" style={{ marginTop:'20px', textAlign:'left' }}><b>Delivery Partner</b></Tab>
                        <Tab tabFor="vertical-tab-four" style={{ marginTop:'20px', textAlign:'left' }}><b>Customers</b></Tab>
                        <Tab tabFor="vertical-tab-five" style={{ marginTop:'20px', textAlign:'left' }}><b>Active chefs</b></Tab>
                        <Tab tabFor="vertical-tab-six" style={{ marginTop:'20px', textAlign:'left' }}><b>Active Delivery Partner</b></Tab>
                        <Tab tabFor="vertical-tab-seven" style={{ marginTop:'20px', textAlign:'left' }}><b>Add items</b></Tab>
                        <Tab tabFor="vertical-tab-eight" style={{ marginTop:'20px', textAlign:'left' }}><b>Discount Coupons</b></Tab>
                        <Tab tabFor="vertical-tab-nine" style={{ marginTop:'20px', textAlign:'left' }}><b>Add Coupons</b></Tab>
                    </TabList>
                    

                    
                    {/* <TabPanel tabId="vertical-tab-one" style={{marginTop:'60px',marginLeft:'1%'}}>
                        <div style={{border:'solid',borderRadius:'10px',marginTop:'2%',marginRight:'2%',paddingBottom:'5%',backgroundImage:`url(${back1})`,width:'1020%', height:'100%'}}>
                            <p style={{color:'white', textAlign:'center', paddingTop:'20%'}}><b >Admin Dashboard</b></p>
                        </div>
                    </TabPanel> */}
            
                    <TabPanel tabId="vertical-tab-one" style={{marginTop:'60px'}}>
                        <Menu /> 
                    </TabPanel>

                    <TabPanel tabId="vertical-tab-two" style={{marginTop:'60px'}}>
                        <Homechef />
                    </TabPanel>

                    <TabPanel tabId="vertical-tab-three" style={{marginTop:'60px'}}>
                        <Serviceboy />     
                    </TabPanel>

                    <TabPanel tabId="vertical-tab-four" style={{marginTop:'60px'}}>
                        <Customer />     
                    </TabPanel>

                    <TabPanel tabId="vertical-tab-five" style={{marginTop:'60px'}}>
                        <Activechefs />     
                    </TabPanel>

                    <TabPanel tabId="vertical-tab-six" style={{marginTop:'60px'}}>
                        <Activeboy /> 
                    </TabPanel>

                    <TabPanel tabId="vertical-tab-seven" style={{marginTop:'60px', margin:'5% 10%'}}>
                        <Additems /> 
                    </TabPanel>

                    <TabPanel tabId="vertical-tab-eight" style={{marginTop:'60px', margin:'5% 10%'}}>
                        <Updatecoupon /> 
                    </TabPanel>

                    <TabPanel tabId="vertical-tab-nine" style={{marginTop:'60px', margin:'5% 10%'}}>
                        <Coupons /> 
                    </TabPanel>

                </Tabs>
                </div>

                </Router>      


  
            </div>
            
        )
    }
}

