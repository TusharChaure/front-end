import React from 'react';
import Table from 'react-bootstrap/Table'

const Cartlist1 = (props) => {

   
 return(
        <div >
          <Table >
                 <tbody>
                     <tr>
                     <td>{props.couponcode}</td>
                     <td>{props.price}</td>
                     <td>{props.off}</td>
                     </tr>
                 </tbody>
           </Table>
        </div>
       
 )                               
           
    
}

export default Cartlist1;