import "./Home.scss";
import "../../Utils.scss";
import heroTitle from "../../Assets/Images/hero-title.svg";
import heroExtension from "../../Assets/Images/hero-extension.svg";
import footerExtension from "../../Assets/Images/footer-extension.svg";


import { Link } from "react-router-dom";

function Home(){
    return (
        <div className="Home">
            <section class="hero-section">
                <div className="container">
                    <img className="hero-title" src={heroTitle} alt="" />
                    <h1>Paste it on this sheet</h1>
                    <Link to="signup">
                        Get Started
                    </Link>
                </div>
                <div className="hero-extension">
                    <img src={heroExtension} alt="divider" />
                </div>
            </section>
            <section class="creator-section">
                <div className="container">
                    <div>
                        <h1>Created By <span>Bellie Joe Jandusay</span></h1>
                        <div className="socials">
                            <i className="fa-brands fa-facebook-square facebook"></i>
                            <i className="fa-brands fa-google-plus-square google"></i>
                            <i className="fa-brands fa-linkedin linkedin"></i>
                            <i className="fa-brands fa-github-square github"></i>
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer-section">
                <div>
                    <img src={footerExtension} alt="footer wave" />
                </div>
            </section>
        </div>
    );
}

export default Home;