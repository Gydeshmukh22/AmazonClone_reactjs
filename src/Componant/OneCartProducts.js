import React, { useEffect, useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import { useDispatch } from 'react-redux';
import { removelFromBasket } from '../Store/Slices/basketSlice';
// import CheckOut from '../Pages/CheckOut';
// import StarHalfIcon from '@mui/icons-material/StarHalf';
// import { useSelector } from 'react-redux';


function OneCartProducts(props) {

    const { image, price, rating, name, description, productId } = props
    const [roundRating, setRoundRating] = useState(0)

    useEffect(() => {
        setRoundRating(Math.round(rating))
    }, [rating])

    const dispatch = useDispatch()
    const handleRemoveProduct = () => {
        const oneProduct = { image, name, price, rating, description, productId }
        dispatch(removelFromBasket(oneProduct))
    }

    return (
        <div className='oneCartProduct'>

            <img src={image}
                alt=''

            />
            <div className='cartProductData'>
                <h1>{name}</h1>
                <h3>{price}</h3>
                <p>{description}</p>
                <div className='cartProductRating'>
                    {Array(roundRating).fill().map((_, id) => (
                        <StarIcon key={id} style={{ fontSize: '20px', color: 'orange' }} />
                    ))}
                    {/* <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarHalfIcon /> */}
                </div>
            </div>

            <div className='cartProductActions'>
                <button onClick={handleRemoveProduct}>Remove</button>
                <button>Buy</button>
            </div>

        </div>
    )
}

export default OneCartProducts