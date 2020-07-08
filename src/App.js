import React from 'react';
import Main3 from './Main3';
import Footer from './Footer';
import Main1 from './Main1'
import Admin from './Admin'
import Document from './Document'
import Document2 from './Document2'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      {/* <Main3 />  */}
      <Route exact path="/" component={Main3} />  
      <Route exact path="/Main1" component={Main1} /> 
      <Route exact path="/Admin" component={Admin} />
      <Route exact path="/Document" component={Document} /> 
      <Route exact path="/Document2" component={Document2} /> 
      <Footer /> 
    </div>
    </Router>
  
  );
}

export default App;
