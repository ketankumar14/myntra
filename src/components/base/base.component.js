import * as React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import ProductContext from '../../context/productsList';
import Home from '../home/home.component';
import Navbar from './navbar.component';

const pages = [
{ name: 'Men', route: '/products' },
{ name: 'Women', route: '/products' },
{ name: 'kids', route: '/products' },
{ name: 'home & living', route: '/products' },
{ name: 'beauty', route: '/products' },
{ name: 'studio', route: '/products' },
{ name: 'cart', route: '/cart' }
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function BaseComponent() {
  const navi = useNavigate();
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    fetch('https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?limit=10&page=2')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        console.log(data);
      })
  }, [])
  return (
    <><ProductContext.Provider value={{ products, setProducts }}>
      <Navbar menus={pages}/>
      <Outlet></Outlet>
    </ProductContext.Provider>
    </>
  );
}