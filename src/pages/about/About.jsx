import React from "react";
import Header from "../../components/Header";
// import HeaderImage from "../../images/header_bg_1.jpg";
import HeaderImage from "../../images/gallery40.jpg";


import StoryImage from "../../images/zz.jpg";
import VisionImage from "../../images/vv2.jpg";
// import MissionImage from "../../images/vv.jpg";
import MissionImage from "../../images/f.jpg";
// import MissionImage from '../../images/gallery40.jpg'
import "./about.css";

const About = () => {
  return (
    <>
      <Header title="קצת עלי" image={HeaderImage}>
        <p>
          {/* בית ספר לאגרוף תאילנדי ולאומניות לחימה וקרב מגע, מתאים לכל הגילאים
          בדגש להכנה לתחרויות בארץ ובחוץ לארץ */}
        </p>
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Story" />
          </div>
          <div className="about__section-content">
            <h1> הסיפור שלי </h1>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
              optio sequi quis quia accusantium magnam debitis libero explicabo
              dolorum! Labore fugiat perspiciatis amet natus sed culpa nostrum
              repellendus necessitatibus autem.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              exercitationem qui rem! Mollitia illum architecto a temporibus
              quae error, aliquid praesentium dolores pariatur eaque
              consequatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus id,
              distinctio unde similique animi delectus.
            </p>
          </div>
        </div>
      </section>
   
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1> החזון שלי </h1>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
              optio sequi quis quia accusantium magnam debitis libero explicabo
              dolorum! Labore fugiat perspiciatis amet natus sed culpa nostrum
              repellendus necessitatibus autem.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              exercitationem qui rem! Mollitia illum architecto a temporibus
              quae error, aliquid praesentium dolores pariatur eaque
              consequatur.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Story" />
          </div>
        </div>
      </section>
   

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Mission" />
          </div>

          <div className="about__section-content">
            <h1> המשימה שלי </h1>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
              optio sequi quis quia accusantium magnam debitis libero explicabo
              dolorum! Labore fugiat perspiciatis amet natus sed culpa nostrum
              repellendus necessitatibus autem.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              exercitationem qui rem! Mollitia illum architecto a temporibus
              quae error, aliquid praesentium dolores pariatur eaque
              consequatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus id,
              distinctio unde similique animi delectus.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
