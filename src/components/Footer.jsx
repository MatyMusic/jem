import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo3.png";
import { FaFacebookF } from "react-icons/fa";
// import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="Footer Logo" />
          </Link>
          <p>
            בית ספר לאגרוף תאילנדי ולאומניות לחימה וקרב מגע, מתאים לכל הגילאים
            בדגש להכנה לתחרויות בארץ ובחוץ לארץ, המדריכים שלנו יוצאי צבא ויחידות
            מיוחדות ובעלי וותק בהדרכת ילדים בלוחמת קרב מגע ואיגרוף תאילנדי
          </p>
          <div className="footer__socials">
            <a
              href="https://www.facebook.com/mixfightisrael"
              target="_blank"
              rel="noreferrer noopener"
            >
              {" "}
              <FaFacebookF />{" "}
            </a>
            <a
              href="https://www.instagram.com/mix_fight_israel/"
              target="_blank"
              rel="noreferrer noopener"
            >
              {" "}
              <AiFillInstagram />{" "}
            </a>

            <a 
            style={{
              color:'red',
              background: 'black'
              
            }}
              href="https://mix-fight-israel-2.netlify.app/"
              target="_blank"
              rel="noreferrer noopener"
            >לחץ כאן לאימון אישי</a>
            <a 
            style={{
              color:'red',
              background: 'black'
              
            }}
              href="https://mix-fight-israel-shop.netlify.app"
              target="_blank"
              rel="noreferrer noopener"
            >לחץ כאן לחנות</a>
            {/* <a href="" target="_blank" rel="noreferrer noopener"></a> */}
          </div>
        </article>
        <article>
          <h4>קישורים </h4>
          <Link to="/about">אודות</Link>
          <Link to="/plans">תוכניות</Link>
          <Link to="/gallery">גלריה</Link>
          <Link to="/Training">אימון אישי</Link>

          <Link to="/contact">צור קשר</Link>
        </article>

        <article>
          <h4>תובנות </h4>
          <Link to="/s">בלוג</Link>
          <Link to="/s">קרב מגע</Link>
          <Link to="/s">אירועים</Link>
          <Link to="/s"> קהילות</Link>
          <Link to="/s"> שאלות ותשובות</Link>
        </article>
        <article>
          <h4>נהיה בקשר </h4>
          <Link to="/contact">צור איתנו קשר</Link>
          <Link to="/s">תמיכה</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>2022 maty dev &copy; כל הזכויות שמורות </small>
      </div>
    </footer>
  );
};

export default Footer;
