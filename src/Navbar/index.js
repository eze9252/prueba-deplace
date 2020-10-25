import * as React from 'react'
import Navbar from 'react-bootstrap/Navbar'

function NavbarPage() {
    return (
      <div className="navbar">
        <>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
              Personajes Rick and Morty
            </Navbar.Brand>
          </Navbar>
        </>
      </div>
    );
  }
  
  export default NavbarPage;