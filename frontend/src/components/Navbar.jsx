import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky='top'>
        <Container fluid>
            <Navbar.Brand href="/">TouristGuide</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#pontos">Pontos</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Lençois Maranhenses"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-primary">Pesquisar</Button>
                    </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default MyNavbar