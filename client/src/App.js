import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import Navbar from './components/navbar'
import MainBody from './components/mainBody'
import Contact from './components/Contact'
import Footer from './components/footer'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Bio from './components/Bio';
import MyWork from './components/MyWork';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className='Header'>
            <Header />
          </div>
          <div className='Navbar'>
            <Navbar />
          </div>
          <div>
            <Route exact path="/" component={MainBody} />
            <Route exact path="/Bio" component={Bio} />
            <Route exact path="/Work" component={MyWork} />
            <Route exact path="/Contact" component={Contact}/>
          </div>
          <div className='Footer'>
            <Footer />
          </div>
        </div>
      </Router>
      
    );
  }
}

export default App;


// BrowserRouter is the router implementation for HTML5 browsers (vs Native).
// Link is your replacement for anchor tags.
// Route is the conditionally shown component based on matching a path to a URL.
// Switch returns only the first matching route rather than all matching routes.
// import {
//   BrowserRouter as Router,
//   Link,
//   Route,
//   Switch,
// } from 'react-router-dom';
// import React from 'react';

// const Home = () => <h1>Home</h1>;
// const About = () => <h1>About</h1>;

// // We give each route either a target `component`, or we can send functions in `render` or `children` 
// // that return valid nodes. `children` always returns the given node whether there is a match or not.
// const App = () => (
//   <Router>
//     <div>
//       <Link to="/">Home</Link>{' '}
//       <Link to={{ pathname: '/about' }}>About</Link>{' '}
//       <Link to="/contact">Contact</Link>

//       <Switch>
//         <Route path="/" component={Home} />
//         <Route path="/about" component={About} />
//         <Route
//           path="/contact"
//           render={() => <h1>Contact Us</h1>} />
//         <Route path="/blog" children={({ match }) => (
//           <li className={match ? 'active' : ''}>
//             <Link to="/blog">Blog</Link>
//           </li>)} />
//         <Route render={() => <h1>Page not found</h1>} />
//       </Switch>
//     </div>
//   </Router>
// );
// export default App;