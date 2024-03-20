import React, { useState, useEffect } from "react";
import "./Modal.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const EditModal = (props) => {
  const { selectedTask, handleEditTitle } = props;
  const id = selectedTask?.id;
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    setNewTitle(props?.selectedTask?.title);
  }, [props]);

  const handleNewTitle = (e) => {
    setNewTitle(e.target.value);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          type="text"
          placeholder="Enter new task"
          value={newTitle}
          onChange={handleNewTitle}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={() => handleEditTitle(id, newTitle)}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
