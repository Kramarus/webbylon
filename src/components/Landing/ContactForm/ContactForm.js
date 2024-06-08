import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


export default function ContactForm() {
  const form = useRef();

  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

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
          alert("Wir haben Ihre Nachricht erhalten!");
          setName('');
          setPhone('');
          setEmail('');
          setMessage('');
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
              <form ref={form} onSubmit={sendEmail} method="POST">
                <div class="mb-3">
                  <label htmlFor="name" class="form-label">Name</label>
                  <input type="text" class="form-control" id="name" name='name' value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div class="mb-3">
                  <label htmlFor="email" class="form-label" value={email}>Email</label>
                  <input type="email" class="form-control" id="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div class="mb-3">
                  <label htmlFor="phone" class="form-label" value={phone}>Telefonnummer</label>
                  <input type="tel" class="form-control" id="phone" name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div class="mb-3">
                  <label htmlFor="message" class="form-label" value={message}>Nachricht</label>
                  <textarea class="form-control" id="message" rows="3" name='message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="edv" name='agreed' />
                    <label class="form-check-label" htmlFor="exampleCheck1">Ich bin mit Verarbeitung meiner Daten einverstanden.</label>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-success m-3">Senden</button>
                  <a class="btn btn-danger m-3" data-bs-dismiss="modal">Zurück</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}
