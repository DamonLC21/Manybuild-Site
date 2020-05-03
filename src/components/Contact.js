import React from 'react'
import { FormGroup, FormControl, TextField } from '@material-ui/core';
import img from '../estimates.jpeg'
import Button from '@material-ui/core/Button';
import Send from '@material-ui/icons/Send';
import { Twitter, Instagram, Facebook, LinkedIn } from '@material-ui/icons';

export default function Contact() {
    return (
        <>
            <section className="contact-hero">
                <div className="contact-overlay">
                    <section className="hero-container"> 
                    <div className="contact-heading"> 
                        <h1>Get in Touch</h1>
                        <p>Want to know more? Tell us who you are and ask us a question. You may also email or call us to make an appointment. </p>
                    </div>
                    </section>
                </div>
                <img className="contact-hero-image" src={img} />
            </section>
            <section className="content-container">
                <form className="contact-form" noValidate autoComplete="on">
                <h2>Send Us a Message</h2>
                    <div>
                        <TextField style={{ marginRight: "8px" }} size="small" className="input" required label="First name" variant="outlined" />
                        <TextField size="small" className="input" required label="Last name" variant="outlined" />
                    </div>
                    <TextField size="small" className="input extend" required type="email" label="Email" variant="outlined" />
                    <TextField size="small" className="input extend" required label="Phone Number" variant="outlined" />
                    <TextField
                        className="textarea"
                        label="Message"
                        multiline
                        rows={4}
                        variant="outlined"
                    />
                    <Button
                        id="send-button"
                        variant="contained"
                        endIcon={<Send />}
                    >
                        Send
                    </Button>
                </form>
                <div className="contact-info">
                    <h2>Contact Info</h2>
                    <p>Phone: (720) 334-8842</p>
                    <p>Email: info@ManyBuildSolutions.com</p>
                    <section className="icons">
                        <Twitter />
                        <Instagram />
                        <Facebook />
                        <LinkedIn />
                    </section>
                </div>
            </section>
        </>
    )
}
