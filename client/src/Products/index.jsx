import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from './Product/index'
import { Container, Row } from 'react-bootstrap';

const Products = () => {
    const URL = 'https://fakestoreapi.com/products'
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(URL)
            setProducts(data)
            console.log(data);

        })
            ()
    }, [])

    return (
        <Container>
            <Row>
                {products.map(product => <Product product={product} />)}
            </Row>
        </Container >
    )

}

export default Products