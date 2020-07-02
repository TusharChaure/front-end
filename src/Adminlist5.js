import React from 'react';
import Table from 'react-bootstrap/Table'


function Adminlist1 (props)  {

    return (   
                
                <div className="item col-md-3 col-sm-6" style={{textAlign:'left', border:'solid', marginLeft:'2%', marginRight:'2%', marginTop:'2%', paddingTop:'3%', borderRadius:'10px', backgroundColor:'white'}}>
                    <p><b>PromoCode : </b>{props.code}</p>
                    <p><b>Price : </b>{props.price}</p>
                    <p><b>Off : </b>{props.off}</p>
                </div>  

    )   
    
    }

export default Adminlist1;