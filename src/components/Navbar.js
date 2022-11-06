import {Button, Container, Navbar, Modal} from 'react-bootstrap';
import {useState} from "react";

function NavbarComponent() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Navbar expand="sm">
            <Navbar.Brand href="/">Ecommerce shop</Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
                <Button onClick={handleShow}>Cart 0 items</Button>
            </Navbar.Collapse>
        </Navbar>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>
                    <Modal.Body>
                        This is the modal body.
                    </Modal.Body>
                </Modal.Title>
            </Modal.Header>
        </Modal>
    </>
    )
}

export default NavbarComponent