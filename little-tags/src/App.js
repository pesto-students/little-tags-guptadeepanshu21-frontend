import React, { useState } from 'react';
import { useEffect } from 'react'
import "./App.css";
import {Route, Switch} from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import ProductListPage from './Pages/ProductListPage'
import {IntlContextProvider} from "./context/IntlContext";
import CartPage from "./Pages/CartPage";
import PaymentPage from "./Pages/PaymentPage"
import 'react-toastify/dist/ReactToastify.css';
import { auth, db } from './firebase/firebaseConfig';
import { useStateValue } from './context/StateProvider';
import Login from './components/Login/Login'


function App() {
   
  const [profile, setProfile] = useState([]);
  const [products, setProducts] = useState([]);
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      // user is logged in
      dispatch({
        type: "SET_USER",
        user: authUser ? authUser : null
      })
    })

    return () => {
      // any cleanup
      unsubscribe()
    }
  }, [])

  useEffect(() => {
    if (user && profile) {
      db.collection('users').doc(user?.uid).collection('profile')
        .onSnapshot(snapshot => (
          setProfile(snapshot.docs.map(doc => doc.data()))
        ))
    }
    else
      setProfile([])

    if (user && products) {
      db.collection('products').doc().collection('products')
        .onSnapshot(snapshot => (
          setProducts(snapshot.docs.map(doc => doc.data()))
        ))
    }
    else
      setProducts([])
  }, [user])

  useEffect(() => {
    dispatch({
      type: "SET_PROFILE",
      userName: profile[0],
    });
  }, [profile])

  console.log(profile)
  return (
    <div className="main">
      <IntlContextProvider>

       <Switch>
          <Route exact path ='/' component = {LandingPage} />
          <Route path ='/products' component = {ProductListPage} />
          <Route path ='/cart' component = {CartPage} />
          <Route path ='/payment' component = {PaymentPage} />
          <Route path ='/login' component = {Login} />
        </Switch>
      </IntlContextProvider>
    
    </div>
  );
}

export default App;
