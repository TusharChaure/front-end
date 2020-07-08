 import React from 'react';
 import 'tachyons';
 import Table from 'react-bootstrap/Table'
 import { FaEdit } from 'react-icons/fa'
 import mp7 from './pics/indian/mp1.jpg'
 
 const Cartlist = (props) => {

    
  return(
         <div >
           {/* <Table style={{textAlign:'center'}}>
                 <tbody>
                     <tr style={{width:'90%'}}>
                     <td style={{width:'30%'}}>{props.id}</td>
                     <td style={{width:'30%'}}>{props.cat}</td>
                     <td style={{width:'30%'}}>{props.price*props.cat}</td>
                     </tr>
                 </tbody>
             </Table> */}

            <Table >
                 <tbody>
                     <tr style={{width:'90%'}}>
                     <img src={props.src} style={{width:'70%', height:'auto', padding:'5%'}}/>
                     <td style={{width:'22.5%', padding:'8%'}}><b>{props.id}</b></td>
                     <td style={{width:'22.5%', padding:'8%', color:'green'}}><b>{props.cat}</b></td>
                     <td style={{width:'22.5%', padding:'8%'}}><b>Rs.{props.price*props.cat}</b></td>
                     </tr>
                 </tbody>
           </Table>
            
         </div>
        
  )                               
            
     
 }

 export default Cartlist;