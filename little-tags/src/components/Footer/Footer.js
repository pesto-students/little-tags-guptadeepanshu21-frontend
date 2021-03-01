import React from 'react'
import {Row,Col,ListGroup, InputGroup, FormControl, Button} from 'react-bootstrap';
import './Footer.css';

function Footer() {
    return (
            <div className="footer">
                <div className="rowforfooter">  
                {/* <Row>
                  <div>
                    <span>Back To Top</span>
                  </div>
                </Row> */}
                <Row>
                <div className="online">
                  <Col>
                  <ListGroup>
                  <ListGroup.Item><span className="top">CATEGORIES</span></ListGroup.Item>
                  <ListGroup.Item>Men</ListGroup.Item>
                  <ListGroup.Item>Women</ListGroup.Item>
                  <ListGroup.Item>Kids</ListGroup.Item>
                  <ListGroup.Item>Deals for the Day</ListGroup.Item>
                </ListGroup>
                  </Col>
                  </div>
                  <div className="online">
                  <Col>
                  <ListGroup>
                  <ListGroup.Item><span class="top">USEFUL LINKS</span></ListGroup.Item>
                  <ListGroup.Item>Contact Us</ListGroup.Item>
                  <ListGroup.Item>Track Orders</ListGroup.Item>                
                 </ListGroup>
                  </Col>

                  </div>
                  <div className="online">
                  <Col>
                  <ListGroup>                 
                  <ListGroup.Item><span className="top">CONNECT WITH US</span></ListGroup.Item>
                  <ListGroup.Item>
                  <div className="icons">
                  <ion-icon name="logo-facebook"></ion-icon>
                  <ion-icon name="logo-twitter"></ion-icon>
                  <ion-icon name="logo-youtube"></ion-icon>
                  <ion-icon name="logo-instagram"></ion-icon>
                  </div>
                  </ListGroup.Item>
                </ListGroup>
                  </Col>
                  </div>                

                  <div className="online">
                  <Col>
                  <ListGroup>
                  <ListGroup.Item>
                  <span className="top">KEEP UPTO DATE WITH <br/> LATEST NEWS AND SPECIAL OFFERS</span>
                  </ListGroup.Item>
                  <ListGroup.Item>                 
                   <InputGroup className="mb-3 input">
                   <FormControl
                      className="button" 
                      placeholder="Enter Email ID here"
                      aria-label="Enter Email ID here"
                      aria-describedby="basic-addon2"
                      required
                    />
                    <InputGroup.Append>
                      <Button className="button" size="sm" variant="outline-secondary">Submit</Button>
                    </InputGroup.Append>
                  </InputGroup>
                  </ListGroup.Item>
                  </ListGroup>
                  </Col>
                  </div>
                </Row>

                <div className="copyright">
                  <hr/>
                <p>© 2021 Clothify. All Rights Reserved.</p>
                </div>
                
        </div>
        </div>
    )
}

export default Footer
