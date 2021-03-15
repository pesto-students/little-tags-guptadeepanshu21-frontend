import React, { useState, useEffect } from "react";
import "./Payment.css";
import CartProducts from "../CartProducts/CartProducts.js";
import { useStateValue } from "../../context/StateProvider";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../../context/reducer";
import axios from "../../utils/axios";
import { db } from "../../firebase/firebaseConfig";
import StripeCheckout from 'react-stripe-checkout';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import {Form, Col, Row, Button} from 'react-bootstrap'

function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();

  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  const handleCountry = (e) =>{
    setCountry(e.target.value)
  }

  const handleRegion = (e) => {
    setRegion(e.target.value)
  }

  const priceForStripe = getCartTotal(cart) * 100;
  const publishableKey = 'pk_test_b7a3hFL5nC3qlBCZ6bQACpez00gyMMP52H';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        alert('succesful payment');
      })
      .catch(error => {
        console.log('Payment Error: ', JSON.parse(error));
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
      });
  };

  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret which allow us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getCartTotal(cart) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
      console.log("secret is -> ", clientSecret);
    };

    getClientSecret();
  }, [cart]);

  const handleSubmit = async (e) => {
    // for all fancy stripe
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // payment intent = payment confirmation

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            cart: cart,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/orders");
      });
  };

  const handleChange = (e) => {
    // llisten for change of cardemelement
    // and display error
    setDisabled(false);
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout(<Link to="">{cart?.length} items</Link>)
        </h1>

        {/* Delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className = "shipping">
            <p>{user?.email}</p>

            {/* <p>221B, Baker Street</p>
            <p>New Delhi - 110064</p> */}
            {/* <Form.Group>
            <Form.Control size="sm" type="text" placeholder="Full Name" />
            <br />
            <Form.Control size="sm" type="text" placeholder="221B Baker Street" />
             <br />
             <Form.Control type="sm" placeholder="Appartment or Suite" />
            
           
            <br />
            <CountryDropdown
            value={country}
           onChange={(val) => handleCountry(val)} />
            <RegionDropdown
          country={country}
          value={region}
          onChange={(val) => handleRegion(val)} />
           </Form.Group> */}

<Form >
  <Form.Row>
    <Form.Group controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group controlId="formGridPassword">
      <Form.Label>Contact</Form.Label>
      <Form.Control type="number" placeholder="Contact No." />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="221B Baker St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>
  {/* <CountryDropdown
            value={country}
           onChange={(val) => handleCountry(val)} /> */}
  <Form.Row>
           
    <Form.Group controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group  controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group  controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Button variant="primary" type="submit">
    Save
  </Button>
</Form>

          </div>
        </div>
        {/* review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
            {cart.map((item, index) => (
              <CartProducts
                key={index}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        </div>
        {/* payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="stripe">
            {/* Stripe Magic */}


            

            <form  onSubmit={handleSubmit}>
            
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total : {value}</h3>}
                  decimalScale={2}
                  value={getCartTotal(cart)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />

                {/* <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : <p>Buy Now</p>}</span>
                </button> */}
              </div>

              {error && <div>error</div>}
            </form>

            <StripeCheckout
      label='Pay Now'
      name='Clothify Ltd.'
      billingAddress
      shippingAddress
      image='https://my-clothify.netlify.app/static/media/logo.713d92c7.jpg'
      description={`Your total is ₹ ${getCartTotal(cart)}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
      
    />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;