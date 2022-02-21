
import './App.css';
import { createBrowserHistory } from 'history'
import { Route, Router, Switch } from 'react-router';
import { HomeTempate } from './templates/HomeTemplate/HomeTemplate'
import Home from './pages/Home/Home'
import Header from './templates/HomeTemplate/Layout/Header/Header';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Detail from './pages/Detail/Detail';
import CheckoutTemplate from './templates/CheckoutTemplate/CheckoutTemplate';
import Checkout from './pages/Checkout/Checkout';
import { Suspense, lazy } from 'react'
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import Loading from './component/Loading/Loading';
import { AdminTemplate } from './templates/AdminTemplate/AdminTemplate';
import Films from './pages/Admin/Films/Films';



// const CheckoutTemplateLazy = lazy(() => import('./templates/CheckoutTemplate/CheckoutTemplate'))

export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <Loading/>
      <Switch>
        <HomeTempate path="/home" exact Component={Home} />
        <HomeTempate path="/" exact Component={Home} />

        <HomeTempate path="/header" exact Component={Header} />
        <HomeTempate path="/news" exact Component={News} />
        <HomeTempate path="/detail/:id" exact Component={Detail} />
        <HomeTempate path="/contact" exact Component={Contact} />

        {/* <Route path="/login" exact component={Login} /> */}


        <CheckoutTemplate path="/checkout/:id" exact Component={Checkout} />
        {/* <Suspense fallback={<h1>LOADING...</h1>}>
          <CheckoutTemplateLazy path="/checkout/:id" exact Component={Checkout} />
        </Suspense> */}

        <UserTemplate path="/login" exact Component={Login}/>
        <UserTemplate path="/register" exact Component={Register}/>

        <AdminTemplate path="/admin" exact Component = {Films}/>

      </Switch>
    </Router>
  );
}

export default App;
