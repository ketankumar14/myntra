import React,{useState} from 'react';
import * as icons from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { InputGroup } from 'react-bootstrap';
import { useContext } from 'react';
import ProductContext from '../../context/productsList';


export default function Search() {
  const { products } = useContext(ProductContext);
  const [searchItem,setSearchItem]=useState(null);
  return (
    <>
      <Form className="d-flex" onSubmit={(event)=>{
        console.log('A name was submitted: ');
        event.preventDefault();
        const searchBox=event.target.searchBox.value;
        console.log(products.filter((ele,idx)=>(ele.category.toUpperCase()===searchBox.toUpperCase() || ele.item.toUpperCase()===searchBox.toUpperCase())));
      }}>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            <icons.Search />
          </InputGroup.Text>
          <input
            type="search"
            placeholder="Search"
            className="me-2"
            name="searchBox"
          />
        </InputGroup>
      </Form>
    </>
  )
}
