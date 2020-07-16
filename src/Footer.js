import React from 'react';
import { FaInstagram, FaWhatsapp, FaFacebookSquare } from 'react-icons/fa';
import girl from './UI/girl.jpg'
import back1 from './UI/back1.PNG'
import './Footer.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Footer() {

    return (

        


        <div className="main-footer" >

        {/* <div  className="body-content" style={{marginTop:'2%',marginLeft:'2%',marginRight:'2%', border:'solid',borderRadius:'10px',backgroundColor:'#F1EFEF'}}>
        <h4><b>Reviews</b></h4>
        <p>What our customers have to say about us....</p>
        <div className="row">
            {/* Column 1 */}
            {/* <div className="col-md-3 col-sm-6" style={{textAlign:'left'}}>
                <img src={girl} style={{width:'60%', height:'90%', marginLeft:'20%', marginTop:'0%', borderRadius:'50%'}} alt='personimage'/>
            </div>

             {/* Column 2 */}
             {/* <div className="col-lg-9" style={{textAlign:'left', marginTop:'3%', width:'auto', height:'auto'}}>
                    <h4 style={{paddingLeft:'3%',paddingRight:'3%'}}><i>"Home Chef is the platform that helped ,e in turning my passion into buisness without anyconsiderable investment. Thank you Home-Chef."</i></h4>
                    <h4 style={{paddingLeft:'3%',paddingRight:'3%'}}>- Sneha Parekh</h4>
             </div>

        </div>

        </div>   */}
        

        {/* <div style={{marginTop:'20px'}}>
        <p style={{backgroundColor:'#19075E', textDecorationColor:'#19075E'}}>1</p>
        </div>
        <div className="container">
        <div className="row" >
            {/* Column 1 */}
            {/* <div className="col-md-3 col-sm-6" style={{textAlign:'left'}}>
            <h4>Information</h4>
            <ul className="list-unstyled">
            <li><Link style={{color:'#000'}}>About Us</Link></li>
            <li><Link style={{color:'#000'}}>Team</Link></li>
            <li><Link style={{color:'#000'}}>Careers</Link></li>
            <li><Link style={{color:'#000'}}>Terms & Conditions</Link></li>
            <li><Link style={{color:'#000'}}>Contact Us</Link></li>
            </ul>
            </div> */}
            {/* Column 2 */}
            {/* <div className="col-md-3 col-sm-6" style={{textAlign:'left'}}>
            <h4>Contact</h4>
            <ul className="list-unstyled">
            <li><Link style={{color:'#000'}}>Help & Support</Link></li>
            <li><Link style={{color:'#000'}}>Partner with us</Link></li>
            <li><Link style={{color:'#000'}}>Ride with us</Link></li>
            </ul>
            </div>   */}
             {/* Column 2 */}
             {/* <div className="col-md-3 col-sm-6" style={{textAlign:'left'}}>
            <h4>Legal</h4>
            <ul className="list-unstyled">
            <li><Link style={{color:'#000'}}>Terms & Conditions</Link></li>
            <li><a href="./Document" style={{color:'#000'}}>Privacy Policy</a></li>
            <li><a href="./Document2" style={{color:'#000'}}>Cookie Policy</a></li>
            <li><Link style={{color:'#000'}}>Offer Terms</Link></li>
            </ul>
            </div>   */}
            { /* Column 3 */}
            {/* <div className="col-md-3 col-sm-6" style={{textAlign:'left'}}>
            <h4>Yes we are social</h4>
            <ul className="list-unstyled">
            <FaInstagram size='2rem' className="FaInstagram" />
            <FaWhatsapp size='2rem' style={{marginLeft:'10%'}} className="FaWhatsapp"/>
            <FaFacebookSquare size='2rem' style={{marginLeft:'10%'}} className="FaFacebookSquare"/>
            </ul>
            </div>   
        </div>

        <div className="footer-bottom" >
                <p className="text-xs-center">
                    <b>&copy;{ new Date().getFullYear() } - HomeChef | Erfinden Technologies Pvt.Ltd.</b>
                </p>
        </div>

        </div>      */}

        <div style={{backgroundColor:'black', paddingTop:'3%'}}>
        <div className="container" >
        <div className="row" >
            {/* Column 1 */}
            <div className="col-md-3 col-sm-6" style={{textAlign:'left'}}>
            <h4 style={{color:'#FFF'}}>Get in touch</h4>
            <ul className="list-unstyled">
            <li><a href="https://www.google.com/maps/place/InnoBytes+Technologies+Pvt.+Ltd./@18.5959315,73.7846031,15z/data=!4m5!3m4!1s0x0:0xe4d90616b4c3c20d!8m2!3d18.5959315!4d73.7846031" style={{color:'#FFF'}}><b>Address :</b></a></li>
            <li><a href="https://www.google.com/maps/place/InnoBytes+Technologies+Pvt.+Ltd./@18.5959315,73.7846031,15z/data=!4m5!3m4!1s0x0:0xe4d90616b4c3c20d!8m2!3d18.5959315!4d73.7846031" style={{color:'#FFF'}}>InnoBytes Technologies Pvt. Ltd. Row House No. C-101, SwapnaShilp, Five Gardens Soc., Near Jagtap Dairy, Near Balaji Tyres Pune, Maharashtra, 411017 India</a></li>
            </ul>
            </div>
            {/* Column 2 */}
            <div className="col-md-3 col-sm-6" style={{textAlign:'left'}}>
            <h4 style={{color:'#FFF'}}>Contact</h4>
            <p style={{color:'#FFF'}}><b>Phone :</b> +91 8999825013</p>
            <p style={{color:'#FFF'}}><b>Phone :</b> +91 8806087800</p>
            <a href="mailto:info@innobytes.in" style={{color:'#FFF'}}><b>Email :</b> info@innobytes.in</a>
            </div> 
            {/* <div style={{background:'white', height:'25%', borderLeft:'2px white solid', position:'absolute', right:'53%'}}></div> 
            <div style={{background:'white', height:'25%', borderLeft:'2px white solid', position:'absolute', right:'35%'}}></div>  */}
             {/* Column 2 */}
             <div className="col-md-3 col-sm-6" style={{textAlign:'left'}}>
            <h4 style={{color:'#FFF'}}>Quick Links</h4>
            <ul className="list-unstyled">
            <li><a href="" style={{color:'#FFF'}}>Home</a></li>
            <li><a href="" style={{color:'#FFF'}}>Shop By</a></li>
            <li><a href="" style={{color:'#FFF'}}>About Us</a></li>
            <li><a href="" style={{color:'#FFF'}}>My Orders</a></li>
            <li><a href="" style={{color:'#FFF'}}>Contact Us</a></li>
            <li><a href="" style={{color:'#FFF'}}>FAQ</a></li>
            </ul>
            </div>  
            { /* Column 3 */}
            <div className="col-md-3 col-sm-6" style={{textAlign:'left'}}>
            <h4 style={{color:'#FFF', marginBottom:'8%'}}>Yes we are social</h4>
            <ul className="list-unstyled">
            <a style={{color:'pink'}} href="https://www.instagram.com/homechefsco/?igshid=ly58xylygs3t" ><FaInstagram size='2rem' className="FaInstagram" /></a>
            <a style={{color:'pink'}} href="" ><FaWhatsapp size='2rem' style={{marginLeft:'10%'}} className="FaWhatsapp"/></a>
            <a style={{color:'pink'}} href="https://www.facebook.com/homeschef" ><FaFacebookSquare size='2rem' style={{marginLeft:'10%'}} className="FaFacebookSquare"/></a>
            </ul>
            </div>   
        </div>
        <hr style={{color:'#FFF', border:'solid', borderWidth:'1px'}}/>
        <div className="footer-bottom" style={{paddingBottom:'5%', paddingTop:'1%'}}>
                <p className="text-xs-center" style={{color:'#FFF', textAlign:'left',float:'left'}}>
                    <b>&copy;{ new Date().getFullYear() } - HomeChef | Erfinden Technologies Pvt.Ltd.</b>
                </p>
                <p className="text-xs-center" style={{color:'#FFF', textAlign:'right',float:'right'}}>
                    <a href="./Document" style={{color:'#FFF'}}>Terms & Conditions</a> 
                </p>
        </div>

        </div>
        </div>
        </div>
        
        
    )
}

export default Footer;