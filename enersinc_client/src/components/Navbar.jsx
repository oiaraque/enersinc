import React from 'react';
import {Navbar, Container, Nav } from 'react-bootstrap';

//---------------------------------------------------------------------------------------------------

export default function NavBar(){
	return(
	<div>			
		<Navbar bg="dark" expand="lg">
		  <Container>
			 <img
		       	src="/logoe.png"
		        width="30"
		        height="30"
		        className="d-inline-block align-top"
		        alt="React Bootstrap logo"
		      /> 
		    <Navbar.Brand href="#home">Enersinc</Navbar.Brand>
		    <Navbar.Toggle aria-controls="basic-navbar-nav" />
		    <Navbar.Collapse id="basic-navbar-nav">
		    </Navbar.Collapse>
		  </Container>
		</Navbar>
	</div>
	)
}