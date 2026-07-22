import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "./Navbar.css";



function Navbar() {


    const navigate = useNavigate();


    const [isLoggedIn, setIsLoggedIn] = useState(false);





    useEffect(() => {


        function checkLogin(){


            setIsLoggedIn(

                sessionStorage.getItem("isLoggedIn") === "true"

            );


        }



        checkLogin();



        window.addEventListener(
            "storage",
            checkLogin
        );



        return () => {


            window.removeEventListener(
                "storage",
                checkLogin
            );


        };


    }, []);








    function handleLogout(){


        sessionStorage.removeItem(
            "isLoggedIn"
        );


        sessionStorage.removeItem(
            "user"
        );



        setIsLoggedIn(false);



        navigate("/");


    }









    function handleBooking(){


        if(isLoggedIn){


            navigate("/booking");


        }


        else{


            navigate("/login");


        }


    }









    return (



        <nav className="navbar">





            {/* BRAND */}

            <div className="navbar-brand">


                <h2>
                    SnapSmart
                </h2>


            </div>








            {/* LINKS */}

            <div className="navbar-links">


                <Link to="/">
                    Home
                </Link>





                {


                    isLoggedIn ?



                    (

                        <Link to="/my-gallery">

                            My Gallery

                        </Link>


                    )



                    :



                    (

                        <Link to="/gallery">

                            Gallery

                        </Link>


                    )


                }







                <Link to="/packages">

                    Packages

                </Link>







                <Link to="/about">

                    About Us

                </Link>





            </div>









            {/* ACTION BUTTONS */}


            <div className="navbar-actions">





                {


                    !isLoggedIn ?



                    (


                        <Link

                            to="/login"

                            className="login-btn"

                        >

                            Login

                        </Link>


                    )



                    :



                    (


                        <button

                            className="login-btn"

                            onClick={handleLogout}

                        >

                            Logout

                        </button>


                    )



                }









                <button


                    className="book-btn"


                    onClick={handleBooking}


                >

                    Book Now


                </button>





            </div>






        </nav>


    );


}



export default Navbar;