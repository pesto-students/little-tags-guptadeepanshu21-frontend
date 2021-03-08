import React from 'react';
import './Filters.css'
import { Container,Form } from 'react-bootstrap';
const Filters = () =>{

    const checkboxValue = ['Men', 'Women', 'kids'];
    const radioValue = {
        "count": 2,
        "value": [
            {
                "id": 2087285,
                "name": "Jackets",
                "count": 75
              },
              {
                "id": 9137517,
                "name": "T Shirts",
                "count": 31
              },
        ]
    };

    const brandValue = {
        "count": 4,
        "value": [
            {
                "id": 2087285,
                "name": "Puma",
                "count": 50
              },
              {
                "id": 9137517,
                "name": "Nike",
                "count": 39
              },
              {
                "id": 9133517,
                "name": "Adidas",
                "count": 36
              },
              {
                "id": 9137117,
                "name": "Reebok",
                "count": 65
              },
        ]
    };

    const priceValue = {
        "count": 4,
        "value": [
            {
                "id": 2087285,
                "name": "Rs. 300 to Rs. 1000",
                "count": 20
              },
              {
                "id": 9137517,
                "name": "Rs. 1000 to Rs. 2000",
                "count": 36
              },
              {
                "id": 9133517,
                "name": "Rs. 2000 to Rs. 5000",
                "count": 59
              },
              {
                "id": 9137117,
                "name": "Rs. 5000 and above",
                "count": 8
              },
        ]
    };

    

    return(
        <Container className = "filter-wrapper" Fluid >
            <h5 className="text-left">FILTERS</h5>
            <hr/>
            <Form>
                <div className="text-left font-weight-bold large">
                    {checkboxValue.map((val)=>(
                        <Form.Check 
                        type="radio"
                        id={`${val}`}
                        name = "radio"
                        label={`${val}`}
                        className = "radio-btn"
                    />
                    ))}
                
                </div>
            </Form>
            <hr/>
            <h5 className="text-left inner-wrap">CATEGORIES</h5>
            <Form>
            <div className="text-left font-weight-Normal large">
                    {radioValue.value.map((val)=>(
                        
                         <Form.Check 
                        type="checkbox"
                        id={`${val.id}`}
                        label={`${val.name} (${val.count})`}
                        className = "radio-btn"
                    />
                    ))}
                
                </div>
            </Form>
            <hr/>
            <h5 className="text-left inner-wrap">BRANDS</h5>
            <Form>
            <div className="text-left font-weight-Normal large">
                    {brandValue.value.map((val)=>(
                        
                        <Form.Check 
                        type="checkbox"
                        id={`${val.id}`}
                        label={`${val.name} (${val.count})`}
                        className = "radio-btn"
                    />
                    ))}
                
                </div>
            </Form>
            <hr/>
            <h5 className="text-left inner-wrap">PRICE RANGE</h5>
            <Form>
            <div className="text-left font-weight-Normal large">
                    {priceValue.value.map((val)=>(
                        
                            <Form.Check 
                        type="checkbox"
                        id={`${val.id}`}
                        label={`${val.name} (${val.count})`}
                        className = "radio-btn"
                    />
                    ))}
                
                </div>
            </Form>
        </Container>
    )

}

export default Filters;