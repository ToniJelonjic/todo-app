import React, { useState } from "react";
import "./Modal.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AddModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">New Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          type="text"
          placeholder="Enter new task"
          value={props.addNewTitle}
          onChange={props.handleAddNewTitle}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={props.handleNewTask}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddModal;
