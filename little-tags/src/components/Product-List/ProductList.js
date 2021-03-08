import React from 'react'
import { Container, Row, Col,Breadcrumb, Card, CardColumns, Dropdown, DropdownButton } from 'react-bootstrap';
import items from './ProductData'
import Filters from '../Filter/Filters'
import './ProductList.css'

function ProductList() {
    return (
        <div className="wrapper">
            <Container>
            <Breadcrumb className="large">
            <Breadcrumb.Item href="">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="">Clothing</Breadcrumb.Item>
            
            </Breadcrumb>
            <p className="text-left">
           
            </p>
            <Row>
                <Col>
                    <Filters/>
                </Col>

                <Col md={9}>
                <Container>
            <Container className="text-right   ">
                <DropdownButton className = "large" id="dropdown-basic-button" title="Sort By : Recommended" variant="secondary" >
                    <Dropdown.Item href="#/action-1">What's New</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Popularity</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Price : High to Low</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Price : Low to High</Dropdown.Item>
                </DropdownButton>
            </Container>
            
            <Container className="mx-5">
            <CardColumns>
              {items.value.map((value)=>(
                <Card style={{ width: '24rem',height:"20%" }} className="mx-2 my-5">
                <Card.Img variant="top" src={value.images}/>
                <Card.Body>
                  <Card.Title className="font-weight-bold ">{value.name}</Card.Title>
                  
                  <Row>
                  <Card.Text className = "price">
                  Rs. {value.mrp}
                  </Card.Text>
                  <ion-icon style = {{cursor: 'pointer'}} name="cart"></ion-icon>   
                  </Row>
                 
                </Card.Body>
              </Card>

    ))

              }
            </CardColumns>
            </Container>
        </Container>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default ProductList
