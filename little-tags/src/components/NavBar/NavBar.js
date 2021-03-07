import React from 'react'
import logo from '../../assets/images/logo.jpg';
import {Navbar,Nav,Form,FormControl,Row,Col} from 'react-bootstrap';
import './NavBar.css';

function NavigationBar() {
  return (
    <div>
       <div className="Navtop fixed-top">
            <Navbar className="shadow p-3 mb-5">
          <Navbar.Brand href="#home" className="mainlogo">
          <a href="/">
          <img
              src={logo}
              height="48"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            </a>
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#men">MEN</Nav.Link>
            <Nav.Link href="#women">WOMEN</Nav.Link>
            <Nav.Link href="#kids">KIDS</Nav.Link>
            <Nav.Link href="#essentials">TRENDING</Nav.Link>
          </Nav>
          <Form inline className="searchbar">
            <FormControl type="text" size="lg" className="pl-4" placeholder="Search for products, brands and more" />
          </Form>

          <div className="login">
              <Col>
                <Row className="d-flex justify-content-center">
                <ion-icon name="log-in-outline"></ion-icon>
                </Row>
                <Row className="navbar-icon-text d-flex justify-content-center">
                  Log In
                </Row>
              </Col>
        </div>

          <div className="user">
              <Col>
                <Row className="d-flex justify-content-center">
                <ion-icon name="person-outline"></ion-icon>
                </Row>
                <Row className="navbar-icon-text d-flex justify-content-center">
                  Profile
                </Row>
              </Col>
        </div>
        <div className="bookmark">
          <Col>
            <Row className="d-flex justify-content-center">
            <ion-icon name="bookmark-outline" ></ion-icon>
            </Row>
            <Row className="navbar-icon-text d-flex justify-content-center">
              Wishlist
            </Row>
          </Col>
        </div>
        <div className="cart">
          <Col>
            <Row className="d-flex justify-content-center">
            <ion-icon name="cart-outline"></ion-icon>
            </Row>
            <Row className="navbar-icon-text d-flex justify-content-center">
              Cart
            </Row>
          </Col>
        </div>
        <div className="language">
          <Col>
            <Row className="d-flex justify-content-center">
            <ion-icon name="globe-outline"></ion-icon>
            </Row>
            <Row className="navbar-icon-text d-flex justify-content-center">
              EN
            </Row>
          </Col>
        </div>
      </Navbar>
      </div>
    </div>
  )
}

export default NavigationBar

