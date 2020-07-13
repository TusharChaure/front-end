import React, {Component} from 'react'
import Adminlist1 from './Adminlist1' 
import axios from 'axios'
import { Button, Form, FormGroup, Label, Jumbotron, Input} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Menu extends Component {
    
    constructor(){
        super();
        this.state = {
            items: [],
            items1: [],
            items2: [],
            items3: [],
            items4: [],
            itemId: '',
            price: 0
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
      }
    
      onSubmit(e){
        e.preventDefault()
       
             console.log(this.state.itemId);
             console.log(this.state.price)
            axios.put('http://165.22.208.232:5000/admin/change/price',
            //  axios.put('admin/change/price',
             {
                "itemId": this.state.itemId,
                "price": this.state.price,
             },
             {
                 headers: {
                   'auth-token': localStorage.usertoken
                 }},
                 )
                 .then(res => {
                     if(res.data.status==true){
                        // alert(res.data.data)
                        toast('Price Updated', {position: toast.POSITION.TOP_CENTER});
                        window.location.reload(1000);
                     }
                     else{
                        //  alert(res.data.error)
                        toast('Got some error', {position: toast.POSITION.TOP_CENTER});
                     }
                 })
                 .catch(err => {
                     console.log("err")
                 })
      }

    // componentDidMount() {
        
    //     axios.get('http://165.22.208.232:5000/admin/findall',
    //     // axios.get('admin/findall',
    //     {
    //         headers: {
    //           'auth-token': localStorage.usertoken
    //         }},
    //     )
    //      .then(res => {
    //          console.log(res)
    //          this.setState({items: res.data})
    //      })
    // }
    
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

  




    render() {
        
        const arr = this.state.items.map( (item, index) => {
	
            return <Adminlist1 
                     _id={item._id}
                     itemId={item.products.itemId}
                     catogaryName={item.products.catogaryName}
                     subcategaryName={item.products.subcatogaryName}
                     price={item.products.price} 
                     src={require(`./pic/mp${index}.png`)}	
                />
        
        } )

        const arr1 = this.state.items1.map( (item, index) => {
	
            return <Adminlist1 
                     _id={item._id}
                     itemId={item.products.itemId}
                     catogaryName={item.products.catogaryName}
                     subcategaryName={item.products.subcatogaryName}
                     price={item.products.price} 
                     src={require(`./pic/cp${index}.png`)}	
                />
        
        } )

        const arr2 = this.state.items2.map( (item, index) => {
	
            return <Adminlist1 
                     _id={item._id}
                     itemId={item.products.itemId}
                     catogaryName={item.products.catogaryName}
                     subcategaryName={item.products.subcatogaryName}
                     price={item.products.price} 
                     src={require(`./pic/ip${index}.png`)}	
                />
        
        } )

        const arr3 = this.state.items3.map( (item, index) => {
	
            return <Adminlist1 
                     _id={item._id}
                     itemId={item.products.itemId}
                     catogaryName={item.products.catogaryName}
                     subcategaryName={item.products.subcatogaryName}
                     price={item.products.price} 
                     src={require(`./pic/mxp${index}.png`)}	
                />
        
        } )

        const arr4 = this.state.items4.map( (item, index) => {
	
            return <Adminlist1 
                     _id={item._id}
                     itemId={item.products.itemId}
                     catogaryName={item.products.catogaryName}
                     subcategaryName={item.products.subcatogaryName}
                     price={item.products.price} 
                     src={require(`./pic/tp${index}.png`)}	
                />
        
        } )
        
        return (

            <div>
            {/* <h3 style={{marginTop:'2%'}}>Menu List</h3><br /> */}
            <div className="main-footer" style={{ marginTop:'0%', height:'auto', width:'auto' }}>
            <div className="container" style={{ height:'auto', width:'auto' }}>
                <div className="row" style={{ height:'auto', width:'auto'}}>
                   {arr} 
                   {arr1}
                   {arr2}
                   {arr3}
                   {arr4}
                </div> 
            </div>
            </div>
            <hr/>
            <div style={{ border:'solid', paddingBottom:'3%',paddingLeft:'3%', paddingRight:'3%', paddingTop:'3%', borderRadius:'10px', marginLeft:'2%',marginRight:'2%', marginTop:'3%', marginBottom:'3%' }}>
            <h3>Update Dish Price</h3><hr />
            <div style={{marginRight:'20%', marginLeft:'20%', marginTop:'3%'}}>
            <Form style={{marginTop:'3%'}} onSubmit={this.onSubmit}>
            <FormGroup >
            <Label >Dish Name</Label><hr />
            <Input type="text" name="itemId" value={this.state.itemId} onChange={this.onChange} required placeholder="Enter Dish name" />
            </FormGroup>      
            <FormGroup>
            <Label >New Price</Label>
            <Input type="number" id="price" name="price" required placeholder="Enter Amount" onChange={this.onChange}/>
            </FormGroup>
            <div className="d-flex justify-content-center mt-3 login_container">
            <Button type="submit" style={{ background:'#779A25', borderColor:'#779A25'}} className="btn btn-primary">Update</Button>      
            </div>      
            </Form>
            </div>
            </div>
            </div>
        )
    }
}
    



export default Menu;