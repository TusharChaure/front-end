 import React from 'react';
 import 'tachyons';
 import Table from 'react-bootstrap/Table'
 import { FaEdit } from 'react-icons/fa'
 import mp7 from './pics/indian/mp1.jpg'
 import { useHistory } from "react-router";
 
 const Cartlist = (props) => {

  const history = useHistory();
  function remove(){
      console.log("clicked")
      console.log(JSON.parse(localStorage.getItem('items')).length)
      let array = JSON.parse(localStorage.getItem('items'));
      for( let i=0; i<JSON.parse(localStorage.getItem('items')).length; i++){
            if(props.id == JSON.parse(localStorage.getItem('items'))[i].itemid){ 
            console.log(array)
            // console.log(JSON.parse(localStorage.getItem('items'))[i])
            // console.log(JSON.parse(localStorage.getItem('items')))
            // console.log(JSON.parse(localStorage.getItem('items'))[i]).splice(i, 1);
            // array.splice(i, 1)
            console.log(array[i])
            console.log(JSON.parse(localStorage.getItem('items'))[i].totalprice)
            localStorage.total = localStorage.total - JSON.parse(localStorage.getItem('items'))[i].totalprice
            localStorage.amount = localStorage.amount - JSON.parse(localStorage.getItem('items'))[i].totalprice
            array.splice(i, 1)
            break;
            } 
    }
    console.log(array)
    localStorage.setItem("items",JSON.stringify(array))
    history.push({
        pathname:  "/" 
     })
    // window.location.reload(1000)
  }
    
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
                     <td style={{width:'18%', padding:'8%'}}><b>{props.id}</b></td>
                     <td style={{width:'18%', padding:'8%', color:'green'}}><b>{props.cat}</b></td>
                     <td style={{width:'18%', padding:'8%'}}><b>Rs.{props.price*props.cat}</b></td>
                     <td style={{width:'18%', padding:'8%'}}><span onClick={remove}>X</span></td>
                     </tr>
                 </tbody>
           </Table>
            
         </div>
        
  )                               
            
     
 }

 export default Cartlist;