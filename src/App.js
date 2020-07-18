import React from 'react';
import Main3 from './Main3';
import Footer from './Footer';
import Main1 from './Main1'
import Admin from './Admin'
import Document from './Document'
import Document2 from './Document2'
import Main31 from './Main31'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Maps from './Maps'
import Main4 from './newui/Main4'
import Vtab1 from './Vtab1'
import Orders from './Orders'
import Cart from './Cart'
import Account1 from './Account1'
import Signin from './Signin'
import Signup from './Signup'
import Tab2 from './Tab2'
import About from './About'
import Products from './Products'

function App() {
  return (
    <Router>
    <div className="App">
      {/* <Main3 />  */}
      <Route exact path="/" component={Main3} />  
      <Route exact path="/Main31" component={Main31} />
      <Route exact path="/Main1" component={Main1} /> 
      <Route exact path="/Admin" component={Admin} />
      <Route exact path="/Document" component={Document} /> 
      <Route exact path="/Document2" component={Document2} /> 
      <Route exact path='/Tab2' component={Tab2} />
      <Footer /> 
    </div>
    </Router>
  
  );
}

export default App;
