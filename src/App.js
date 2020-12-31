import React, { Suspense, lazy } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Counter = lazy(() => import('./components/Counter'));
const Random = lazy(() => import('./components/Random'));
const FatherCom = lazy(() => import('./components/Father'));
const ChildCom = lazy(() => import('./components/Child'));
const FetchCom = lazy(() => import('./components/Fetch'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Link to="/count/:id">to Counter</Link><br />
            <Link to="/random">to Random</Link><br />
            <Link to="/father">to FatherCom</Link>
            <Link to="/fetch">to FetchCom</Link>
              <Route path="/count/:id" component={Counter} />
              <Route path="/random" component={Random} />
              <Route path="/father" component={FatherCom} >
                <Route path="/father/child" component={ChildCom} />
              </Route>
              <Route path="/fetch" component={FetchCom} />
          </Suspense>
        </Router>
      </header>
    </div>
  );
}

export default App;
