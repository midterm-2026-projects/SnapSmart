import "./AuthLayout.css";


function AuthLayout({children}){


    return (

        <div className="auth-page">


            <div className="auth-left">


                <div className="auth-brand">


                    <h1>
                        SnapSmart
                    </h1>


                    <p>
                        Capture moments.
                        <br/>
                        Manage events.
                        <br/>
                        Create memories.
                    </p>


                </div>


            </div>




            <div className="auth-right">


                {children}


            </div>



        </div>

    );

}


export default AuthLayout;