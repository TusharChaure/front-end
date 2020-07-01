import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

import { register } from './components/login/UserFunctions';

import log1 from './UI/log1.png'

import logo2 from './UI/logo2.png'

import Signin from './Signin'

import back1 from './UI/food.jpg'

import './Signup.css';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import logo1 from './UI/logo1.png'

export default class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
          username:'',
          phone:'',
          email: '',
          password:'',
          name:'',
          address:'',
          status:'customer',
    
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
      }
    
      onChange(e){
        this.setState({[e.target.name]: e.target.value})
      }
    
      onSubmit(e){
        e.preventDefault()
    
        const user = {
          username: this.state.username,
          phone: this.state.phone,
          email: this.state.email,
          password: this.state.password,
          name: this.state.name,
          address: this.state.address,
          status: this.state.status,
        }
    
        register(user).then(res => { if(res) {
            this.props.history.push(`\Signin`)
        }
      }) 

      }
    
    render() {
    
    return (
    
    <div>
    
    <div className="">
    
    <div className="row">

    <div className="login-sec" style={{width:'35%'}}>
    
    <img src={logo2} alt='login image' style={{ width:'50%', height:'20%' }}/> 
    
    <Form onSubmit={this.onSubmit} style={{marginTop:'3%'}}>
    
    <FormGroup>
    
    {/* <Label for="exampleName">User Name</Label> */}
    
    <Input type="text" name="username" value={this.state.username} onChange={this.onChange} required placeholder="Username" />
    
    </FormGroup>

    <FormGroup>
    
    {/* <Label for="exampleName">Name</Label> */}
    
    <Input type="text" name="name" value={this.state.name} onChange={this.onChange} required placeholder="Name" />
    
    </FormGroup>
    
    <FormGroup>
    
    {/* <Label>Mobile No.</Label> */}
    
    <Input type="text" name="phone" value={this.state.phone} onChange={this.onChange} required placeholder="Mobile No." />
    
    </FormGroup>
    
    <FormGroup>
    
    {/* <Label>Email</Label> */}
    
    <Input type="email" name="email" value={this.state.email} onChange={this.onChange} required placeholder="E-mail" />
    
    </FormGroup>
    
    <FormGroup>
    
    {/* <Label >Password</Label> */}
    
    <Input type="password" name="password" value={this.state.password} onChange={this.onChange} required placeholder="Password" />
    
    </FormGroup>

    <FormGroup>
    
    {/* <Label >Address</Label> */}
    
    <Input type="text" name="address"  value={this.state.address} onChange={this.onChange} placeholder="Address" />
    
    </FormGroup>

    <FormGroup>
    
    {/* <Label >Status</Label> */}
    
    {/* <Input type="text" name="status" value={this.state.status} onChange={this.onChange} required placeholder="e.g. customer/homechef/serviceboy" />
     */}
    <select name="status" value={this.state.value} onChange={this.onChange} style={{width:'100%', height:'40px',borderRadius:'5px'}}>
            <option value="customer">customer</option>
            <option value="homechef">homechef</option>
            <option value="delivery boy">delivary boy</option>
    </select>
    </FormGroup>
    
    <div className="d-flex justify-content-center mt-3 login_container">
    
    <Button type="submit" className="btn btn-login">Register</Button>
    
    </div>
    
    <div className="mt-4">
    
    <div className="d-flex justify-content-center links">
    
    {/* <a href="/Signin"><p style={{float:'right', color:'#9C9C9B'}}>Login here</p></a> */}
    
    </div>

    </div>
    
    </Form>
    
    </div>

    <div className="banner-sec" style={{width:'55%'}}><img src={log1} alt='login image' style={{ width:'100%', height:'85%' }}/></div>

    </div>

    </div>
    
    </div>
    
    
    
    )
    
    }
    
    }