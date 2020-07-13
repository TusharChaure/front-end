import React,{Component, useState, useRef} from 'react'
import Table from 'react-bootstrap/Table'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCartArrowDown } from 'react-icons/fa'
import StarRatings from 'react-star-ratings';
import StarRatingComponent from 'react-star-rating-component';
import Modal from 'react-bootstrap/Modal'
import Popup from './Popup'


function Adminlist1 (props)  {

    const [lgShow, setShow] = useState(false)

    function onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
      }

    return (   
                
                // <div className="item col-md-3 col-sm-6" style={{textAlign:'left', border:'solid', marginLeft:'2%', marginRight:'2%', marginTop:'2%', paddingTop:'3%', borderRadius:'10px', backgroundColor:'white'}}>
                //     <p><b>ID : </b>{props._id}</p>
                //     <p><b>Item Name : </b>{props.itemId}</p>
                //     <p><b>Category Name : </b>{props.catogaryName}</p>
                //     <p><b>Subcategory Name : </b>{props.subcategaryName}</p>
                //     <p><b>Price : </b>{props.price}</p>
                // </div>  

                <div className="col-md-2 col-sm-4" style={{ height:'auto',padding:'0.5%', marginRight:'1%', marginLeft:'1%'}}>
                <div className="item1" style={{backgroundColor:'white', border:'solid', borderWidth:'1px', borderColor:'#9C9C9B'}}>
                <img src={props.src} style={{width:'100%', height:'70%'}}/>
                <p style={{margin:'0%'}}><b>{props.itemId}</b></p>
                <p style={{margin:'0%'}}>Rs.{props.price}</p>
                <StarRatingComponent
                  style={{margin:'0%'}} 
                  name="rate1" 
                  starCount={5}
                  value={4}
                  onStarClick={onStarClick.bind(this)}
                  />
                </div>
                <div className="item1" style={{marginTop:'1%',padding:'2%', backgroundColor:'white', border:'solid', borderWidth:'1px', borderColor:'#9C9C9B'}}>
                <button onClick={() => setShow(true)} style={{padding:'1%' ,width:'100%', color:'green',border:'white',backgroundColor:'white', margin:'0%'}}>Details</button>
                
                <Modal
                  size="lg"
                  show={lgShow}
                  onHide={() => setShow(false)}
                  dialogClassName="modal-90w"
                  aria-labelledby="example-custom-modal-styling-title"
                >
                <Modal.Body>
                  <div className="re" style={{border:'solid',borderColor:'white', marginTop:'8%'}}>
                      <div className="row" style={{marginLeft:'0.5%', marginTop:'1%',marginRight:'0.5%',marginBottom:'15%'}}>
                        <div className="col-md-6 col-sm-12" style={{ margin:'2% 1%' }}>
                            <img src={props.src} style={{width:'90%', height:'auto', padding:'1%'}}/>
                        </div>
                        <div className="col-md-5 col-sm-10" style={{ margin:'2% 1%' }}>
                            <p style={{ padding:'3%', textAlign:'left'}}><b>{props.itemId}</b></p>
                              <hr style={{border:'solid', borderWidth:'0.5px', borderColor:'#000'}}/>
                            <p><b>ID : </b>{props._id}</p>
                            <p><b>Sub-categary : </b> {props.subcategaryName}</p>
                            <p><b>Description : </b> New Dish</p>
                            <p><b>Price per plate : </b> Rs.{props.price}</p>
                        </div>
                      </div>
                  </div>
                </Modal.Body>
                </Modal>
                </div><br/>
                </div>

                // <div >
                //     <Table style={{textAlign:'center'}}>
                //             {/* <thead>
                //                 <tr style={{width:'100%'}}>
                //                 <th style={{width:'20%'}}>Item Id</th>
                //                 <th style={{width:'20%'}}>Item Name</th>
                //                 <th style={{width:'20%'}}>catogaryName</th>
                //                 <th style={{width:'20%'}}>SubcatogaryName</th>
                //                 <th style={{width:'20%'}}>Price</th>
                //                 </tr>
                //             </thead> */}
                //             <tbody>
                //                 <tr style={{width:'100%'}}>
                //                 <td style={{width:'20%'}}>{props._id}</td>
                //                 <td style={{width:'20%'}}>{props.itemId}</td>
                //                 <td style={{width:'20%'}}>{props.catogaryName}</td>
                //                 <td style={{width:'20%'}}>{props.subcategaryName}</td>
                //                 <td style={{width:'20%'}}>{props.price}</td>
                //                 </tr>
                //             </tbody>
                //         </Table>
                // </div>

    )   
    
    }

export default Adminlist1;