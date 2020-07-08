import React, {Component} from 'react'
import Arraylis from './Arraylis'  
import axios from 'axios'

class Vtab4 extends Component {
    
    state = {
        items: [],
    };
    
    componentDidMount() {
        axios.get('http://165.22.208.232:5000/menu/Mexican')
        // axios.get('menu/Mexican')
         .then(res => {
             console.log(res)
             this.setState({items: res.data})
         })
         .catch(error => {
             console.log(error)
         })
    }
    
    render() {

        
        const arr = this.state.items.map( (item, index) => {
	
            return <Arraylis 
                     itemId={item.products.itemId}
                     catogary={item.products.catogaryName}
                     subcategaryName={item.products.subcatogaryName}
                     price={item.products.price} 
                     src={require(`./pics/mexican/mxp${index}.jpg`)}	
                />
        
        } )

        return (
            <div className="main-footer" style={{ marginTop:'3%', height:'auto', width:'auto' }}>
            <div className="container" style={{ height:'auto', width:'auto' }}>
                <div className="row" style={{marginTop:'3%', height:'auto', width:'auto', marginLeft:'6%',marginRight:'6%'}}>
                    {arr}
                </div>
            </div>
            </div>
        )
    }
}

export default Vtab4;