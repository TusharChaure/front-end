// import React, {Component} from 'react'
// import Adminlist from './Adminlist' 
// import axios from 'axios'

// class Atab3 extends Component {
    
//     constructor(){
//         super();
//         this.state = {
//             items: [],
//         }
//     }


//     componentDidMount() {
        
//         axios.get('http://localhost:5000/admin/findall',{
//         headers: {
//             'auth-token': localStorage.usertoken
//           }}
//         )
//          .then(res => {
//              console.log(res)
//              this.setState({items: res.data.products})
//          })
//     }
    
//     render() {
        
//         const arr = this.state.items.map( (item, index) => {
	
//             return <Adminlist 
//                      itemId={item.itemId}
//                      catogaryName={item.catogaryName}
//                      subcategaryName={item.subcatogaryName}
//                      price={item.price} 	
//                 />
        
//         } )
        
//         return (

//             <div>
//             <div className="main-footer" style={{ marginTop:'3%', height:'auto', width:'auto' }}>
//             <div className="container" style={{ height:'auto', width:'auto' }}>
//                 <div className="row" style={{marginTop:'3%', height:'auto', width:'auto'}}>
//                    {arr} 
//                 </div>
//             </div>
//             </div>
//             </div>
//         )
//     }
// }
    



// export default Atab3;