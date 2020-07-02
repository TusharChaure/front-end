import React, {Component} from 'react'
import Adminlist from './Adminlist' 
import axios from 'axios'

class Homechef extends Component {
    
    constructor(){
        super();
        this.state = {
            items: [],
        }
    }


    componentDidMount() {
        
        axios.get('http://165.22.208.232/admin/chefs/all',{
        // axios.get('admin/chefs/all',{
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
	
            return <Adminlist 
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