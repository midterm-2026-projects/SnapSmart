import {
    useState
} from "react";


import Swal from "sweetalert2";


import {
    Link,
    useNavigate
} from "react-router-dom";


import {
    registerUser
} from "../services/authService";


import "./Register.css";



function Register(){


    const navigate = useNavigate();



    const [formData,setFormData] = useState({

        firstName:"",
        lastName:"",
        email:"",
        phoneNumber:"",
        password:""

    });



    const [loading,setLoading] = useState(false);





    function handleChange(e){

        const { name, value } = e.target;

        const nextValue =
            name === "phoneNumber"
                ? value.replace(/\D/g, "").slice(0, 11)
                : value;


        setFormData({

            ...formData,

            [name]: nextValue

        });


    }







    async function handleSubmit(e){

        e.preventDefault();



        try{


            setLoading(true);



            await registerUser(
                formData
            );




            await Swal.fire({

                title:"Account Created! 🎉",

                text:
                "Welcome to SnapSmart. You can now login to your account.",

                icon:"success",

                confirmButtonText:"Continue",

                confirmButtonColor:"#2563eb",

                background:"#ffffff",

                color:"#111827",

                customClass:{

                    popup:"snapsmart-popup"

                }


            });




            navigate("/login");



        }
        catch(error){



            console.error(error);




            Swal.fire({

                title:"Registration Failed",

                text:
                error.message ||
                "Something went wrong. Please try again.",

                icon:"error",

                confirmButtonText:"Try Again",

                confirmButtonColor:"#2563eb",

                background:"#ffffff",

                color:"#111827",

                customClass:{

                    popup:"snapsmart-popup"

                }


            });



        }
        finally{


            setLoading(false);


        }


    }







    return (



        <div className="register-card">





            <div className="register-header">


                <h1>
                    Create Account
                </h1>


                <p>
                    Join SnapSmart today.
                </p>


            </div>









            <form

                onSubmit={handleSubmit}

                className="register-form"

            >







                <div className="name-row">





                    <div className="input-group">


                        <label>
                            First Name
                        </label>


                        <input

                            name="firstName"

                            type="text"

                            placeholder="Juan"

                            value={
                                formData.firstName
                            }

                            onChange={handleChange}

                            required

                        />


                    </div>









                    <div className="input-group">


                        <label>
                            Last Name
                        </label>


                        <input

                            name="lastName"

                            type="text"

                            placeholder="Dela Cruz"

                            value={
                                formData.lastName
                            }

                            onChange={handleChange}

                            required

                        />


                    </div>





                </div>









                <div className="input-group">


                    <label>
                        Email
                    </label>


                    <input

                        name="email"

                        type="email"

                        placeholder="example@email.com"

                        value={
                            formData.email
                        }

                        onChange={handleChange}

                        required

                    />


                </div>









                <div className="input-group">


                    <label>
                        Phone Number
                    </label>


                    <input

                        name="phoneNumber"

                        type="text"

                        inputMode="numeric"

                        maxLength="11"

                        placeholder="09xxxxxxxxx"

                        value={
                            formData.phoneNumber
                        }

                        onChange={handleChange}

                    />


                </div>









                <div className="input-group">


                    <label>
                        Password
                    </label>


                    <input

                        name="password"

                        type="password"

                        placeholder="Create password"

                        value={
                            formData.password
                        }

                        onChange={handleChange}

                        required

                    />


                </div>









                <button

                    className="register-button"

                    disabled={loading}

                >


                    {

                        loading

                        ?

                        "Creating account..."

                        :

                        "Register"

                    }


                </button>





            </form>









            <div className="login-link">


                <p>

                    Already have an account?


                    <Link to="/login">

                        Login

                    </Link>


                </p>


            </div>







        </div>


    );


}



export default Register;