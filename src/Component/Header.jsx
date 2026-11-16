import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className="bg-black">
      <Container>
        <Navbar.Brand href="/">
            <img src="porsche logo.png" alt="Logo"  height={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/About">About Us</Nav.Link>
            <Nav.Link href="/Collection">Collection</Nav.Link>
            <Nav.Link href="/Gallery">Gallery</Nav.Link>
            <Nav.Link href="/Services">Services</Nav.Link>
             <Nav.Link href="/Contact">Contact</Nav.Link>
            <button style={{
             backgroundColor: 'goldenrod',
             color: 'white', 
             border: 'none',
              padding: '10px 20px',
               borderRadius: '5px',
               marginLeft: 'auto',
                cursor: 'pointer' }}
                 >
            Order Now
            </button>  


            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;