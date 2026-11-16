import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button,Nav} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
const Footer = () => {
  return (
    <footer className="bg-black text-white pt-5">
 <Container>
      <Row>
        <Row/>

        <Col>
         <img src="porsche logo.png" alt="Logo"  height={50} width={50}  />
         <p>PORSCHE</p>
        <p>DRIVEN BY DREAMS</p>
        </Col>
        {/*2nd column*/}
<Col>
        <h5>Quick Links</h5>
        <Nav> 
          <Nav.Link 
          href="/Home">Home
          </Nav.Link>
          <Nav.Link
           href="/Models">Models
           </Nav.Link>
          <Nav.Link
           href="/Configurator">Configurator
           </Nav.Link>
          <Nav.Link 
          href="/AboutPorsche">About Porsche
          </Nav.Link>
          <Nav.Link 
          href="/Careers">Careers
          </Nav.Link>
        </Nav>
        </Col>

          {/*3rd column*/}
        <Col>
        <h5>Support</h5>
        <Nav> 
          <Nav.Link 
          href="/Service">Service
          </Nav.Link>
          <Nav.Link
           href="/Contact Us">Contact Us
           </Nav.Link>
          <Nav.Link
           href="/FAQs"> FAQs
           </Nav.Link>
          <Nav.Link 
          href="/Privacy Policy">Privacy Policy
          </Nav.Link>
          <Nav.Link 
          href="/Terms of Use">Terms of Use
          </Nav.Link>
        </Nav>
        </Col>
       
        {/*4th column*/}
         <Col>
        <h5>Stay Connected</h5>
        <p>Get the latest updates from Porsche.</p>
        
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label></Form.Label>
         <Button type='button' style={{ backgroundColor: '#0d6efd', borderColor: '#0d6efd' }}>Subscribe</Button>
      </Form.Group>
    
    </Form>
  
        </Col>

      </Row>

    <Row className='border-top border-secondary mt-3 pt-3 py-4'>
      <Col>
      <h5>Stay Updated With Porsche</h5>
      <p>Check our website to stay informed about the latest news and updates.</p>

      
      </Col>

      <Col>
       <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="porsche.com" />
      </Form.Group>
     <Button type='button' style={{ backgroundColor: '#0d6efd', borderColor: '#0d6efd' }}>Click link to explore</Button>
    </Form>
  
      
      </Col>
    </Row>

    <Row className='border-top border-secondary mt-3 pt-3 py-4'>
      <Col>&copy; 2026 Porsche. All rights reserved.</Col>
    </Row>
    </Container>
    </footer>
  )
}

export default Footer