import React from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../Store/Slices/basketSlice'

function OneProduct(props) { //props calling

    //props destructuring
    const { category, image, price, rating, title, description, productId } = props

    const dispatch = useDispatch()

    const handleAddToCart = () => {
        const productData = { category, image, price, rating, title, description, productId }
        dispatch(addToBasket(productData))
    }


    return (
        <div>  <div className="oneProduct" >
            <p>{category}</p>

            <img src={image} alt="" />

            <div className="ratingandprice">

                <h1>&#x20B9; {price}</h1>

                <h3>Rating : {rating}</h3>
            </div>

            <h2>{title}</h2>

            <h4>
                ${description}
            </h4>

            <button onClick={handleAddToCart}>Add to Card</button>

        </div></div>
    )
}

export default OneProduct