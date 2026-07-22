import PackageCard from "../components/PackageCard";
import ChatBot from "../components/ChatBot";
import Hero from "../components/Hero";

import assets1 from "../assets/1.jpg";
import assets2 from "../assets/2.jpg";
import assets3 from "../assets/3.jpg";

import "./Home.css";


function Home(){


    const packages = [

        {
            title: "Wedding Events",
            image: assets1,
            description:
            "Elegant photography and event coverage for your most special day."
        },


        {
            title: "Birthday Celebrations",
            image: assets2,
            description:
            "Capture every fun and memorable moment with your loved ones."
        },


        {
            title: "Christening Events",
            image: assets3,
            description:
            "Preserve your family's precious memories forever."
        }

    ];



    return (

        <div className="home">


            {/* Hero Component */}
            <Hero />



            {/* Featured Packages Section */}
            <section className="featured">


                <div className="section-intro">


                    <p className="section-kicker">
                        Curated for every celebration
                    </p>


                    <h2>
                        Featured Packages
                    </h2>


                    <p>
                        Pick from our most popular event photography packages,
                        designed to make booking fast and stress-free.
                    </p>


                </div>





                <div className="package-container">


                    {
                        packages.map((item, index) => (

                            <PackageCard

                                key={index}

                                title={item.title}

                                image={item.image}

                                description={item.description}

                            />

                        ))
                    }


                </div>



            </section>



            {/* AI Chatbot */}
            <ChatBot />


        </div>

    );


}


export default Home;