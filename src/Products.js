import React, {Component} from 'react'
import Arraylis from './Arraylis' 
import axios from 'axios'
import { Button, Form, FormGroup, Label, Jumbotron, Input} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Products extends Component { 
    
    constructor(){
        super();
        this.state = {
            items: [],
            items1: [],
            items2: [],
            items3: [],
            items4: [],
            search: '',
        }
    }
    
    componentDidMount() {
        axios.get('http://165.22.208.232:5000/menu/Indian')
        // axios.get('menu/Indian')
         .then(res => {
             console.log(res)
             this.setState({items: res.data})
         })

         axios.get('http://165.22.208.232:5000/menu/Chinese')
        // axios.get('menu/Indian')
         .then(res => {
             console.log(res)
             this.setState({items1: res.data})
         })

         axios.get('http://165.22.208.232:5000/menu/Italian')
         // axios.get('menu/Indian')
          .then(res => {
              console.log(res)
              this.setState({items2: res.data})
          })

          axios.get('http://165.22.208.232:5000/menu/Mexican')
          // axios.get('menu/Indian')
           .then(res => {
               console.log(res)
               this.setState({items3: res.data})
           })

           axios.get('http://165.22.208.232:5000/menu/Thai')
           // axios.get('menu/Indian')
            .then(res => {
                console.log(res)
                this.setState({items4: res.data})
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
                    //  src={images[index].src}	
                    src={require(`./pic/mp${index}.png`)}
                />
        
        } )

        const arr1 = this.state.items1.map( (item, index) => {
	
            return <Arraylis 
                     itemId={item.products.itemId}
                     catogary={item.products.catogaryName}
                     subcategaryName={item.products.subcatogaryName}
                     price={item.products.price} 
                    //  src={images[index].src}	
                    src={require(`./pic/cp${index}.png`)}
                />
        
        } )

        const arr2 = this.state.items2.map( (item, index) => {
	
            return <Arraylis 
                     itemId={item.products.itemId}
                     catogary={item.products.catogaryName}
                     subcategaryName={item.products.subcatogaryName}
                     price={item.products.price} 
                    //  src={images[index].src}	
                    src={require(`./pic/ip${index}.png`)}
                />
        
        } )

        const arr3 = this.state.items3.map( (item, index) => {
	
            return <Arraylis 
                     itemId={item.products.itemId}
                     catogary={item.products.catogaryName}
                     subcategaryName={item.products.subcatogaryName}
                     price={item.products.price} 
                    //  src={images[index].src}	
                    src={require(`./pic/mxp${index}.png`)}
                />
        
        } )

        const arr4 = this.state.items4.map( (item, index) => {
	
            return <Arraylis 
                     itemId={item.products.itemId}
                     catogary={item.products.catogaryName}
                     subcategaryName={item.products.subcatogaryName}
                     price={item.products.price} 
                    //  src={images[index].src}	
                    src={require(`./pic/tp${index}.png`)}
                />
        
        } )
        
        return (

            <div>
            {/* <h3 style={{marginTop:'2%'}}>Menu List</h3><br /> */}
            <div className="main-footer" style={{ marginTop:'0%', height:'auto', width:'auto' }}>
            <div className="container" style={{ height:'auto', width:'auto' }}>
                <div className="row" style={{ height:'auto', width:'auto', marginTop:'5%'}}>
                    <input type="text" value={this.state.search} onChange={this.UpdateSearch.bind(this)} placeholder="Seach.." style={{width:'30%', height:'5%', borderRadius:'10px', marginLeft:'35%',marginRight:'35%', marginTop:'%',marginBottom:'2%', padding:'1% 1%'}}/>
                   {arr} 
                   {arr1}
                   {arr2}
                   {arr3}
                   {arr4}
                </div> 
            </div>
            </div>
            </div>
        )
    }
}
    



export default Products;