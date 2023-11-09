import React, { useEffect, useState } from 'react'
import Header from '../Componant/Header'
import OneCartProducts from '../Componant/OneCartProducts'
import { useSelector } from 'react-redux'

function CheckOut() {

    // var productsInCart = [1, 2, 3, 4, 5]

    const totalCartItems = useSelector(
        (state) => state.basket.items
    )

    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        if (totalCartItems.length > 0) {
            setTotalPrice(totalCartItems.reduce((total, item) => total + item.price, 0))
        }
    }, [totalCartItems])

    return (
        <div className='CheckOut'>
            <Header />
            <div className='CheckOutContainer'>
                <div className='CartProduct'>

                    {
                        totalCartItems.length === 0 ? (
                            <h1>your card is empty</h1>
                        ) : (
                            <>
                                <h1>Number of item present in your cart : <span style={{ color: 'black' }}>{totalCartItems.length}</span></h1>

                                <div className='CartProductList'>
                                    {
                                        totalCartItems.map((item, id) => (
                                            <OneCartProducts
                                                key={id}
                                                image={item.image}
                                                price={item.price}
                                                rating={item.rating}
                                                name={item.title}
                                                description={item.description}
                                                productId={item.productId}
                                            />
                                        ))
                                    }
                                </div>
                            </>
                        )
                    }
                </div>

                <div className='CartTotal'>
                    <h1>
                        Cart Amount <br />
                        <span style={{ color: 'orange' }}>{totalPrice}</span>
                    </h1>
                    <button>CheckOut</button>
                </div>

            </div>
        </div>
    )
}

export default CheckOut