import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Button, Form, FormGroup, Label, Jumbotron, Input} from 'reactstrap';

import { Row,Col } from 'react-bootstrap';

import { login } from './components/login/UserFunctions';
 
import log1 from './UI/log1.png'

import logo2 from './UI/logo2.png'

import './Signup.css';

import axios from 'axios';

import back1 from './UI/food.jpg'

import {useHistory} from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main1 from './Main1'


export default class Signin extends Component {


    constructor(props) {
        super(props)
        this.state = {
          username:'',
          password:'',
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
          password: this.state.password,
          status: this.state.status,
        }
        localStorage.setItem("status",this.state.status)
        console.log(localStorage.status)
        console.log(user)
        login(user).then(res => {
          if(res) {
            if(localStorage.status=="homechef"){
            this.props.history.push("/Main1") 
            // window.location.reload(1000);
            }
            else if(localStorage.status=="customer"){
              // this.props.history.push("/")
              // window.location.reload(1000);
            }
            else if(localStorage.status=="admin"){
              this.props.history.push("/Admin")
            // window.location.reload(1000);
            }
        }})

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
    
    <Label for="exampleName"></Label>
    
    <Input type="text" name="username" value={this.state.username} onChange={this.onChange} required placeholder="Username" />
    
    </FormGroup>
    
    <FormGroup>
    
    <Label ></Label> 
    
    <Input type="password" name="password" value={this.state.password} onChange={this.onChange} required placeholder="Password" />
    
    </FormGroup>

    <FormGroup>
    
    <Label ></Label>
    
     {/* <Input type="text" name="status" value={this.state.status} onChange={this.onChange} required placeholder="Enter a password" />  */}
    <br />
    <select name="status" value={this.state.value} onChange={this.onChange} style={{width:'100%', height:'40px',borderRadius:'5px'}}>
            <option value="customer">customer</option>
            <option value="homechef">homechef</option> 
            <option value="admin">Admin</option>
    </select>

    </FormGroup>

    <FormGroup>
    
    <Label ></Label>
    
    {/* <a href="/Signup"><p style={{float:'right', color:'#9C9C9B'}}>Signup here</p></a> */}

    </FormGroup>
    
    <div className="d-flex justify-content-center mt-4 login_container">
    
    <Button type="submit" className="btn btn-login" style={{marginTop:'5%'}}>Login</Button>
    
    </div>
    
    </Form>
    
    </div>

    <div className="" style={{width:'55%'}}><img src={log1} alt='login image' style={{ width:'100%', height:'85%' }}/></div>

    </div>

    </div>
    
    </div>
    
    
    
    
    )
    
    }
    
    }