import React from 'react'
import { useContext } from 'react'
import ProductContext from '../../context/productsList';
import ProductCard from './product/product.card';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImageA from '../../images/a.png';
import ImageB from '../../images/b.png';
import ImageC from '../../images/c.png';
import ImageD from '../../images/d.png';
import Carousel from 'react-bootstrap/Carousel';
import { Col, Container, Row } from 'react-bootstrap';
export default function Home() {
  const { products } = useContext(ProductContext);
  const Banner = [ImageA, ImageB, ImageC, ImageD];
  const homeItemLists = [
    'DEAL OF THE DAY',
    'BEST OF MYNTRA EXCLUSIVE BRANDS',
    'TOP PICKS',
    'CATEGORIES TO BAG',
    'DEALS ON TOP BRANDS',
    'BRANDS AT SLASHED PRICES',
    'BEST BUYS',
    'MYNTRA LUXE'
  ]
  return (
    <><br /><br /><br />
      <Carousel>
        {Banner.map((img) => (
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={img}
              alt="Slides"
            />
          </Carousel.Item>
        ))}
      </Carousel>
      {homeItemLists.map((banner) => {
        return <>
          <h1 style={{textAlign:'left'}}>{banner}</h1>
          <Container>
            <Row>
              {products.map((item) =>
                <Col>
                  <ProductCard item={item} />
                </Col>
              )}
            </Row>
          </Container>
        </>
      })}
    </>
  )
}
