import React from 'react';
import Table from 'react-bootstrap/Table'


function Adminlist1 (props)  {

    return (   
                
                <div className="item col-md-3 col-sm-6" style={{textAlign:'left', border:'solid', marginLeft:'2%', marginRight:'2%', marginTop:'2%', paddingTop:'3%', borderRadius:'10px', backgroundColor:'white'}}>
                    <p><b>ID : </b>{props._id}</p>
                    <p><b>Item Name : </b>{props.itemId}</p>
                    <p><b>Category Name : </b>{props.catogaryName}</p>
                    <p><b>Subcategory Name : </b>{props.subcategaryName}</p>
                    <p><b>Price : </b>{props.price}</p>
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