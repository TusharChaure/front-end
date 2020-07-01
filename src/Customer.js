import React, {Component} from 'react'
import Adminlist4 from './Adminlist4'  
import axios from 'axios'

class Homechef extends Component {
    
    constructor(){
        super();
        this.state = {
            items: [],
        }
    }


    componentDidMount() {
        
        // axios.get('http://localhost:5000/admin/users/all',{
        axios.get('admin/users/all',{
        headers: {
            'auth-token': localStorage.usertoken
          }}
        )
         .then(res => {
             console.log(res)
             this.setState({items: res.data.data})
         })
    }
    
    render() {
        
        const arr = this.state.items.map( (item, index) => {
	
            return <Adminlist4 
                     _id={item._id}
                     username={item.username}
                     name={item.name}
                     address={item.address} 	
                     phone={item.phone}
                     email={item.email}
                />
        
        } )
        
        return (

            <div>
            <div className="main-footer" style={{ marginTop:'3%', height:'auto', width:'auto' }}>
            <div className="container" style={{ height:'auto', width:'auto' }}>
                <div className="row" style={{marginTop:'3%', height:'auto', width:'auto'}}>
                   {arr} 
                </div>
            </div>
            </div>
            </div>
        )
    }
}
    



export default Homechef;