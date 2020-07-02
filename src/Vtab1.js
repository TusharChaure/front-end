import React, {Component} from 'react'
import Arraylis from './Arraylis' 
import axios from 'axios'

class Vtab1 extends Component {
    
    constructor(){
        super();
        this.state = {
            items: [],
        }
    }


    componentDidMount() {
        
        axios.get('http://165.22.208.232/menu/Indian')
        // axios.get('menu/Indian')
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

            <div>
            <div className="main-footer" style={{ marginTop:'1%', height:'auto', width:'auto' }}>
            <div style={{ height:'auto', width:'auto', backgroundColor:'#FFF' }}>
                <div className="row" style={{marginTop:'2%', height:'auto', width:'auto', marginLeft:'8%',marginRight:'0%'}}>
                   {arr} 
                </div>
            </div>
            </div>
            </div>
        )
    }
}
    



export default Vtab1;