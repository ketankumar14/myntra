import icon from '../../MyntraIcon.png';
import * as icons from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { InputGroup } from 'react-bootstrap';
import { useContext } from 'react';
import ProductContext from '../../context/productsList';
import Search from './Search.Model';




function NavBarMain({ menus }) {
    const navigateTo = useNavigate();
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" fixed='top'>
            <Container>
                <Navbar.Brand onClick={() => {
                    navigateTo('/')
                }}>
                    <img
                        src={icon}
                        width="100%"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {menus.map((menu) => {
                            return <><Nav.Link key={menu.name} onClick={() => {
                                navigateTo(menu.route)
                            }}>{menu.name.toUpperCase()}</Nav.Link></>
                        })}
                        <Search/>
                    </Nav>

                    <Nav>

                        <icons.Person />

                        <icons.Heart />

                        <icons.Handbag />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarMain;