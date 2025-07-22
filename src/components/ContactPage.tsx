import React, { FC } from "react";
import ContactHome from "./ContactHome";
import Footer from "./Footer";
import ContactForm from "./ContactForm";

const ContactPage: FC = () => {
    return (
        <div>
            <ContactHome />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default ContactPage;
