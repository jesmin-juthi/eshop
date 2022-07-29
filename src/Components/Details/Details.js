import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Details = (props) => {

    const {title, image, price, description} = props.product;


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
             <Button variant="primary" onClick={handleShow}>
                Details
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <img src={image} alt="" />
                    <Modal.Title>{title}</Modal.Title>
                    <p>{price}</p>
                </Modal.Header>
                <Modal.Body>{description}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Details;