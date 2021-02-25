import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './Components/Navbar/index'
import about from './Pages/about';
import service from './Pages/service';
import Read from './Pages/Music/Read';
import Create from './Pages/Music/Create';

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/about" component={about} />
      <Route path="/service" component={service} />
      <Route path="/mread" component={Read} />
      <Route path="/mcreate" component={Create} />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
