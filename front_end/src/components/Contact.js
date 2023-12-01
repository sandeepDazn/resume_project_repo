// Contact.js
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="container mt-4">
      <h2 className="text-primary">Contact</h2>
      {/* Add your contact content here */}

      <p>
        Thank you for visiting my portfolio. If you have any inquiries or would
        like to collaborate, feel free to reach out.
      </p>
      <ul class="list-unstyled">
        <li>
          Email: <a href="mailto:john.doe@example.com">john.doe@example.com</a>
        </li>
        <li>
          LinkedIn: <a href="https://www.linkedin.com/in/johndoe">John Doe</a>
        </li>
        <li>
          GitHub: <a href="https://github.com/johndoe">github.com/johndoe</a>
        </li>
        <li>
          Portfolio Website:{" "}
          <a href="http://www.johndoeprofolio.com">www.johndoeprofolio.com</a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
