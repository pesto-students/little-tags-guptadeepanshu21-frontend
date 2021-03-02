import React, { useContext } from "react";
import {
  Row,
  Col,
  ListGroup,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { injectIntl } from "react-intl";
import { IntlContext } from "../../context/IntlContext";
import "./Footer.css";

function Footer(props) {
  const { intl } = props;
  const { formatMessage } = intl;
  const { messages } = useContext(IntlContext);
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
                  {formatMessage({ id: messages.categories})}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item>
                {formatMessage({ id: messages.men})}
                </ListGroup.Item>
                <ListGroup.Item>
                {formatMessage({ id: messages.women})}
                </ListGroup.Item>
                <ListGroup.Item>
                {formatMessage({ id: messages.kids})}
                </ListGroup.Item>
                <ListGroup.Item>
                {formatMessage({ id: messages.dealsOfTheDay})}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </div>
          <div className="online">
            <Col>
              <ListGroup>
                <ListGroup.Item>
                  <span class="top">
                  {formatMessage({ id: messages.usefulLinks})}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item>
                {formatMessage({ id: messages.contactUs})}
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
                  {formatMessage({ id: messages.connectWithUs})}
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
                  {formatMessage({ id: messages.newsletterHeading})}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <InputGroup className="mb-3 input">
                    <FormControl
                      className="button"
                      placeholder={formatMessage({ id: messages.newsletterPlaceholder})}
                      aria-label={formatMessage({ id: messages.newsletterPlaceholder})}
                      aria-describedby="basic-addon2"
                      required
                    />
                    <InputGroup.Append>
                      <Button
                        className="button"
                        size="sm"
                        variant="outline-secondary"
                      >
                        {formatMessage({ id: messages.newsletterButton})}
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
          <p>© {formatMessage({ id: messages.copyright})}</p>
        </div>
      </div>
    </div>
  );
}

export default injectIntl(Footer);
