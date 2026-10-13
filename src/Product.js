import React from 'react'
import ball from './asset/ball.jpeg'
import './Product.css'


const Product = ({ productObj }) => {


    const Productobj=[{
        name:"Dragon ball t-shirt",
        price:"500",
        strikeprice:"899",
        
    },
    {
        name:"super dragon",
        price:"1000",
        strikeprice:"2500",
        
    },
    {
        name:"spical edition",
        price:"2500",
        strikeprice:"2999",
        
    }]

    return (
        <div style={{ display: "flex" }}>
            {productObj.map((item) => {
                return (
                    <>
                        <div className="containerCard">
                            <img src={ball} className="imageShoe" />
                            <h3 className="headingShoe">{item.name}</h3>
                            <div className="priceContainerShoe"> <h4 className="priceShoe">${item.price}</h4> &nbsp;
                                <strike className="strikeShoe">${item.strikePrice}</strike></div>
                            <button className="buttonShoe">  BUY NOW</button>

                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Product