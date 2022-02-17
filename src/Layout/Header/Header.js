import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Button  } from 'react-bootstrap';

export default function Header () {
    const [ authenticated, setAuthenticated ] = useState(false);

    useEffect(() => {
        loadAuthenticated();
    }, []);

    const loadAuthenticated = () => {
        var sesion = '';
        sesion = localStorage.getItem('token-react');
        if (sesion === null) {
            setAuthenticated(false);
        } else {
            setAuthenticated(true);
        }
    };

    const closeLogin = () => {
        localStorage.removeItem('token-react');
        setAuthenticated(false);
    }

    return(
        <Navbar bg="dark" variant="dark">
        <Container>
            { authenticated === false ? 
                <Navbar.Brand href="/">Login</Navbar.Brand> : <Navbar.Brand onClick={closeLogin}>Home</Navbar.Brand>
            }
            <Nav className="me-auto">
                <Nav.Link href="/register">Registro</Nav.Link>
                { authenticated === true ? <Nav.Link href="/medical-areas">Areas Medicas</Nav.Link> : <></> }
                { authenticated === true ? <Nav.Link href="/medical-services">Servicios disponibles</Nav.Link> : <></> }
                { authenticated === true ? <Nav.Link href="/catalogs">Catalogos</Nav.Link> : <></> }
            </Nav>
        </Container>
      </Navbar>
    )
}

