import React, { useState, useEffect, useContext } from 'react';
import { Navbar, Container, Nav, Button, Offcanvas, NavDropdown, FormControl, Form} from 'react-bootstrap';
import { Context } from '../../Components/Context';
import { useNavigate } from 'react-router-dom';
import logo  from '../../Style/images/doc.png';

export default function Header () {
    const context = useContext(Context);
    const navegate = useNavigate(Context);

    useEffect(() => {
        loadAuthenticated();
    }, []);

    const loadAuthenticated = () => {
        var sesion = '';
        sesion = localStorage.getItem('token-react');
        if (sesion === null) {
            context.setAuthenticated(false);
        } else {
            context.setAuthenticated(true);
        }
    };

    const closeLogin = () => {
        localStorage.removeItem('token-react');
        context.setAuthenticated(false);
        navegate('/');
    }

    return(
    <>    
        <Navbar bg="light" expand={!context.authenticated}>
    <Container fluid>
        <Navbar.Brand href="/">
            <img
                src={logo}
                width="40"
                height="40"
            >
            </img>
            Sistema Médico
        </Navbar.Brand>
        
        { !context.authenticated ?
            <Nav>
                <Nav.Link href="/register">Registro</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
            : <Navbar.Toggle aria-controls="offcanvasNavbar" />
        }
        
        { context.authenticated ? 
        <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
        >
        <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
                <img
                    src={logo}
                    width="40"
                    height="40"
                >
                </img>
                Sistema Médico
            </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/register">Registro</Nav.Link>
                <Nav.Link href="/medical-areas">Areas Medicas</Nav.Link>
                <Nav.Link href="/medical-services">Servicios disponibles</Nav.Link>
                <Nav.Link href="/catalogs">Catalogos</Nav.Link>
                <Nav.Link href="" onClick={closeLogin}>Cerrar Sesión</Nav.Link>
            </Nav>
        </Offcanvas.Body>
        </Navbar.Offcanvas>
        : <></> }
    </Container>
    </Navbar>
      </>
    )
}

