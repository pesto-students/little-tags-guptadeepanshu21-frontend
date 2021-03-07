import React from 'react'
import {Card,CardDeck} from 'react-bootstrap';
import './Card.css';
import { NavLink } from 'react-router-dom'


function CategoryCard() {
    return (
        <div>   
        <p className="title">CATEGORIES</p>
        <CardDeck>
          <Card>
          <NavLink to="/products"> 
            <Card.Img variant="top" src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/89f1bd9d-3a28-456d-888a-beff717a06f81594222908155-Shirts.jpg"/>
            </NavLink>
          </Card>
        
          <Card>
          <NavLink to="/products"> 
            <Card.Img variant="top" src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/870d0dc1-c128-4e2a-b70a-2e29c1187bcb1594222834017-Dresses.jpg"/>  
            </NavLink>          
          </Card>
        
          <Card>
          <NavLink to="/products"> 
            <Card.Img variant="top" src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/f0f9b81a-b9d5-4b8b-94d5-ea878fa9b18e1594222834121-Infant-Essential.jpg"/>
            </NavLink>
          </Card>
        
          <Card>
          <NavLink to="/products"> 
            <Card.Img variant="top" src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/720cf6ef-3be4-4825-8211-0125c942e3821594222907960-Jeans.jpg"/>
            </NavLink>
          </Card>
        </CardDeck>
        
        </div>
    )
}

export default CategoryCard
