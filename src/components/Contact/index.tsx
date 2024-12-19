// src/components/ContactMe/index.jsx
import { useState } from "react";
import {Button, Container, Form, Input, Label, TextArea, Title } from "./indexStyle"

export const ContactMeForms = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Adicionar lógica de envio de dados aqui.
  };

  return (
    <Container>
      <Title>Entre em contato</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          Nome:
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          Email:
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          Mensagem:
          <TextArea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Label>
        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  );
};
