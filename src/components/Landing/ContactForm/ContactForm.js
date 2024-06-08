import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    const SERVICE_ID = 'service_t3g0qae';
    const TEMPLATE_ID = 'template_8k4br6n';
    const PUBLIC_KEY = 'LHnq7SREKvjXiCNxZ';

    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("Success!");
        },
        (error) => {
          console.log('Failed...', error.text);
        },
      );
  };

  return (
    <div class="modal fade" id="contactform" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content text-dark text-start">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Kontakt aufnehmen</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form ref={form} onSubmit={sendEmail}>
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input type="text" class="form-control" id="name" name='name' />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" name='email' />
                </div>
                <div class="mb-3">
                  <label for="phone" class="form-label">Telefonnummer</label>
                  <input type="tel" class="form-control" id="phone" name='phone' />
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label">Nachricht</label>
                  <textarea class="form-control" id="message" rows="3" name='message'></textarea>
                </div>
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="edv" name='agreed' />
                    <label class="form-check-label" for="exampleCheck1">Ich bin mit Verarbeitung meiner Daten einverstanden.</label>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-success">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}
