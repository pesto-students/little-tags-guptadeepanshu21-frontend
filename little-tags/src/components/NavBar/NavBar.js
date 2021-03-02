import React, { useContext } from "react";
import { injectIntl } from "react-intl";
import logo from "../../assets/images/logo.jpg";
import { Navbar, Nav, Form, FormControl, Row, Col } from "react-bootstrap";
import "./NavBar.css";
import LangSelector from "../LangSelector/LangSelector";
import { IntlContext } from "../../context/IntlContext";

function NavigationBar(props) {
  const { showLoginScreen, intl } = props;
  const { formatMessage } = intl;
  const { messages } = useContext(IntlContext);
  return (
    <div>
      <div className="Navtop fixed-top">
        <Navbar className="shadow p-3 mb-5">
          <Navbar.Brand href="#home" className="mainlogo">
            <img
              src={logo}
              height="48"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#men">
              {formatMessage({ id: messages.men })}
            </Nav.Link>
            <Nav.Link href="#women">
              {formatMessage({ id: messages.women })}
            </Nav.Link>
            <Nav.Link href="#kids">
              {formatMessage({ id: messages.kids })}
            </Nav.Link>
          </Nav>
          <Form inline className="searchbar">
            <FormControl
              type="text"
              size="sm"
              className="pl-4"
              placeholder={formatMessage({ id: messages.searchText })}
            />
          </Form>

          <div className="login">
            <Col>
              <Row className="d-flex justify-content-center">
                <ion-icon name="log-in-outline"></ion-icon>
              </Row>
              <Row className="navbar-icon-text d-flex justify-content-center">
                <span onClick={showLoginScreen}>
                  {formatMessage({ id: messages.login })}
                </span>
              </Row>
            </Col>
          </div>

          <div className="user">
            <Col>
              <Row className="d-flex justify-content-center">
                <ion-icon name="person-outline"></ion-icon>
              </Row>
              <Row className="navbar-icon-text d-flex justify-content-center">
                {formatMessage({ id: messages.profile })}
              </Row>
            </Col>
          </div>
          <div className="bookmark">
            <Col>
              <Row className="d-flex justify-content-center">
                <ion-icon name="bookmark-outline"></ion-icon>
              </Row>
              <Row className="navbar-icon-text d-flex justify-content-center">
                {formatMessage({ id: messages.wishlist })}
              </Row>
            </Col>
          </div>
          <div className="cart">
            <Col>
              <Row className="d-flex justify-content-center">
                <ion-icon name="cart-outline"></ion-icon>
              </Row>
              <Row className="navbar-icon-text d-flex justify-content-center">
                {formatMessage({ id: messages.cart })}
              </Row>
            </Col>
          </div>
          <div className="language">
            <Col>
              <Row className="d-flex justify-content-center">
                <ion-icon name="globe-outline"></ion-icon>
              </Row>
              <Row className="navbar-icon-text d-flex justify-content-center">
                <LangSelector />
              </Row>
            </Col>
          </div>
        </Navbar>
      </div>
    </div>
  );
}

export default injectIntl(NavigationBar);
