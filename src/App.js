import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import './App.css';
import BaseComponent from './components/base/base.component';
import Home from './components/home/home.component';
import Products from './components/product/products.component';
const route = createBrowserRouter([{
  path:'/',
  element:<BaseComponent></BaseComponent>,
  children:[{
    path:'/',
    element:<Home/>
  },{
    path:'home',
    element:<Home/>,
    children:[{
      path:'products',
      element:<Products/>
    }]
  },{
    path:'login',
    element:<h1>this is login</h1>
  },{
    path:'cart',
    element:<h1>this is cart</h1>,
  }]
}])

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={route}>
        
      </RouterProvider>
    </div>
  );
}
