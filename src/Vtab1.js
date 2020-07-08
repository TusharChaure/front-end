import React, {Component} from 'react'
import Arraylis from './Arraylis' 
import axios from 'axios'
import mp1 from './pics/indian/mp1.jpg'
import mp2 from './pics/indian/mp2.jpg'
import mp3 from './pics/indian/mp3.jpg'
import mp4 from './pics/indian/mp4.jpg'
import mp5 from './pics/indian/mp5.jpg'
import mp6 from './pics/indian/mp6.jpg'
import mp7 from './pics/indian/mp7.jpg'
import mp8 from './pics/indian/mp8.jpg'
import mp9 from './pics/indian/mp9.jpg'
import mp10 from './pics/indian/mp10.jpg'
import mp11 from './pics/indian/mp11.jpg'
import mp12 from './pics/indian/mp12.jpg'
import mp13 from './pics/indian/mp13.jpg'
import mp14 from './pics/indian/mp14.jpg'
import mp15 from './pics/indian/mp15.jpg'
import mp16 from './pics/indian/mp16.jpg'
import mp17 from './pics/indian/mp17.jpg'
import mp18 from './pics/indian/mp18.jpg'
import mp19 from './pics/indian/mp19.jpg'
import mp20 from './pics/indian/mp20.jpg'
import mp21 from './pics/indian/mp21.jpg'
import mp22 from './pics/indian/mp22.jpg'
import mp23 from './pics/indian/mp23.jpg'
import mp24 from './pics/indian/mp24.jpg'
import mp25 from './pics/indian/mp25.jpg'
import mp26 from './pics/indian/mp26.jpg'
import mp27 from './pics/indian/mp27.jpg'
import mp28 from './pics/indian/mp28.jpg'
import mp29 from './pics/indian/mp29.jpg'
import mp30 from './pics/indian/mp30.jpg'
import mp31 from './pics/indian/mp31.jpg'
import mp32 from './pics/indian/mp32.jpg'
import mp33 from './pics/indian/mp33.jpg'
import mp34 from './pics/indian/mp34.jpg'
import mp35 from './pics/indian/mp35.jpg'
import mp36 from './pics/indian/mp36.jpg'
import mp37 from './pics/indian/mp37.jpg'
import mp38 from './pics/indian/mp38.jpg'
import mp39 from './pics/indian/mp38.jpg'
import mp40 from './pics/indian/mp40.jpg'
import mp41 from './pics/indian/mp41.jpg'
import mp42 from './pics/indian/mp42.jpg'
import mp43 from './pics/indian/mp43.jpg'
import mp44 from './pics/indian/mp44.jpg'
import mp45 from './pics/indian/mp45.jpg'
import mp46 from './pics/indian/mp46.jpg'
import mp47 from './pics/indian/mp47.jpg'
import mp48 from './pics/indian/mp48.jpg'
import mp49 from './pics/indian/mp49.jpg'
import mp50 from './pics/indian/mp50.jpg'
import mp51 from './pics/indian/mp51.jpg'
import mp52 from './pics/indian/mp52.jpg'
import mp53 from './pics/indian/mp53.jpg'
import mp54 from './pics/indian/mp54.jpg'
import mp55 from './pics/indian/mp55.jpg'
import mp56 from './pics/indian/mp56.jpg'

class Vtab1 extends Component {
    
    constructor(){
        super();
        this.state = {
            items: [],
        }
    }


    componentDidMount() {
        
        axios.get('http://165.22.208.232:5000/menu/Indian')
        // axios.get('menu/Indian')
         .then(res => {
             console.log(res)
             this.setState({items: res.data})
         })
    }
    
    render() {

        // const images = [
        //     { src: mp1 },
        //     { src: mp2 },
        //     { src: mp3 },
        //     { src: mp4 },
        //     { src: mp5 },
        //     { src: mp6 },
        //     { src: mp7 },
        //     { src: mp8 },
        //     { src: mp9 },
        //     { src: mp10 },
        //     { src: mp11 },
        //     { src: mp12 },
        //     { src: mp13 },
        //     { src: mp14 },
        //     { src: mp15 },
        //     { src: mp16 },
        //     { src: mp17 },
        //     { src: mp18 },
        //     { src: mp19 },
        //     { src: mp20 },
        //     { src: mp21 },
        //     { src: mp22 },
        //     { src: mp23 },
        //     { src: mp24 },
        //     { src: mp25 },
        //     { src: mp26 },
        //     { src: mp27 },
        //     { src: mp28 },
        //     { src: mp29 },
        //     { src: mp30 },
        //     { src: mp31 },
        //     { src: mp32 },
        //     { src: mp33 },
        //     { src: mp34 },
        //     { src: mp35 },
        //     { src: mp36 },
        //     { src: mp37 },
        //     { src: mp38 },
        //     { src: mp39 },
        //     { src: mp40 },
        //     { src: mp41 },
        //     { src: mp42 },
        //     { src: mp43 },
        //     { src: mp44 },
        //     { src: mp45 },
        //     { src: mp46 },
        //     { src: mp47 },
        //     { src: mp48 },
        //     { src: mp49 },
        //     { src: mp50 },
        //     { src: mp50 },
        //     { src: mp51 },
        //     { src: mp52 },
        //     { src: mp53 },
        //     { src: mp54 },
        //     { src: mp55 },
        //     { src: mp56 },
        //   ];
        
        const arr = this.state.items.map( (item, index) => {
	
            return <Arraylis 
                     itemId={item.products.itemId}
                     catogary={item.products.catogaryName}
                     subcategaryName={item.products.subcatogaryName}
                     price={item.products.price} 
                    //  src={images[index].src}	
                    src={require(`./pics/indian/mp${index}.jpg`)}
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