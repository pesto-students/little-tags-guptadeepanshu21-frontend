import { useContext } from "react";
import { Button, Row, Container } from "react-bootstrap";
import { injectIntl } from "react-intl";
import { IntlContext } from "../../context/IntlContext";
import "./Login.css";

const Login = (props) => {
  const { intl } = props;
  const { formatMessage } = intl;
  const { messages } = useContext(IntlContext);
  return (
    <Container className="login-container">
      <Row>
        <button className="loginBtn loginBtn--facebook">
          {formatMessage({ id: messages.loginFacebook })}
        </button>
      </Row>
      <Row>
        <button className="loginBtn loginBtn--google">
        {formatMessage({ id: messages.loginGoogle })}
        </button>
      </Row>
      <Button className="login-btn" variant="dark">
      {formatMessage({ id: messages.login })}
      </Button>
    </Container>
  );
};

export default injectIntl(Login);
