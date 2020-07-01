import React,{Component} from 'react';
import Arraylis from './Arraylis';
import axios from 'axios'

class Vtab2 extends Component {
    
    state = {
        items: [],

    };
    
    componentDidMount() {
        
        // axios.get('http://localhost:5000/menu/Chinese')
        axios.get('menu/Chinese')
         .then(res => {
             console.log(res)
             this.setState({items: res.data})
         })
    }
    
    render() {
        
        const arr = this.state.items.map( (item, index) => {
	
            return <Arraylis 
                     itemId={item.products.itemId}
                     catogary={item.products.catogaryName}
                     subcategaryName={item.products.subcatogaryName}
                     price={item.products.price} 	
                />
        
        } )
        return (
            <div className="main-footer" style={{ marginTop:'3%', height:'auto', width:'auto' }}>
            <div className="container" style={{ height:'auto', width:'auto' }}>
                <div className="row" style={{marginTop:'3%', height:'auto', width:'auto'}}>
                    {arr}
                </div>
            </div>
            </div>
        )
    }
}

export default Vtab2;

