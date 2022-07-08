import "./Home.scss";
import "../../Utils.scss";
import heroTitle from "../../Assets/Images/hero-title.svg";
import heroExtension from "../../Assets/Images/hero-extension.svg";


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
                        <h1>Created By Bellie Joe Jandusay</h1>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;