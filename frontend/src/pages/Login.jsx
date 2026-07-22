import { useState } from "react";
import {
    Link,
    useNavigate,
    useLocation
} from "react-router-dom";

import Swal from "sweetalert2";

import { loginUser } from "../services/authService";

import "./Login.css";


function Login() {


    const navigate = useNavigate();
    const location = useLocation();


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);



    async function handleSubmit(e) {


        e.preventDefault();


        try {


            setLoading(true);



            const data = await loginUser(

                email.trim(),

                password.trim()

            );



            console.log(
                "LOGIN SUCCESS:",
                data
            );


            console.log(
                "USER DATA:",
                data.user
            );


            console.log(
                "USER ROLE:",
                data.user?.role
            );



            sessionStorage.setItem(
                "isLoggedIn",
                "true"
            );



            sessionStorage.setItem(

                "user",

                JSON.stringify(data.user)

            );







            await Swal.fire({


                title:"Welcome back!",


                text:
                "You have successfully logged in to SnapSmart.",


                icon:"success",


                confirmButtonText:"Continue",


                confirmButtonColor:"#2563eb"


            });







            // =========================
            // ADMIN REDIRECT
            // =========================


            if(

                String(data.user?.role)
                .trim()
                .toLowerCase() === "admin"

            ){


                console.log(
                    "ADMIN FOUND"
                );


                console.log(
                    "REDIRECTING TO ADMIN DASHBOARD"
                );


                window.location.replace(
                    "/admin/dashboard"
                );


                return;


            }







            // =========================
            // CUSTOMER REDIRECT
            // =========================


            const redirectTo =

                location.state?.redirectTo || "/";




            if(

                redirectTo === "/booking" &&

                location.state?.packageId

            ){


                navigate("/booking",{


                    state:{


                        packageId:

                        location.state.packageId


                    }


                });


            }


            else{


                navigate(redirectTo);


            }




        }


        catch(error){


            console.error(
                "LOGIN ERROR:",
                error
            );



            Swal.fire({


                title:"Login Failed",


                text:

                error.message ||
                "Incorrect email or password.",


                icon:"error",


                confirmButtonText:"Try Again",


                confirmButtonColor:"#2563eb"


            });



        }


        finally{


            setLoading(false);


        }



    }







    return (


        <div className="login-card">



            <div className="login-header">


                <h1>
                    Welcome Back
                </h1>


                <p>
                    Login to your SnapSmart account.
                </p>


            </div>







            <form

                onSubmit={handleSubmit}

                className="login-form"

            >



                <div className="input-group">


                    <label>
                        Email
                    </label>



                    <input


                        type="email"


                        placeholder="Enter your email"


                        value={email}


                        onChange={(e)=>

                            setEmail(e.target.value)

                        }


                        required


                    />


                </div>







                <div className="input-group">


                    <label>
                        Password
                    </label>



                    <input


                        type="password"


                        placeholder="Enter your password"


                        value={password}


                        onChange={(e)=>

                            setPassword(e.target.value)

                        }


                        required


                    />


                </div>







                <button

                    className="login-button"

                    disabled={loading}

                >

                    {

                        loading

                        ?

                        "Logging in..."

                        :

                        "Login"

                    }


                </button>




            </form>








            <div className="register-link">


                <p>


                    Don't have an account?



                    <Link to="/register">

                        Register

                    </Link>



                </p>


            </div>




        </div>


    );


}


export default Login;