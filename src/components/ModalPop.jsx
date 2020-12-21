import React, { useState } from "react";

import { Button, Modal } from "react-bootstrap";

const ModalPop = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // console.log("xyz", props);

  return (
    <>
      <Button variant={props.btnColor} onClick={handleShow} className="mr-2">
        {props.popname}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>{props.poptitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.popbody}
          {/* <p>
            {" "}
            <b>ID:</b> {props.popbody.id}
          </p>
          <p>
            {" "}
            <b>NAME:</b> {props.popbody.name}
          </p>
          <p>
            {" "}
            <b>USER NAME:</b> {props.popbody.username}
          </p>
          <p>
            {" "}
            <b>EMAIL:</b> {props.popbody.email}
          </p>
          <p>
            {" "}
            <b>PHONE:</b> {props.popbody.phone}
          </p>
          <p>
            {" "}
            <b>WEBSITE:</b> {props.popbody.website}
          </p> */}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalPop;
