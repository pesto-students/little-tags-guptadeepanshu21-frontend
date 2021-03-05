import React, { useContext } from "react";
import { useIntl, FormattedMessage } from "react-intl";
import logo from "../../assets/images/logo.jpg";
import { Navbar, Nav, Form, FormControl, Row, Col } from "react-bootstrap";
import "./NavBar.css";
import LangSelector from "../LangSelector/LangSelector";
import { IntlContext } from "../../context/IntlContext";

function NavigationBar(props) {
  const { showLoginScreen  } = props;
  const intl = useIntl();
  const { formatMessage } = intl;
  
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
              <FormattedMessage id="men" defaultMessage="Men" />
            </Nav.Link>
            <Nav.Link href="#women">
              <FormattedMessage id="women" defaultMessage="Women" />
            </Nav.Link>
            <Nav.Link href="#kids">
              <FormattedMessage id="kids" defaultMessage="Kids" />
            </Nav.Link>
          </Nav>
          <Form inline className="searchbar">
            <FormControl
              type="text"
              size="sm"
              className="pl-4"
              placeholder={formatMessage({ id: "searchText" })}
            />
          </Form>

          <div className="login">
            <Col>
              <Row className="d-flex justify-content-center">
                <ion-icon name="log-in-outline"></ion-icon>
              </Row>
              <Row className="navbar-icon-text d-flex justify-content-center">
                <span onClick={showLoginScreen}>
                  <FormattedMessage id="login" defaultMessage="Log In" />
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
                <FormattedMessage id="profile" defaultMessage="Profile" />
              </Row>
            </Col>
          </div>
          <div className="bookmark">
            <Col>
              <Row className="d-flex justify-content-center">
                <ion-icon name="bookmark-outline"></ion-icon>
              </Row>
              <Row className="navbar-icon-text d-flex justify-content-center">
                <FormattedMessage id="wishlist" defaultMessage="Wishlist" />
              </Row>
            </Col>
          </div>
          <div className="cart">
            <Col>
              <Row className="d-flex justify-content-center">
                <ion-icon name="cart-outline"></ion-icon>
              </Row>
              <Row className="navbar-icon-text d-flex justify-content-center">
                <FormattedMessage id="cart" defaultMessage="Cart" />
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

export default NavigationBar;
