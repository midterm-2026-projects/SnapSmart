import "./Hero.css";
import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";


function Hero(){

    const navigate = useNavigate();


    const handleBooking = () => {

        const user = sessionStorage.getItem("user");


        if(user){

            navigate("/booking");

        } else {

            navigate("/login");

        }

    };



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


                    <Link 
                        to="/packages" 
                        className="hero-button"
                    >
                        Explore Packages
                    </Link>



                    <button
                        onClick={handleBooking}
                        className="hero-button secondary"
                    >
                        Book Now
                    </button>



                </div>


            </div>




            <div className="hero-logo">


                <img
                    src={logo}
                    alt="SnapSmart Logo"
                />


            </div>



        </section>

    );


}


export default Hero;