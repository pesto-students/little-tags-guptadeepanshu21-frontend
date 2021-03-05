import { Button, Row, Container } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import "./Login.css";

const Login = () => {
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
        <button className="loginBtn loginBtn--google">
          <FormattedMessage
            id="loginGoogle"
            defaultMessage="Login with Google"
          />
        </button>
      </Row>
      <Button className="login-btn" variant="dark">
        <FormattedMessage id="login" defaultMessage="Login" />
      </Button>
    </Container>
  );
};

export default Login;
