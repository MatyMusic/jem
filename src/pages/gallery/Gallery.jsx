import React from "react";
import Header from "../../components/Header";
// import HeaderImage from "../../images/l.jpg";
import HeaderImage from "../../images/gallery1.jpg";

import "./gallery.css";

const Gallery = () => {
  const galleryLength = 43;
  const images = [];

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));
  }

  return (
    <>
      <Header title="גלריה" image={HeaderImage}></Header>
    

        <section  className="gallery" >

               <div className="container gallery__container">
                {
                  images.map((image, index) => {
                    return <article key={index} >
                       <img src={image} alt={`Gallery ${index + 1}`} />


                    </article>
                  })
                }
               </div>
        </section>

    </>
  );
};

export default Gallery;
