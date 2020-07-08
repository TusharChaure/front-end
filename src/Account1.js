import React, {Component} from 'react' 
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-web-tabs/dist/react-web-tabs.css';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import demo from './UI/demo.jpg'
import Account from './Account'
import Account2 from './Account2'
import Address from './Address'

class Account1 extends Component {
    

    logOut(e){
        toast.configure()
        e.preventDefault()
        localStorage.removeItem('usertoken')
        // alert("Logout!!")
        toast("Logout!!", {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
        this.props.history.push("/")
    }

    render() {   
        
        return (
            <div>
                
                <hr style={{border:'solid', borderWidth:'1px'}}/>
    
            <Tabs defaultTab="vertical-tab-one" vertical >
          
                <TabList style={{marginTop:'50px', width:'auto'}}>
                    
                    <img src={demo} alt='logo' style={{width:'250px', height:'250px', borderRadius:'50%', padding:'8% 8%' }}/>
                    <p>Profile Section</p>
                    <Tab tabFor="vertical-tab-one" style={{ textAlign:'center', padding:'5%', margin:'8% 0' }}>User Info</Tab>
                    <Tab tabFor="vertical-tab-two" style={{ marginTop:'20px', textAlign:'center', padding:'8% 5%', margin:'8% 0' }}>Address</Tab>
                    <Tab tabFor="vertical-tab-three" style={{ marginTop:'20px',textAlign:'center', padding:'8% 5%', margin:'8% 0' }}>Update Profile</Tab> 
                    {/* <p > <button type="button" className='btn btn-primary' style={{ background:'#779A25', width:'80%', margin:'1%', borderColor:'#779A25'}}>Login</button></p> */}
                    <p style={{marginTop:'3%'}}> <button type="button" onClick={this.logOut.bind(this)} className='btn btn-primary' style={{ background:'#779A25', width:'80%', margin:'1%', borderColor:'#779A25'}}>Logout</button></p>
                           
                </TabList>
                

                
                <TabPanel tabId="vertical-tab-one" style={{marginTop:'60px',marginLeft:'1%'}}>
                    <Account /> 
                </TabPanel>
                
                <TabPanel tabId="vertical-tab-two" style={{marginTop:'60px',marginLeft:'1%'}}>
                    <Address /> 
                </TabPanel>
        
                <TabPanel tabId="vertical-tab-three" style={{marginTop:'60px',marginLeft:'1%'}}>
                    <Account2 />
                </TabPanel>

                <TabPanel tabId="vertical-tab-four" style={{marginTop:'60px',marginLeft:'1%'}}>
                
                </TabPanel>

                <TabPanel tabId="vertical-tab-five" style={{marginTop:'60px',marginLeft:'1%'}}>
                    
                    
                </TabPanel>

            </Tabs> 

            </div>
           
        )
    }
    
}
    



export default Account1;