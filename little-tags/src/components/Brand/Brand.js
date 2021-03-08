import { Card, CardDeck } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { NavLink } from 'react-router-dom'
import "./Brand.css";

function Brand() {

  return (
    <div>
      <p className="title">
          <FormattedMessage id="whatsNew"
          defaultMessage="What's New" />
      </p>
      <CardDeck>
        <Card>
          <NavLink to="/products">

          
          <Card.Img
            variant="top"
            src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/5/21/c8c04af9-f276-4c87-865a-a37f8ee12a0a1590039953155-Levis.jpg"
          />
          </NavLink>
        </Card>

        <Card>
        <NavLink to="/products">
          <Card.Img
            variant="top"
            src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/5/21/49e0529b-f16e-488e-baea-f3fe7f41f4d31590039953100-Hrx.jpg"
          />
           </NavLink>
        </Card>

        <Card>
        <NavLink to="/products">
          <Card.Img
            variant="top"
            src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/5/21/9e51b35a-5eea-4a41-b3c8-144a32c9fa9e1590039953366-roadster.jpg"
          />
           </NavLink>
        </Card>

        <Card>
        <NavLink to="/products">
          <Card.Img
            variant="top"
            src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/5/21/6cbcbaa1-7625-4426-abf2-ecdd86350f681590039952871-anouk.jpg"
          />
           </NavLink>
        </Card>

        <Card>
        <NavLink to="/products">
          <Card.Img
            variant="top"
            src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/5/21/6b31bff2-ad89-48d9-ab34-1df64ee3acd41590039953567-USPA.jpg"
          />
          </NavLink>
        </Card>
      </CardDeck>
    </div>
  );
}

export default Brand;
