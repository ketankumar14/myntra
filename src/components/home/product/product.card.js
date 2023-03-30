import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function ProductCard({item}) {
  return (
    <div><Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      alt="green iguana"
      height="140"
      image={item.image}
    />{console.log(item)}
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {item.title}
      </Typography>
    </CardContent>
    <CardActions sx={{
          justifyContent:'center'
        }}>
      <Button size="small">Add to Cart</Button>
      <Button size="small" >Buy Now</Button>
    </CardActions>
  </Card></div>
  )
}
