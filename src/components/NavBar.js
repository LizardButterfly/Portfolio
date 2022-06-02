import { Container, Navbar, Nav} from 'react-bootstrap';

function NavBar() {
    return (
        <header>
          <Navbar expand="lg">
            <Container>
              <Navbar.Brand href="#home"></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor:"#64ffda"}} />
              <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                <Nav>
                  <Nav.Link className='px-4' href="/" style={{color:"#64ffda"}}>Home</Nav.Link>
                  <Nav.Link className='px-4' href="/ProjPage" style={{color:"#64ffda"}}>Projects</Nav.Link>
                  <Nav.Link className='' href="#contact" style={{color:"#64ffda", paddingRight: 0, paddingLeft: 24}}>Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
      )
  }
  
  export default NavBar;