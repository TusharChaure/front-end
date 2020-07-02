import React, {Component} from 'react'
import Adminlist2 from './Adminlist2' 
import axios from 'axios'

class Serviceboy extends Component {
    
    constructor(){
        super();
        this.state = {
            items: [],
        }
    }


    componentDidMount() {
        
        axios.get('http://165.22.208.232:5000/admin/serviceboy/all',{
        // axios.get('admin//serviceboy/all',{
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
	
            return <Adminlist2 
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
    



export default Serviceboy;