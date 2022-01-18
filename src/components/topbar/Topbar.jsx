import "./topbar.scss";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function Topbar() {
  return (
    <Navbar
      expand="lg"
      className="topbar"
      variant="dark"
      bg="primary"
      id="topbar"
    >
      <Container>
        <Navbar.Brand href="#intro" className="logo">
          PORTFOLIO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#intro">Intro</Nav.Link>
            <Nav.Link href="#my-portfolio">My Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Item>
              <Nav.Link>
                <BsFillTelephoneFill className="icon" />
                <span
                  onClick={() => {
                    navigator.clipboard.writeText("0938562381");
                    alert("Copied to clipboard!");
                  }}
                >
                  0938562381
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <BiMailSend className="icon" />
                <span
                  onClick={() => {
                    navigator.clipboard.writeText("0938562381");
                    alert("Copied to clipboard!");
                  }}
                >
                  thangtheregista@gmail.com
                </span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
