import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  
  // Simulated login function (replace with actual JWT authentication)
  const handleLogin = (user) => {
    setLoggedIn(true);
    setUsername(user);
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login">
            {loggedIn ? <Redirect to="/dashboard" /> : <Login onLogin={handleLogin} />}
          </Route>
          <Route exact path="/dashboard">
            {loggedIn ? <Dashboard username={username} /> : <Redirect to="/login" />}
          </Route>
          <Redirect from="/" to="/login" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;