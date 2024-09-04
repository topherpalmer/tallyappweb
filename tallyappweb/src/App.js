import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import { useHistory } from 'react-router-dom'; // or 'next/router' if using Next.js

import Index from './indexndex'; // The main/index page
import Login from './login'; // The login page

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './login';
import Index from './index';

const Root = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Index} />
      <Route component={App} /> {/* This will check for authentication and redirect accordingly */}
    </Switch>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const checkUser = async () => {
      try {
        await Auth.currentAuthenticatedUser();
        setIsAuthenticated(true);
        history.push('/'); // Redirect to the main page if authenticated
      } catch (error) {
        setIsAuthenticated(false);
        history.push('/login'); // Redirect to the login page if not authenticated
      }
    };

    checkUser();
  }, [history]);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Optionally, show a loading indicator while checking authentication
  }

  return isAuthenticated ? <Index /> : <Login />;
};

export default App;

