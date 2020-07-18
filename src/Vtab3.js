import React, {Component} from 'react'
import Arraylis from './Arraylis'       
import axios from 'axios'

class Vtab3 extends Component {
    
    state = {
        items: [],
        search: '',
    };

    componentDidMount() {
        axios.get('http://165.22.208.232:5000/menu/Italian')
        // axios.get('menu/Italian')
         .then(res => {
             console.log(res)
             this.setState({items: res.data})
         })
         .catch(error => {
             console.log(error)
         })
    }

    UpdateSearch(event) {
        this.setState({search: event.target.value.substr(0,10)});
    }
    
    render() {

        let filtered = this.state.items.filter(
            (item) => {
                return item.products.itemId.indexOf(this.state.search) !== -1;
            }
        );

        const arr = filtered.map( (item, index) => {
	
            return <Arraylis 
                     itemId={item.products.itemId}
                     catogary={item.products.catogaryName}
                     subcategaryName={item.products.subcatogaryName}
                     price={item.products.price}
                     src={require(`./pic/ip${index}.png`)} 	
                />
        
        } )
        return (
            <div className="main-footer" style={{ marginTop:'3%', height:'auto', width:'auto' }}>
            <div className="container" style={{ height:'auto', width:'auto' }}>
                <div className="row" style={{marginTop:'3%', height:'auto', width:'auto', marginLeft:'6%',marginRight:'6%'}}>
                    <input type="text" value={this.state.search} onChange={this.UpdateSearch.bind(this)} placeholder="Seach.." style={{width:'30%', height:'5%', borderRadius:'10px', marginLeft:'35%',marginRight:'35%', marginTop:'%',marginBottom:'2%', padding:'1% 1%'}}/>
                    {arr}
                </div>
            </div>
            </div>
        )
    }
}


export default Vtab3;