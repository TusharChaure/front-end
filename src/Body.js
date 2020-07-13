import React from 'react';
import drinks from './drinks.jpg'
import './Body.css'
import mp7 from './pics/indian/mp0.jpg'
import { FaCartArrowDown } from 'react-icons/fa'
import StarRatings from 'react-star-ratings';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
import demo from './UI/demo.jpg'
import './Body.css'
import { Carousel} from 'react-bootstrap'
import { Jumbotron } from 'react-bootstrap'
import first from './UI/banners/first.png'
import off from './UI/banners/off.PNG'
import delivery from './UI/banners/delivery.PNG'
import subs from './UI/banners/subs.PNG'
import tasty from './UI/tasty.png'
import home from './UI/home.png'
import background from './UI/back1.PNG'
import Caro from './Caro'
import sec from './UI/sec.jpg'

class Body extends React.Component{

    constructor() {
        super();
     
        this.state = {
          rating: 4
        };
      }

      onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
      }

    render(){
        const { rating } = this.state;
    return (
        
        // <div className="main-footer" style={{ marginTop:'3%', height:'auto', width:'auto' }}>
        // <div className="container" style={{ height:'auto', width:'auto' }}>
        // <h4>Features Product</h4>
        // <div className="row" style={{marginTop:'3%', height:'auto', width:'auto'}}>
        //     {/* Column 1 */}
        //     <div className="item col-5 col-md-2 col-sm-4 " style={{border:'solid', marginRight:'1.5%', marginLeft:'1.4%', marginTop:'2%', borderRadius:'5%', backgroundColor:'#F1EFEF'}}>
        //     <img src={drinks} style={{width:'90%', height:'48%', marginTop:'12%', borderRadius:'5%'}}/>
        //     <h4>Pav Bhaji</h4>
        //     <h5>Rs. 200</h5><button className='btn btn-primary' style={{borderRadius:'10px'}}>Order</button>
        //     </div><br/>
        //     {/* Column 2 */}
        //     <div className="item col-5 col-md-2 col-sm-4 " style={{border:'solid', marginRight:'1.5%', marginLeft:'1.4%', marginTop:'2%', borderRadius:'5%',backgroundColor:'#F1EFEF'}}>
        //     <img src={drinks} style={{width:'90%', height:'48%', marginTop:'12%', borderRadius:'5%'}}/>
        //     <h4>Pav Bhaji</h4>
        //     <h5>Rs. 200</h5><button className='btn btn-primary' style={{borderRadius:'10px'}}>Order</button>
        //     </div><br/>  
        //     { /* Column 3 */}
        //     <div className="item col-5 col-md-2 col-sm-4 " style={{border:'solid', marginRight:'1.5%', marginLeft:'1.4%', marginTop:'2%', borderRadius:'5%',backgroundColor:'#F1EFEF'}}>
        //     <img src={drinks} style={{width:'90%', height:'48%', marginTop:'12%', borderRadius:'5%'}}/>
        //     <h4>Pav Bhaji</h4>
        //     <h5>Rs. 200</h5><button className='btn btn-primary' style={{borderRadius:'10px'}}>Order</button>
        //     </div><br/>   
        //     { /* Column 4 */}
        //     <div className="item col-5 col-md-2 col-sm-4 " style={{border:'solid', marginRight:'1.5%', marginLeft:'1.4%', marginTop:'2%', borderRadius:'5%',backgroundColor:'#F1EFEF'}}>
        //     <img src={drinks} style={{width:'90%', height:'48%', marginTop:'12%', borderRadius:'5%'}}/>
        //     <h4>Pav Bhaji</h4>
        //     <h5>Rs. 200</h5><button className='btn btn-primary' style={{borderRadius:'10px'}}>Order</button>
        //     </div><br/>
        //     { /* Column 5 */}
        //     <div className="item col-5 col-md-2 col-sm-4 " style={{border:'solid', marginRight:'1.5%', marginLeft:'1.4%', marginTop:'2%', borderRadius:'5%',backgroundColor:'#F1EFEF'}}>
        //     <img src={drinks} style={{width:'90%', height:'48%', marginTop:'12%', borderRadius:'5%'}}/>
        //     <h4>Pav Bhaji</h4>
        //     <h5>Rs. 200</h5><button className='btn btn-primary' style={{borderRadius:'10px'}}>Order</button>
        //     </div><br/>
        // </div>
        // </div>
        // </div>
        
        <div>
        <div className="" style={{ height:'auto', width:'auto', backgroundColor:'#E7E7E2' }}>
        <div className="" style={{ height:'auto', width:'auto', padding:'0% 0%',paddingBottom:'2%' }}>
        <h3 style={{paddingTop:'3%'}}>Featured Product</h3>
        <div className="row" style={{marginTop:'3%', height:'auto', width:'auto', marginLeft:'5%', marginRight:'5%'}}>
            {/* Column 1 */}
            <div className="col-md-2 col-sm-4" style={{ height:'auto',padding:'0.5%', marginRight:'1%', marginLeft:'1%'}}>
            <div className="item1" style={{backgroundColor:'white', border:'solid', borderWidth:'1px', borderColor:'#9C9C9B'}}>
            <img src={mp7} style={{width:'100%', height:'70%'}}/>
            <p style={{margin:'0%'}}><b>Pav Bhaji</b></p>
            <p style={{margin:'0%'}}>Rs. 200</p>
            <StarRatingComponent 
            style={{margin:'0%'}}
            name="rate1" 
            starCount={5}
            value={rating}
            onStarClick={this.onStarClick.bind(this)}
            />
            </div>
            <div className="item1" style={{marginTop:'1%',padding:'2%', backgroundColor:'white', border:'solid', borderWidth:'1px', borderColor:'#9C9C9B'}}>
            <button style={{width:'100%', color:'green',border:'white',backgroundColor:'white', margin:'0%'}}><FaCartArrowDown size="1rem" style={{paddingBottom:'1%',marginRight:'5%'}}/> Add To Cart</button>
            </div>
            </div><br/>
             {/* Column 1 */}
            <div className="col-md-2 col-sm-4" style={{ height:'auto',padding:'0.5%', marginRight:'1%', marginLeft:'1%'}}>
            <div className="item1" style={{backgroundColor:'white', border:'solid', borderWidth:'1px', borderColor:'#9C9C9B'}}>
            <img src={mp7} style={{width:'100%', height:'70%'}}/>
            <p style={{margin:'0%'}}><b>Pav Bhaji</b></p>
            <p style={{margin:'0%'}}>Rs. 200</p>
            <StarRatingComponent
            style={{margin:'0%'}} 
            name="rate1" 
            starCount={5}
            value={rating}
            onStarClick={this.onStarClick.bind(this)}
            />
            </div>
            <div className="item1" style={{marginTop:'1%',padding:'2%', backgroundColor:'white', border:'solid', borderWidth:'1px', borderColor:'#9C9C9B'}}>
            <button style={{width:'100%', color:'green',border:'white',backgroundColor:'white', margin:'0%'}}><FaCartArrowDown size="1rem" style={{paddingBottom:'1%',marginRight:'5%'}}/> Add To Cart</button>
            </div>
            </div><br/>
            {/* Column 1 */}
            <div className="col-md-2 col-sm-4" style={{ height:'auto',padding:'0.5%', marginRight:'1%', marginLeft:'1%'}}>
            <div className="item1" style={{backgroundColor:'white', border:'solid', borderWidth:'1px', borderColor:'#9C9C9B'}}>
            <img src={mp7} style={{width:'100%', height:'70%'}}/>
            <p style={{margin:'0%'}}><b>Pav Bhaji</b></p>
            <p style={{margin:'0%'}}>Rs. 200</p>
            <StarRatingComponent
            style={{margin:'0%'}} 
            name="rate1" 
            starCount={5}
            value={rating}
            onStarClick={this.onStarClick.bind(this)}
            />
            </div>
            <div className="item1" style={{marginTop:'1%',padding:'2%', backgroundColor:'white', border:'solid', borderWidth:'1px', borderColor:'#9C9C9B'}}>
            <button style={{width:'100%', color:'green',border:'white',backgroundColor:'white', margin:'0%'}}><FaCartArrowDown size="1rem" style={{paddingBottom:'1%',marginRight:'5%'}}/> Add To Cart</button>
            </div>
            </div><br/>
             {/* Column 1 */}
            <div className="col-md-2 col-sm-4" style={{ height:'auto',padding:'0.5%', marginRight:'1%', marginLeft:'1%'}}>
            <div className="item1" style={{backgroundColor:'white', border:'solid', borderWidth:'1px', borderColor:'#9C9C9B'}}>
            <img src={mp7} style={{width:'100%', height:'70%'}}/>
            <p style={{margin:'0%'}}><b>Pav Bhaji</b></p>
            <p style={{margin:'0%'}}>Rs. 200</p>
            <StarRatingComponent 
            style={{margin:'0%'}}
            name="rate1" 
            starCount={5}
            value={rating}
            onStarClick={this.onStarClick.bind(this)}
            />
            </div>
            <div className="item1" style={{marginTop:'1%',padding:'2%', backgroundColor:'white', border:'solid', borderWidth:'1px', borderColor:'#9C9C9B'}}>
            <button style={{width:'100%', color:'green',border:'white',backgroundColor:'white', margin:'0%'}}><FaCartArrowDown size="1rem" style={{paddingBottom:'1%',marginRight:'5%'}}/> Add To Cart</button>
            </div>
            </div><br/>
             {/* Column 1 */}
             <div className="col-md-2 col-sm-4" style={{ height:'auto',padding:'0.5%', marginRight:'1%', marginLeft:'1%'}}>
            <div className="item1" style={{backgroundColor:'white', border:'solid', borderWidth:'1px', borderColor:'#9C9C9B'}}>
            <img src={mp7} style={{width:'100%', height:'70%'}}/>
            <p style={{margin:'0%'}}><b>Pav Bhaji</b></p>
            <p style={{margin:'0%'}}>Rs. 200</p>
            <StarRatingComponent 
            style={{margin:'0%'}}
            name="rate1" 
            starCount={5}
            value={rating}
            onStarClick={this.onStarClick.bind(this)}
            />
            </div>
            <div className="item1" style={{marginTop:'1%',padding:'2%', backgroundColor:'white', border:'solid', borderWidth:'1px', borderColor:'#9C9C9B'}}>
            <button style={{width:'100%', color:'green',border:'white',backgroundColor:'white', margin:'0%'}}><FaCartArrowDown size="1rem" style={{paddingBottom:'1%',marginRight:'5%'}}/> Add To Cart</button>
            </div>
            </div><br/>
            </div>


        <div className="row" style={{marginTop:'3%', height:'auto', width:'auto', marginLeft:'5%', marginRight:'5%'}}>
            {/* Column 1 */}
            <div className="col-md-2 col-sm-4" style={{ height:'auto',padding:'0.5%', marginRight:'1%', marginLeft:'1%'}}>
            <div className="item1" style={{backgroundColor:'white', border:'solid', borderWidth:'1px', borderColor:'#9C9C9B'}}>
            <img src={mp7} style={{width:'100%', height:'70%'}}/>
            <p style={{margin:'0%'}}><b>Pav Bhaji</b></p>
            <p style={{margin:'0%'}}>Rs. 200</p>
            <StarRatingComponent 
            style={{margin:'0%'}}
            name="rate1" 
            starCount={5}
            value={rating}
            onStarClick={this.onStarClick.bind(this)}
            />
            </div>
            <div className="item1" style={{marginTop:'1%',padding:'2%', backgroundColor:'white', border:'solid', borderWidth:'1px', borderColor:'#9C9C9B'}}>
            <button style={{width:'100%', color:'green',border:'white',backgroundColor:'white', margin:'0%'}}><FaCartArrowDown size="1rem" style={{paddingBottom:'1%',marginRight:'5%'}}/> Add To Cart</button>
            </div>
            </div><br/>
             {/* Column 1 */}
            <div className="col-md-2 col-sm-4" style={{ height:'auto',padding:'0.5%', marginRight:'1%', marginLeft:'1%'}}>
            <div className="item1" style={{backgroundColor:'white', border:'solid', borderWidth:'1px', borderColor:'#9C9C9B'}}>
            <img src={mp7} style={{width:'100%', height:'70%'}}/>
            <p style={{margin:'0%'}}><b>Pav Bhaji</b></p>
            <p style={{margin:'0%'}}>Rs. 200</p>
            <StarRatingComponent
            style={{margin:'0%'}} 
            name="rate1" 
            starCount={5}
            value={rating}
            onStarClick={this.onStarClick.bind(this)}
            />
            </div>
            <div className="item1" style={{marginTop:'1%',padding:'2%', backgroundColor:'white', border:'solid', borderWidth:'1px', borderColor:'#9C9C9B'}}>
            <button style={{width:'100%', color:'green',border:'white',backgroundColor:'white', margin:'0%'}}><FaCartArrowDown size="1rem" style={{paddingBottom:'1%',marginRight:'5%'}}/> Add To Cart</button>
            </div>
            </div><br/>
            {/* Column 1 */}
            <div className="col-md-2 col-sm-4" style={{ height:'auto',padding:'0.5%', marginRight:'1%', marginLeft:'1%'}}>
            <div style={{backgroundColor:'white', border:'solid', borderWidth:'1px', borderColor:'#9C9C9B'}}>
            <img src={mp7} style={{width:'100%', height:'70%'}}/>
            <p style={{margin:'0%'}}><b>Pav Bhaji</b></p>
            <p style={{margin:'0%'}}>Rs. 200</p>
            <StarRatingComponent
            style={{margin:'0%'}} 
            name="rate1" 
            starCount={5}
            value={rating}
            onStarClick={this.onStarClick.bind(this)}
            />
            </div>
            <div className="item1" style={{marginTop:'1%',padding:'2%', backgroundColor:'white', border:'solid', borderWidth:'1px', borderColor:'#9C9C9B'}}>
            <button style={{width:'100%', color:'green',border:'white',backgroundColor:'white', margin:'0%'}}><FaCartArrowDown size="1rem" style={{paddingBottom:'1%',marginRight:'5%'}}/> Add To Cart</button>
            </div>
            </div><br/>
             {/* Column 1 */}
            <div className="col-md-2 col-sm-4" style={{ height:'auto',padding:'0.5%', marginRight:'1%', marginLeft:'1%'}}>
            <div className="item1" style={{backgroundColor:'white', border:'solid', borderWidth:'1px', borderColor:'#9C9C9B'}}>
            <img src={mp7} style={{width:'100%', height:'70%'}}/>
            <p style={{margin:'0%'}}><b>Pav Bhaji</b></p>
            <p style={{margin:'0%'}}>Rs. 200</p>
            <StarRatingComponent 
            style={{margin:'0%'}}
            name="rate1" 
            starCount={5}
            value={rating}
            onStarClick={this.onStarClick.bind(this)}
            />
            </div>
            <div className="item1" style={{marginTop:'1%',padding:'2%', backgroundColor:'white', border:'solid', borderWidth:'1px', borderColor:'#9C9C9B'}}>
            <button style={{width:'100%', color:'green',border:'white',backgroundColor:'white', margin:'0%'}}><FaCartArrowDown size="1rem" style={{paddingBottom:'1%',marginRight:'5%'}}/> Add To Cart</button>
            </div>
            </div><br/>
             {/* Column 1 */}
            <div className="col-md-2 col-sm-4" style={{ height:'auto',padding:'0.5%', marginRight:'1%', marginLeft:'1%'}}>
            <div className="item1" style={{backgroundColor:'white', border:'solid', borderWidth:'1px', borderColor:'#9C9C9B'}}>
            <img src={mp7} style={{width:'100%', height:'70%'}}/>
            <p style={{margin:'0%'}}><b>Pav Bhaji</b></p>
            <p style={{margin:'0%'}}>Rs. 200</p>
            <StarRatingComponent 
            style={{margin:'0%'}}
            name="rate1" 
            starCount={5}
            value={rating}
            onStarClick={this.onStarClick.bind(this)}
            />
            </div>
            <div className="item1" style={{marginTop:'1%',padding:'2%', backgroundColor:'white', border:'solid', borderWidth:'1px', borderColor:'#9C9C9B'}}>
            <button style={{width:'100%', color:'green',border:'white',backgroundColor:'white', margin:'0%'}}><FaCartArrowDown size="1rem" style={{paddingBottom:'1%',marginRight:'5%'}}/> Add To Cart</button>
            </div>
            </div><br/>
            </div>
       
        </div>
        </div>

        

        <div className="" style={{ height:'auto', width:'auto', backgroundColor:'#FFF' }}>
        <div className="" style={{ height:'auto', width:'auto', padding:'0% 0%',paddingBottom:'2%', marginLeft:'4%', marginRight:'4%' }}>
        <h3 style={{paddingTop:'3%', Color:'#9C9C9B'}}>What our client say about us.</h3>
        <div className="row" style={{marginTop:'3%', height:'auto', width:'auto'}}>
          <div className="item col-md-3 col-sm-6" style={{ height:'15%',padding:'0.5%', marginRight:'3%', marginLeft:'3%',border:'solid', borderWidth:'1px', borderColor:'#9C9C9B', marginTop:'3%'}}>
            <img src={demo} alt='logo' style={{width:'150px', height:'150px', borderRadius:'50%', padding:'8% 8%' }}/>
              <p><b>Josephine</b></p>
              <p style={{padding:'5% 10%'}}>"Home Chef is the platform that helped ,e in turning my passion into buisness without anyconsiderable investment. Thank you Home-Chef."</p>
          </div><br/>
          <div className="item col-md-4 col-sm-6" style={{ height:'auto',padding:'0.5%', marginRight:'2%', marginLeft:'2%',border:'solid', borderWidth:'1px', borderColor:'#9C9C9B'}}>
            <img src={demo} alt='logo' style={{width:'230px', height:'230px', borderRadius:'50%', padding:'7% 7%' }}/>
            <p><b>Josephine</b></p>
            <p style={{padding:'5% 10%'}}>"Home Chef is the platform that helped ,e in turning my passion into buisness without anyconsiderable investment. Thank you Home-Chef."</p>
          </div><br/>
          <div className="item col-md-3 col-sm-6" style={{ height:'15%',padding:'0.5%', marginRight:'3%', marginLeft:'3%',border:'solid', borderWidth:'1px', borderColor:'#9C9C9B', marginTop:'3%'}}>
            <img src={demo} alt='logo' style={{width:'150px', height:'150px', borderRadius:'50%', padding:'8% 8%' }}/>
            <p><b>Josephine</b></p>
            <p style={{padding:'5% 10%'}}>"Home Chef is the platform that helped ,e in turning my passion into buisness without anyconsiderable investment. Thank you Home-Chef."</p>
          </div><br/>
        </div>
        </div>
        </div>
        </div>

        
    )
    }
}

export default Body;