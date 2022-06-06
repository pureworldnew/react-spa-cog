import React from "react";
import { Modal, Button } from "react-bootstrap";
function ConfirmModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Confirm Deleting...
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Are you sure, you want to delete the User?</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          YES
        </Button>
        <Button variant="primary">NO</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmModal;
