import React, { useState, useRef } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const form = useRef();

  const service_id = import.meta.env.VITE_SERVICE_ID;
  const template_id = import.meta.env.VITE_TEMPLATE_ID;
  const user_id = import.meta.env.VITE_PUBLIC_KEY;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    emailjs
      .sendForm(service_id, template_id, "#contactForm", { publicKey: user_id })
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        alert("Failed to send message: " + error.text);
      });
  };

  return (
    <Row className="justify-content-center">
      <Col md={11} lg={11}>
        <hr />
        <Form id="contactForm" ref={form} onSubmit={handleSubmit}>
          <Row>
            {/* LEFT SIDE */}
            <Col md={6} xs={12}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  placeholder="What is this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            {/* RIGHT SIDE */}
            <Col md={6} xs={12}>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={6}
                  name="message"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <div className="d-grid">
                <Button
                  variant="primary"
                  type="submit"
                  style={{ backgroundColor: "#003746", border: "none" }}
                >
                  Send Message
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}
