import React from 'react'

const Product = ({product}) => {

    const { title, price, image } = product;


  return (
    <Col xs={{span: 10, offset: 1}} md={{span: 5}} lg={{span:4 , offset:0}} xl={{span:3}}>
      <section>
        <img src = {image}/>
        Title:- {title}
        <section>
            Price:- {price}
        </section>
      </section>
    </Col>
  )
}

export default Product
