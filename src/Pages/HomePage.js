import React, { useState, useEffect } from 'react'
import Header from '../Componant/Header'
import NavBar from '../Componant/NavBar'
import OneProduct from '../Componant/OneProduct'


function HomePage() {



    const [allproducts, setallproducts] = useState([])

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => {
                //following way adds entire array into state variable at once
                setallproducts(data.products)

                //following way adds each element one by one
                //data.product.forEach(value)=>{
                //setallproducts(prev=>{
                //   return [...Prev, value]})
                //setallproducts(prev=>[...prev,value])
                // )}


            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <div>
            {/* <!-- side bar --> */}


            {/* <!-- header --> */}
            <Header />


            {/* < !--navbar --> */}
            <NavBar />

            {/* < !--images --> */}
            < div className="AmazonImage" >
                <img src="./amazonimage.jpg" alt="" />
            </div >
            {/* <!--product --> */}
            < div className="products" id="Products" >
                {
                    allproducts.map((product, index) => (
                        <OneProduct
                            //props passing

                            key={index}
                            category={product.category}
                            image={product.images[0]} //1st image ke liye images of [0]
                            price={product.price}
                            rating={product.rating}
                            title={product.title}
                            description={product.description}
                            productId={product.id}
                        />
                    ))
                }
            </div >
        </div >
    )
}

export default HomePage