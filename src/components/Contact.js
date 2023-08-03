import React from 'react';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer'; // Adjust the path based on your file structure


const Contact = () => {
  return (
    <div>
    <Header page="contact" />
    <div>
    <h1>Contact Me</h1>
    <ContactForm />
    </div>
    <Footer />
  </div>
  );
};

export default Contact;