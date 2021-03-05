import {
  Row,
  Col,
  ListGroup,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { FormattedMessage, useIntl } from "react-intl";
import "./Footer.css";

function Footer() {
  const intl = useIntl();
  const { formatMessage } = intl;
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
                <ListGroup.Item>
                  <span className="top">
                    <FormattedMessage
                      id="categories"
                      defaultMessage="Categories"
                    />
                  </span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <FormattedMessage id="men" defaultMessage="Men" />
                </ListGroup.Item>
                <ListGroup.Item>
                  <FormattedMessage id="women" defaultMessage="Women" />
                </ListGroup.Item>
                <ListGroup.Item>
                  <FormattedMessage id="kids" defaultMessage="Kids" />
                </ListGroup.Item>
                <ListGroup.Item>
                  <FormattedMessage
                    id="dealsOfTheDay"
                    defaultMessage="Deals of the day"
                  />
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </div>
          <div className="online">
            <Col>
              <ListGroup>
                <ListGroup.Item>
                  <span class="top">
                    <FormattedMessage
                      id="usefulLinks"
                      defaultMessage="Useful Links"
                    />
                  </span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <FormattedMessage
                    id="contactUs"
                    defaultMessage="Contact Us"
                  />
                </ListGroup.Item>
                {/* <ListGroup.Item>Track Orders</ListGroup.Item>  */}
              </ListGroup>
            </Col>
          </div>
          <div className="online">
            <Col>
              <ListGroup>
                <ListGroup.Item>
                  <span className="top">
                    <FormattedMessage
                      id="connectWithUs"
                      defaultMessage="Connect with us"
                    />
                  </span>
                </ListGroup.Item>
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
                  <span className="top">
                    <FormattedMessage
                      id="newsletterHeading"
                      defaultMessage="Newsletter"
                    />
                  </span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <InputGroup className="mb-3 input">
                    <FormControl
                      className="button"
                      placeholder={formatMessage({
                        id: "newsletterPlaceholder",
                      })}
                      aria-label={formatMessage({
                        id: "newsletterPlaceholder",
                      })}
                      aria-describedby="basic-addon2"
                      required
                    />
                    <InputGroup.Append>
                      <Button
                        className="button"
                        size="sm"
                        variant="outline-secondary"
                      >
                        <FormattedMessage
                          id="newsletterButton"
                          defaultMessage="Submit"
                        />
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </div>
        </Row>

        <div className="copyright">
          <hr />
          <p>
            © <FormattedMessage id="copyright" defaultMessage="Copyright" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
