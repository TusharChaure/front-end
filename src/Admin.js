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

export default class Admin extends Component{

    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        // alert("Logout!!")
        toast("Logout!!", {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
        this.props.history.push("/")   
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

                </Tabs>
                </div>

                </Router>      


  
            </div>
            
        )
    }
}

