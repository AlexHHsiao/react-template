import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../images/ezgif-1-e382b6df9dbb.png"
import "./Header.css"
import Card from "react-bootstrap/Card";
class Header extends Component {


    render() {
        return (<div>


            <img className="rounded mx-auto d-block logo" src={logo} />

            <Navbar bg="white" variant="light">
                <Nav className="float-right">
                    <Nav.Link href="#login">Login</Nav.Link>
                    <Nav.Link href="#features">Shopping Cart</Nav.Link>
                </Nav>
            </Navbar>



            <div className="vertical-menu">
                <a href="#" className="active">View All</a>
                <a href="#">Ink & Toner</a>
                <a href="#">Paper & Stationery</a>
                <a href="#">Computer & Accessories</a>
                <a href="#">Printers & Scanners</a>
                <a href="#">Electronics</a>
                <a href="#">Furniture</a>
                <a href="#">Cleaning & Facilities</a>
            </div>

            <div className="card">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>



        </div>);
    }
}

export default Header;