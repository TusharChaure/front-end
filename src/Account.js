import React, {Component} from 'react' 
import axios from 'axios'
// import Accountlist from './Accountlist'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Account extends Component {
    
    constructor(){
        super();
        this.state = {
            items: [],  
        }
    }


    componentDidMount() {
        toast.configure()
        axios.get('http://165.22.208.232:5000/users/profile', {
        // axios.get('users/profile', {
            headers: {
              'auth-token': localStorage.usertoken
            }})
         .then(res => {
             console.log(res)
             console.log(res.data.data)
             if(res.data.status==true){
                this.setState({items: res.data.data})
            }
            else if(res.data.status==false){
                // alert(res.data.error)
                toast(res.data.error, {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
            } 
         }
         )
         .catch(error => {
            // alert("login first");
            toast("Login First!!", {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
        })
    }

    render() {
        
        return (
            <div>
                <div >
                    <div style={{backgroundColor:'white',width:'300%', marginTop:'3%', paddingBottom:'2%'}}>
                        <h4 style={{textAlign:'left', marginLeft:'2%'}}>User info</h4>
                        <hr style={{borderColor:'white'}}/>
                        <form id="form" onSubmit={this.handleSubmit}>
                            <hr style={{borderColor:'white'}}/>
                            <div className="col-lg-10 col-sm-20">
                                <div className="col-lg-10 col-sm-20" style={{color:'green', textAlign:'left', margin:'2% 0'}}>
                                <p style={{margin:'2% 0'}}>Name:</p>
                                <input
                                    readOnly
                                    type="text"
                                    name="username"
                                    id="username"
                                    className="form-control"
                                    placeholder={this.state.items.name}
                                    // placeholder="Tushar Chaure"
                                    style={{backgroundColor:'white'}}
                                />
                                </div>
                                <div className="col-lg-10 col-sm-20" style={{color:'green', textAlign:'left', margin:'2% 0'}}>
                                <p style={{margin:'2% 0'}}>Phone:</p>
                                <input
                                    readOnly
                                    type="text"
                                    name="address"
                                    id="address"
                                    placeholder={this.state.items.phone}
                                    // placeholder="90909090"
                                    className="form-control"
                                    style={{backgroundColor:'white'}}
                                />
                                </div>
                                <div className="col-lg-10 col-sm-20" style={{color:'green', textAlign:'left', margin:'2% 0'}}>
                                <p style={{margin:'2% 0'}}>Email:</p>
                                <input
                                    readOnly
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder={this.state.items.email}
                                    // placeholder="Chauretushar444@gmail.com"
                                    style={{backgroundColor:'white'}}
                                />
                                </div>
                                <div className="col-md-10 col-sm-20" style={{color:'green', textAlign:'left', margin:'2% 0'}}>
                                <p style={{margin:'2% 0'}}>Username:</p>
                                <input
                                readOnly
                                        maxLength="10"
                                        type="text"
                                        name="phonenumber"
                                        id="phonenumber"
                                        placeholder={this.state.items.username}
                                        // placeholder="tdChaure"
                                        className="form-control"
                                        style={{backgroundColor:'white'}}
                                />
                                </div>
                                <div className="col-md-10 col-sm-20" style={{color:'green', textAlign:'left', margin:'2% 0'}}>
                                <p style={{margin:'2% 0'}}>Location:</p>
                                <input
                                readOnly
                                        maxLength="10"
                                        type="text"
                                        name="phonenumber"
                                        id="phonenumber"
                                        placeholder="India"
                                        // placeholder="tdChaure"
                                        className="form-control"
                                        style={{backgroundColor:'white'}}
                                />
                                </div>
                                <div className="col-md-10 col-sm-20" style={{color:'green', textAlign:'left', margin:'2% 0'}}>
                                <p style={{margin:'2% 0'}}>Address:</p>
                                <input
                                readOnly
                                        maxLength="10"
                                        type="text"
                                        name="address"
                                        id="address"
                                        placeholder={this.state.items.address}
                                        className="form-control"
                                        style={{backgroundColor:'white'}}
                                />
                                </div>
                            </div>
                        </form> 
                    </div>
                </div>
            </div>
           
        )
    }
    
}
    



export default Account;