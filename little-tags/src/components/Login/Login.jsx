import { Button, Row, Container } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import "./Login.css";
import { Link, useHistory } from 'react-router-dom'
import { provider, auth } from '../../firebase/firebaseConfig'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {

  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginWithGoogle = (e) => {
    e.preventDefault() //stops refresh

    auth.signInWithPopup(provider)
        .then(function (result) {
            // redirect to homepage
            toast.success(`Login Successful, redirecting to homepage`);
            setTimeout(function () { history.push("/") }, 1000);
        })
        .catch(e => {
            toast.error(`unable to login, please check your credentials`);
            setTimeout(function () { history.push("/login") }, 4000);
            console.warn(e.message)
        });
}

  return (
    <Container className="login-container">
      <Row>
        <button className="loginBtn loginBtn--facebook">
          <FormattedMessage
            id="loginFacebook"
            defaultMessage="Login with Facebook"
          />
        </button>
      </Row>
      <Row>
        <button className="loginBtn loginBtn--google" onClick={loginWithGoogle}>
          <FormattedMessage
            id="loginGoogle"
            defaultMessage="Login with Google"
            
          />
        </button>
      </Row>
      {/* <Button className="login-btn" variant="dark">
        <FormattedMessage id="login" defaultMessage="Login" />
      </Button> */}
    </Container>
  );
};

export default Login;
