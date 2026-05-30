"use client";

import { useState } from "react";
import "./FooterSection.css";

const testimonials = [
  {
    quote:
      "GRM MET MASH PROJECTS delivered exceptional quality and on-time results. Their precision and professionalism make them our go-to industrial partner.",
    name: "Rakesh Sharma",
    position: "Operations Head",
    image: "/client-1.jpg",
  },
  {
    quote:
      "Their team understands industrial requirements properly and supports us with practical solutions, fast response, and reliable supply.",
    name: "Amit Verma",
    position: "Maintenance Manager",
    image: "/client-2.jpg",
  },
  {
    quote:
      "We value GRM MET MASH for their technical approach, product knowledge, and commitment towards long-term industrial reliability.",
    name: "Sanjay Mehta",
    position: "Plant Engineering",
    image: "/client-3.jpg",
  },
];

export default function FooterSection() {
  const [active, setActive] = useState(0);

  return (
    <>
      <section className="testimonial-section">
        <div className="testimonial-container">
          <h2>
            What Our <span>Clients</span> Say
          </h2>

          <div className="testimonial-card">
            <div className="quote-mark">“</div>

            <p>{testimonials[active].quote}</p>

            <div className="client-info">
              <img
                src={testimonials[active].image}
                alt={testimonials[active].name}
              />

              <div>
                <h4>{testimonials[active].name}</h4>
                <span>{testimonials[active].position}</span>
              </div>
            </div>
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={active === index ? "dot active" : "dot"}
                onClick={() => setActive(index)}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="quote-strip">
        <div className="quote-strip-inner">
          <h2>Request a Custom Quote</h2>

          <a href="/contact" className="quote-strip-btn">
            Get Started <span>→</span>
          </a>
        </div>
      </section>

      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-brand">
            <img src="/grm-logo.png" alt="GRM Met Mash Projects" />

            <p>
              Delivering precision manufacturing solutions with quality,
              reliability, and commitment.
            </p>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/singhsummi/" aria-label="LinkedIn">
                in
              </a>
              <a href="#" aria-label="Facebook">
                f
              </a>
              <a href="#" aria-label="Instagram">
                ◎
              </a>
              <a href="#" aria-label="Twitter">
                x
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>

            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#services">Services</a>
            <a href="#">Industries</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
          </div>

          <div className="footer-column">
            <h3>Our Services</h3>

            <a href="/products/industrial-bearings">Industrial Bearings</a>
            <a href="/products/industrial-lubricants">Industrial Lubricants</a>
            <a href="/products/induction-heating-systems">
              Induction Heating Systems
            </a>
            <a href="/products/conveyor-belt-solutions">Conveyor Belts</a>
            <a href="/products/wire-rope-solutions">Wire Rope Solutions</a>
            <a href="/products/industrial-equipment-spares">
              Industrial Spares
            </a>
          </div>

          <div className="footer-column contact-column">
            <h3>Contact Us</h3>

            <p>📞 +91 12345 67890</p>
            <p>✉ info@grmmetmash.com</p>
            <p>📍 123, Industrial Area, Your City - 123456</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 GRM MET MASH PROJECTS. All Rights Reserved.</p>

          <div>
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </footer>
    </>
  );
}