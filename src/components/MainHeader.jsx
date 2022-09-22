import React from "react";
import { Link } from "react-router-dom";
// import Image from '../images/logo.jpg'
// import Image from '../images/zz.jpg'
import Image from '../images/vv.jpg'
// import Image from '../images/vv.jpg'
// import Image from '../images/bol.jpg'
// import Image from '../images/main_header.png'
// import Image from '../images/logo_main.png'
// import Image from '../images/logo7.png'
// import Image from '../images/vv4.png'
// import Image from '../images/vvv.png'
// import Image from '../images/zz1.png'


const MainHeader = () => {
  return (

    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4 className="main" >  בהדרכת ויטאלי סמיונוב   </h4>
          <h1>הצטרפו לאגדות עולם הכושר</h1>
          <p >
          ויטאלי סמיונוב מאמן קרב מגע ואגרוף תאילנדי מהבכירים בארץ, יוצא יחידות  מובחרות ובעל  וותק בתחום אומניות הלחימה ושיטת אימון ייחודית המתאימה לכל גיל
          </p>

          <Link to="/plans" className="btn lg">
           <span   >הירשם</span> 
          </Link>
        </div>
    
        <div className="main__header-right">

            <div className="main__header-circle"></div>
              <div className="main__header-image">
                <img  src={Image} alt="Logo" />
              </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
