import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {
  ContactContainer,
  ContactHeader,
  ContactInfoContainer,
  ContactInfo,
  ContactForm,
} from "./contact.style";
import Spinner from "../../components/spinner/spinner";

const Contact = () => {
  const [formSpree, handleSubmit] = useForm("mknqnygb");
  const [message, setMessage] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setMessage({ [name]: value });
  };

  return (
    <ContactContainer>
      <ContactHeader>
        <h1>CONTACT</h1>
      </ContactHeader>
      <ContactInfoContainer>
        <ContactInfo>
          <FaPhoneAlt className="icon" />
          <div>
            <h3>Phone</h3> <p>(760)833-5875</p>
          </div>
        </ContactInfo>
        <ContactInfo>
          <FaEnvelope className="icon" />
          <div>
            <h3>Email</h3> <p>LFlores02142@gmail.com</p>
          </div>
        </ContactInfo>
        <ContactInfo>
          <FaMapMarkerAlt className="icon" />
          <div>
            <h3>Location</h3> <p>Denver, CO</p>
          </div>
        </ContactInfo>
      </ContactInfoContainer>
      <ContactForm onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={message.name}
            onChange={handleChange}
            className="name"
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={formSpree.errors}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={message.email}
            onChange={handleChange}
            className="email"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={formSpree.errors}
          />
        </div>
        <div className="subject">
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={message.subject}
            onChange={handleChange}
            className="subject"
          />
          <ValidationError
            prefix="Subject"
            field="subject"
            errors={formSpree.errors}
          />
        </div>
        <div className="message">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            type="text"
            value={message.message}
            onChange={handleChange}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={formSpree.errors}
          />
        </div>
        <div className="subBtn">
          <button type="submit" className="subBtn">
            {formSpree.submitting ? <Spinner sm/> : "Send Message"}
          </button>
        </div>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
