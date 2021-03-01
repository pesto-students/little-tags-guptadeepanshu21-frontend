import { Button, Row, Container } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  return (
    <Container className="login-container">
      <Row>
        <button className="loginBtn loginBtn--facebook">Login with Facebook</button>
      </Row>
      <Row>
        <button className="loginBtn loginBtn--google">Login with Google</button>
      </Row>
      <Button className="login-btn" variant="dark">Log In</Button>
    </Container>
  );
};

export default Login;
