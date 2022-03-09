import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageDetailAI from './views/pageDetailAI';
import PageDetailIOT from './views/pageDetailIOT';
import PageDetailTravel from './views/pageDetailTravel';
import PageDetailEcommerce from './views/pageDetailEcommerce';
import PageDetailCRM from './views/pageDetailCRM';
import PageDetailTransport from './views/pageDetailTransport';
import PageDetailHRM from './views/pageDetailHRM';
import PageDetailHealth from './views/pageDetailHealth';
import PageDetailLoyalty from './views/pageDetailLoyalty';
import PageContact from './views/pageContact';
import PageAdmin from './admin/homeAdmin';
import PageAddProduct from './admin/products/addProduct';
import PageProductManagement from './admin/productManagement';
import PageLogin from './admin/login';
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/admin" component={PageAdmin} />
      <Route exact path="/addProduct" component={PageAddProduct} />
      <Route exact path="/productManagement" component={PageProductManagement} />
      <Route path="/products/:code" component={PageDetailAI} />
      <Route path="/pageDetailIOT" component={PageDetailIOT} />
      <Route path="/pageDetailTravel" component={PageDetailTravel} />
      <Route path="/pageDetailEcommerce" component={PageDetailEcommerce} />
      <Route path="/pageDetailCRM" component={PageDetailCRM} />
      <Route path="/pageDetailLoyalty" component={PageDetailLoyalty}></Route>
      <Route path="/pageDetailTransport" component={PageDetailTransport} />
      <Route path="/pageDetailHRM" component={PageDetailHRM} />
      <Route path="/pageDetailHealth" component={PageDetailHealth} />
      <Route path="/pageContact" component={PageContact} />
      <Route exact path="/login" component={PageLogin} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
