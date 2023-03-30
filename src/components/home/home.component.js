import React from 'react'
import { useContext } from 'react'
import ProductContext from '../../context/products';
import ProductCard from './product/product.card';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
export default function Home() {
  const { products } = useContext(ProductContext);
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
    <>
      {homeItemLists.map((banner)=>{
        return <>
        <h1>{banner}</h1>
        <Box sx={{ flexGrow: 3 }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {products.map((item) => {
              return <Grid item>
                <ProductCard item={item} />
              </Grid>
            })}
          </Grid>
        </Box>
        </>
      })}
    </>
  )
}
