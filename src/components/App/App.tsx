import React, { useEffect } from 'react';
import 'components/App/App.css';
import PageProducts from "components/pages/PageProducts/PageProducts";
import MainLayout from "components/MainLayout/MainLayout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PageProductForm from "components/pages/PageProductForm/PageProductForm";
import PageCart from "components/pages/PageCart/PageCart";
import PageOrders from "components/pages/PageOrders/PageOrders";
import PageOrder from "components/pages/PageOrder/PageOrder";
import PageProductImport from "components/pages/admin/PageProductImport/PageProductImport";

const USERNAME = 'kalinkinfiz';
const PASSWORD = 'TEST_PASSWORD';

function App() {

  useEffect(() => {
    const authorization_token = localStorage.getItem('authorization_token');
    if (!authorization_token) {
      localStorage.setItem('authorization_token', btoa(`${USERNAME}:${PASSWORD}`))
    }
  }, [])

  return (
    <Router>
      <Switch>
        <Route path="/">
          <MainLayout>
            <Route exact path="/">
              <PageProducts/>
            </Route>
            <Route exact path={["/admin/product-form/:id", '/admin/product-form']}>
              <PageProductForm/>
            </Route>
            <Route exact path="/cart">
              <PageCart />
            </Route>
            <Route exact path="/admin/orders">
              <PageOrders />
            </Route>
            <Route exact path="/admin/order/:id">
              <PageOrder />
            </Route>
            <Route exact path="/admin/products">
              <PageProductImport />
            </Route>
          </MainLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
