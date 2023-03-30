import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import './App.css';
import BaseComponent from './components/base/base.component';

const route = createBrowserRouter([{
  path:'/',
  element:<BaseComponent/>,
  children:[{
    path:'home',
    element:<h1>this is home</h1>,
    children:[{
      path:'product',
      element:<h1>this is product</h1>
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
