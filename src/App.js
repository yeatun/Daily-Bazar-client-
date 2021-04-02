import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';

import AddProducts from './Components/AddProducts/AddProducts';
import Login from './Components/LoginPage/Login';
import Orders from './Components/Orders/Orders';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown } from 'react-bootstrap';

import ManageProduct from './Components/AddProducts/ManageProduct/ManageProduct';
import Order from './Components/Order/Order';


export const UserContext =createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState ({});
 

  return ( <div className="App">
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
     
        
          
          
            <nav className="nav" className="navbar navbar-light bg-light justify-content-left nav ">
            <Link to="/"><h1>Daily Bazar</h1></Link>
            <Link to="/">Home</Link>
        
        <Link to="/order">orders</Link>
      
      
        <Link to="/AddProducts">Admin</Link>

        <NavDropdown title="Admin" id="basic-nav-dropdown">
       
        <Link to="/manageProduct">ManageProduct</Link>
        
        <NavDropdown.Divider />
       
      </NavDropdown>
      <Link to="/login">login</Link>
      
        <Link > {loggedInUser.email}</Link>
            </nav>
           
          

        

       
        <Switch>
          <Route exact path="/">
            <Home />
            
          </Route>
          <PrivateRoute path="/product/:productId">
            <Orders />
          </PrivateRoute>
          
          <PrivateRoute path="/AddProducts">
            <AddProducts />
            
          </PrivateRoute>
          <PrivateRoute path="/ManageProduct">
            <ManageProduct />

          </PrivateRoute>
          
          <PrivateRoute path="/order">
            <Order />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      
    </Router>
    </UserContext.Provider>
    </div>
  );
}

export default App;
