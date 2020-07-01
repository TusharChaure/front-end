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
import Profile from './Profile'
import ActiveOrders from './ActiveOrders'
import IncomeOrders from './IncomeOrders'
import PastOrders from './PastOrders'
import Financials from './Financials';
import Analytics from './Analytics';
import Addmenu from './Addmenu'
import { ToastContainer, toast } from 'react-toastify';
import Footer from './Footer'

export default class Main1 extends Component{

    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        // alert("Logout!!")
        toast("Logout!!", {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
        this.props.history.push(`/`)   
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
                            <li><Link exact to={'/Maps'} className="nav-link text-dark"><b style={{color:'#FFFFFF'}}>Location</b></Link></li>
                            <li><Link exact to={'/Signin'} className="nav-link text-dark"><b style={{color:'#FFFFFF'}}>Login in</b></Link></li>
                            <li><Link exact to={'/'} onClick={this.logOut.bind(this)} className="nav-link text-dark"><b style={{color:'#FFFFFF'}}>Logout</b></Link></li>
                            <li><Link exact to={'/'} className="nav-link text-dark"><b style={{color:'#FFFFFF'}}>Close</b></Link></li>
                        </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route path='/Maps' component={Maps} />
                    <Route path='/Signin' component={Signin} />
                    <Route path='/' />
                    <Route path='/' />
                </Switch> */}

                
                <hr style={{ height:'5px',borderColor:'black' }}/>

               
                <Tabs defaultTab="vertical-tab-one">
                    <TabList style={{marginTop:'10px', fontFamily:'serif',color:'grey', height:'auto',width:'auto'}}>
                    <b>
                    <Tab tabFor="vertical-tab-one" style={{paddingRight:'3%', paddingLeft:'3%', paddingTop:'15px',paddingBottom:'15px'}}>Profile</Tab>
                    <Tab tabFor="vertical-tab-two" style={{paddingRight:'3%', paddingLeft:'3%', paddingTop:'15px',paddingBottom:'15px'}}>Add Menu</Tab>
                    <Tab tabFor="vertical-tab-three" style={{paddingRight:'3%', paddingLeft:'3%', paddingTop:'15px',paddingBottom:'15px'}}>Active Orders</Tab>
                    <Tab tabFor="vertical-tab-four" style={{paddingRight:'3%', paddingLeft:'3%', paddingTop:'15px',paddingBottom:'15px'}}>Past Orders</Tab>
                    <Tab tabFor="vertical-tab-five" style={{paddingRight:'3%', paddingLeft:'3%', paddingTop:'15px',paddingBottom:'15px'}}>Financials</Tab>
                    <Tab tabFor="vertical-tab-six" style={{paddingRight:'3%', paddingLeft:'3%', paddingTop:'15px',paddingBottom:'15px'}}>Analytics</Tab>
                    </b>
                    </TabList>

                    
                
                    <TabPanel tabId="vertical-tab-one">
                        <div style={{border:'solid',borderRadius:'10px',marginTop:'30px', marginLeft:'15%',marginRight:'15%',marginBottom:'5%', paddingBottom:'30px',boxShadow:'5px 5px rgb(167,167,167)'}}> 
                            <Profile />
                        </div>
                    </TabPanel>

                    <TabPanel tabId="vertical-tab-two">
                        <div style={{border:'solid',borderRadius:'10px',marginTop:'30px', marginLeft:'10%',marginRight:'10%',paddingBottom:'30px',marginBottom:'5%',boxShadow:'5px 5px rgb(167,167,167)'}}>
                           <Addmenu />
                        </div>
                    </TabPanel>

                    <TabPanel tabId="vertical-tab-three">
                        <div style={{border:'solid',borderRadius:'10px',marginTop:'30px', marginLeft:'10%',marginRight:'10%',marginBottom:'5%',paddingBottom:'30px',boxShadow:'5px 5px rgb(167,167,167)'}}>
                            <ActiveOrders />
                        </div>
                    </TabPanel>

                    <TabPanel tabId="vertical-tab-four">
                    <div style={{border:'solid',borderRadius:'10px',marginTop:'30px', marginLeft:'10%',marginRight:'10%',paddingBottom:'30px',marginBottom:'5%',boxShadow:'5px 5px rgb(167,167,167)'}}>
                    <PastOrders />
                   </div>
                    </TabPanel>

                    <TabPanel tabId="vertical-tab-five">
                    <div style={{border:'solid',borderRadius:'10px',marginTop:'30px', marginLeft:'10%',marginRight:'10%',paddingBottom:'30px',marginBottom:'5%',boxShadow:'5px 5px rgb(167,167,167)'}}>
                    <Financials/>
                    </div>
                    </TabPanel>

                    <TabPanel tabId="vertical-tab-six">
                    <div style={{border:'solid',borderRadius:'10px',marginTop:'30px', marginLeft:'10%',marginRight:'10%',paddingBottom:'30px',marginBottom:'5%',boxShadow:'5px 5px rgb(167,167,167)'}}>
                    <Analytics/>
                    </div>
                    </TabPanel>

                    <TabPanel>
                    </TabPanel>
                </Tabs>
                
 
                
                </Router>      
  
            </div>
            
        )
    }
}

