import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PackageCard from "../components/PackageCard";
import Footer from "../components/Footer";


import "./Home.css";



function Home(){


    const packages=[

        {
            title:"Wedding Events",
            image:"/wedding.jpg",
            description:
            "Elegant photography and event coverage."
        },


        {
            title:"Birthday Celebrations",
            image:"/birthday.jpg",
            description:
            "Capture every fun and memorable moment."
        },


        {
            title:"Christening Events",
            image:"/christening.jpg",
            description:
            "Preserve your family's special memories."
        }


    ];



    return (

        <div className="home">


            <Navbar />


            <Hero />



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
                        packages.map((item,index)=>(

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



            <Footer />


        </div>

    );


}


export default Home;