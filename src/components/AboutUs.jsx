import React from 'react';
import '../assets/AboutUs.css'
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
        
        <header className="header">
            <Link to="/" className="logo-site">Hallsta Fordon</Link>
            <nav className="nav-menu">
            <Link to="/">Hem</Link>
            <a href="https://www.blocket.se/">Bilar i lager</a>

            {/* <Link to="">Bilar i lager</Link> */}
            <Link to="/salj">Sälj din bil</Link>
            <Link to="/om">Om oss</Link>
            </nav>
        </header>

        

        <div className="about-wrapper">
            <div className="circle circle-left"></div>
            <div className="circle circle-right"></div>

            <div className="about-section">
                <h1 className="about-title">Välkommen till Hallsta Fordon</h1>
                <h3 className="about-subtitle">Kvalitetsbilar till rätt pris</h3>
                <p className="about-description">
                Hallsta Fordon är en oberoende bilhandlare med fokus på försäljning, inköp, inbyten och förmedling av bilar. <br /><br />
                Vi drivs av ett genuint bilintresse, gedigen erfarenhet och djup kunskap inom branschen – allt för att ditt bilköp ska bli både tryggt och smidigt. <br /><br />
                Med flera års erfarenhet och tusentals sålda bilar i bagaget kan du känna dig helt säker när du gör affär med oss. <br /><br />
                Vår ambition är att varje kund ska få en förstklassig upplevelse – från första kontakt till leverans av bilen. <br /><br />
                Alla våra fordon är noggrant kontrollerade och leveransklara. Du är varmt välkommen att besöka oss för att se och provköra din nästa bil.
                </p>
            </div>
        </div>


        <footer className="footer">
        <div className="footer-content">
          <p><strong>Adress</strong><br /> <p className="ad-tel-ep-op"><a href="https://www.google.com/maps?q=Brinkvägen+2,+734+30+Hallstahammar"  target="_blank" rel="noopener noreferrer">Brinkvägen 2, 734 30 Hallstahammar</a></p></p>
          <p><strong>Telefon</strong><br /> <p className="ad-tel-ep-op"><a href="tel:0214400011" >021-4400011</a></p></p>
          <p><strong>E-post</strong><br /> <p className="ad-tel-ep-op"><a href="mailto:info@hallstafordon.se" >info@hallstafordon.se</a></p></p>
          <p><strong>Öppettider<br /> </strong> <p className="ad-tel-ep-op">Mån-Fre: 10:00 - 18:00 <br /> Lör: 11:00 - 15:00</p></p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
