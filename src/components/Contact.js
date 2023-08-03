import React from 'react';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div>
    <Header page="contact" />
    <div>
    <h1>Contact Me</h1>
    <ContactForm />
    </div>
  </div>
  );
};

export default Contact;