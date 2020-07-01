import React from 'react'
import 'react-web-tabs/dist/react-web-tabs.css';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import Vtab1 from './Vtab1'
import Vtab2 from './Vtab2'
import Vtab3 from './Vtab3'
import Vtab4 from './Vtab4'
import Vtab5 from './Vtab5'



class Tab2 extends React.Component{
  render(){
  return(
      <div>
          <hr style={{border:'solid', borderWidth:'1px'}}/>
    
      <Tabs defaultTab="vertical-tab-one" >
          
          <TabList style={{ width:'auto'}}>
            
              <Tab tabFor="vertical-tab-one" style={{ textAlign:'left', color:'red' }}><b>Indian</b></Tab>
              <Tab tabFor="vertical-tab-two" style={{ marginTop:'20px', textAlign:'left' }}><b>Chinese</b></Tab>
              <Tab tabFor="vertical-tab-three" style={{ marginTop:'20px', textAlign:'left' }}><b>Italian</b></Tab>
              <Tab tabFor="vertical-tab-four" style={{ marginTop:'20px',textAlign:'left' }}><b>Mexican</b></Tab>
              <Tab tabFor="vertical-tab-five" style={{ marginTop:'20px', textAlign:'left' }}><b>Thai</b></Tab>
              
          </TabList>
        

          
          <TabPanel tabId="vertical-tab-one" style={{marginTop:'60px',marginLeft:'1%'}}>
            <Vtab1 />
          </TabPanel>
          
          <TabPanel tabId="vertical-tab-two" style={{marginTop:'60px',marginLeft:'1%'}}>
             <Vtab2 />
          </TabPanel>
  
          <TabPanel tabId="vertical-tab-three" style={{marginTop:'60px',marginLeft:'1%'}}>
              <Vtab3 />
          </TabPanel>

          <TabPanel tabId="vertical-tab-four" style={{marginTop:'60px',marginLeft:'1%'}}>
              <Vtab4 />
          </TabPanel>

          <TabPanel tabId="vertical-tab-five" style={{marginTop:'60px',marginLeft:'1%'}}>
              <Vtab5 />
              
          </TabPanel>

      </Tabs>


                {/* <Router>
                
                <Navbar collapseOnSelect expand="lg" className="navbar navbar-dark" style={{ backgroundColor:'white'}}>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ borderColor:'grey'}}/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav style={{marginLeft:'35%'}}>
                        <ul className="navbar-nav mr-auto">
                            <li ><a href="/Vtab1" className="nav-link text-dark "><b style={{color:'red'}}>Indian</b></a></li>
                            <li style={{marginLeft:'10%'}}><a href="/Vtab2" className="nav-link text-dark"><b style={{color:'black'}}>Chinese</b></a></li>
                            <li style={{marginLeft:'10%'}}><a href="/Vtab3" className="nav-link text-dark"><b style={{color:'black'}}>Italian</b></a></li>
                            <li style={{marginLeft:'10%'}}><a href="/Vtab4" className="nav-link text-dark"><b style={{color:'black'}}>Mexican</b></a></li>
                            <li style={{marginLeft:'10%'}}><a href="/Vtab5" className="nav-link text-dark"><b style={{color:'black'}}>Thai</b></a></li>
                        </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Switch>
                    <Route exact path='/Vtab1' component={Vtab1} />
                    <Route path='/Vtab2' />
                    <Route path='/Vtab3' />
                    <Route path='/Vtab4' />
                    <Route path='/Vtab5' />
                </Switch> 
                </Router> 
            <Vtab1 /> */}

      </div>
      );
  }
  }

export default Tab2;