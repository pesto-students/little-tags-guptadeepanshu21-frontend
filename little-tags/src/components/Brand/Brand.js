import React, { useContext } from "react";
import { Card, CardDeck } from "react-bootstrap";
import { injectIntl } from "react-intl";
import { IntlContext } from "../../context/IntlContext";
import "./Brand.css";

function Brand(props) {
  const { intl } = props;
  const { formatMessage } = intl;
  const { messages } = useContext(IntlContext);
  return (
    <div>
      <p className="title">{formatMessage({ id: messages.whatsNew })}</p>
      <CardDeck>
        <Card>
          <Card.Img
            variant="top"
            src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/5/21/c8c04af9-f276-4c87-865a-a37f8ee12a0a1590039953155-Levis.jpg"
          />
        </Card>

        <Card>
          <Card.Img
            variant="top"
            src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/5/21/49e0529b-f16e-488e-baea-f3fe7f41f4d31590039953100-Hrx.jpg"
          />
        </Card>

        <Card>
          <Card.Img
            variant="top"
            src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/5/21/9e51b35a-5eea-4a41-b3c8-144a32c9fa9e1590039953366-roadster.jpg"
          />
        </Card>

        <Card>
          <Card.Img
            variant="top"
            src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/5/21/6cbcbaa1-7625-4426-abf2-ecdd86350f681590039952871-anouk.jpg"
          />
        </Card>

        <Card>
          <Card.Img
            variant="top"
            src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/5/21/6b31bff2-ad89-48d9-ab34-1df64ee3acd41590039953567-USPA.jpg"
          />
        </Card>
      </CardDeck>
    </div>
  );
}

export default injectIntl(Brand);
