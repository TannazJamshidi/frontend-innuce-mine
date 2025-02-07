import React, { useState } from "react";
import "./ContactForm.css";
import { InputField } from "./InputField";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">CONTACT US</h1>
      <p className="contact-description">
        Please feel free to contact us. We welcome your inquiries and are eager
        to assist you with any questions you may have.
      </p>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <InputField
          label="NAME"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <InputField
          label="EMAIL"
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <InputField
          label="MESSAGE"
          id="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          required
        />

        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? "SENDING..." : "SUBMIT"}
        </button>
      </form>
    </div>
  );
};
