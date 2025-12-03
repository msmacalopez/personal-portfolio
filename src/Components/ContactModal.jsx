import React from "react";
import { Modal } from "react-bootstrap";
import ContactMe from "./ContactMe";
import "../styles/contactModal.css";

export default function ContactModal({ show, onHide }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      backdrop="static"
      dialogClassName="contact-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>Contact Me</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <ContactMe />
      </Modal.Body>
    </Modal>
  );
}
