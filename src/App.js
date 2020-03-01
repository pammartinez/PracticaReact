import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter as Router, Switch, Route,Link  } from 'react-router-dom'
import Home from './components/home'
import Login from './components/login'
import Register from './components/register'
import Listadverts from './components/listadverts'
import Cardsadverts from './components/cardsadverts'
import Editcardadverts from './components/editcardadverts'
import Addcardadverts from './components/addcardadverts'

function App() {
  return (
   <div>
    <Router>
   {/*<ul>
       <li>
            <Link to="/">Home</Link>
            </li>       
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/Register">Register</Link>
            </li> 
             <li>
              <Link to="/listadverts">Listadverts</Link>
            </li>
            <li>
              <Link to="/cardsadverts">Cardsadverts</Link>
            </li> 
      </ul> */}
      <Switch>
          <Route exact path="/" component={Home} /> 
          <Route  exact path="/register" component={Register} />
          <Route  exact path="/login" component={Login} />
          <Route  path="/listadverts" component={Listadverts} />
          <Route  path="/cardsadverts/Editar/:id" component={Editcardadverts} />
          <Route  path="/cardsadverts/Anadir" component={Addcardadverts} />
          <Route  path="/cardsadverts/:id" component={Cardsadverts} />
         
    
        {/*<Route path={`/cardsadverts/:topicId`} component={Cardsadverts} />
          <Route  exact path={this.props.match.path}
            render={() => <h3>Please select a topic.</h3>}*/}
          />
      </Switch>
    </Router>
  </div>
  )
}

export default App;
