import React from 'react'

const Product = ({product}) => {

    const { title, price, image } = product;


  return (
    <>
      <section>
        <img src = {image}/>
        Title:- {title}
        <section>
            Price:- {price}
        </section>
      </section>
    </>
  )
}

export default Product
