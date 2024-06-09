import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    let response = await fetch("https://personal-website-3xdn.vercel.app/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ email }),
    });
    let result = await response.json();
    if (result.code === 200) {
      setStatus('success');
      setMessage('An email has been sent to you and might be in your spam folder. Thank you!');
      setEmail('');
    } else {
      setStatus('error');
      setMessage('Something went wrong, please try again later.');
    }
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>I'm open to any opportunities.<br></br> Please share your email, and I'll contact you.</h3>
            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
