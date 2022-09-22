import React from "react";
import Header from "../../components/Header";
import HeaderImage from "../../images/l.jpg";
// import HeaderImage from "../../images/header_bg_3.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <Header title="צור קשר " image={HeaderImage}>
        {/* ויטאלי סמיונוב מאמן קרב מגע ואגרוף תאילנדי מהבכירים בארץ, יוצא יחידות
        מובחרות ובעל וותק בתחום אומניות הלחימה ושיטת אימון ייחודית המתאימה לכל
        גיל */}
      </Header>

      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a
              href="mailto:mixfightisrael@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <MdEmail />
            </a>
            <a
              href="https://www.facebook.com/messages/t/840979996000227"
              // href="https://www.messenger.com/"
              // href="https://m.me/ernest_achiever"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsMessenger />
            </a>
            <a
              href="http://wa.me/+972545861775"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
