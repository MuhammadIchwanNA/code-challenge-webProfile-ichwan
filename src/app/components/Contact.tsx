"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema
const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(6, 'Name must be at least 6 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Full name is required'),
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  message: Yup.string()
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message must be less than 500 characters')
    .required('Message is required')
});

// Initial form values
const initialValues = {
  name: '',
  email: '',
  message: ''
};

export default function ContactSection() {
  const handleSubmit = async (values: typeof initialValues, { setSubmitting, resetForm, setStatus }: any) => {
    try {
      
      console.log('Form submitted:', values);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success message
      setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
      resetForm();
      
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        {/* Left: Portrait */}
        <div className="contact__portrait">
          <img
            src="/wallstreet.jpg"
            alt="Portrait / contact visual"
            className="contact__portraitImg"
          />
        </div>

        {/* Right: Copy + Form */}
        <div className="contact__content">
          <h2 className="contact__title">Contact Me</h2>

          <div className="contact__meta">
            <div className="meta__row">
              <span className="meta__label">Contact</span>
              <a href="mailto:muhammadalams1636@gmail.com" className="meta__value">
                muhammadalams1636@gmail.com
              </a>
            </div>

            <div className="meta__row">
              <span className="meta__label">Based in</span>
              <div className="meta__value">
                <div className="based__city">Jakarta,</div>
                <div className="based__country">Indonesia</div>
              </div>
            </div>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={ContactSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, status, errors, touched }) => (
              <Form className="contact__form">
                {/* Status Pesan */}
                {status && (
                  <div className={`form__status form__status--${status.type}`}>
                    {status.message}
                  </div>
                )}

                {/* Full Name */}
                <div className="form__field">
                  <label htmlFor="name" className="field__label">Full Name</label>
                  <Field
                    id="name"
                    name="name"
                    type="text"
                    className={`field__input ${errors.name && touched.name ? 'field__input--error' : ''}`}
                    placeholder="Your name"
                  />
                  <ErrorMessage name="name" component="div" className="field__error" />
                </div>

                {/* Email */}
                <div className="form__field">
                  <label htmlFor="email" className="field__label">E-mail</label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    className={`field__input ${errors.email && touched.email ? 'field__input--error' : ''}`}
                    placeholder="your@email.com"
                  />
                  <ErrorMessage name="email" component="div" className="field__error" />
                </div>

                {/* Message */}
                <div className="form__field">
                  <label htmlFor="message" className="field__label">Message</label>
                  <Field
                    id="message"
                    name="message"
                    as="textarea"
                    rows={4}
                    className={`field__input field__textarea ${errors.message && touched.message ? 'field__input--error' : ''}`}
                    placeholder="Your message here..."
                  />
                  <ErrorMessage name="message" component="div" className="field__error" />
                </div>

                {/* Submit Button */}
                <button 
                  className={`contact__button ${isSubmitting ? 'contact__button--loading' : ''}`} 
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending... ' : 'Message Me! '}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}