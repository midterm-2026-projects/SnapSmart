import "./Hero.css";
import { Link } from "react-router-dom";


function Hero(){


    return (

        <section className="hero">


            <div className="hero-content">


                <h1>
                    Capture Every Moment.
                    <br/>
                    Create Unforgettable Events.
                </h1>


                <p>

                    Professional photography,
                    videography, and event services
                    designed to preserve your
                    special memories.

                </p>



                <div className="hero-buttons">


                    <Link to="/packages" className="hero-button">
                        Explore Packages
                    </Link>



                    <Link to="/packages" className="hero-button secondary">

                        Book Now

                    </Link>



                </div>


            </div>




        </section>

    );


}


export default Hero;