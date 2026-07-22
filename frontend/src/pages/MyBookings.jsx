import { useEffect, useState } from "react";

import "./MyBookings.css";



function MyBookings(){


    const [bookings, setBookings] = useState([]);

    const [loading, setLoading] = useState(true);





    async function loadBookings(){


        try{


            const user =
            JSON.parse(
                sessionStorage.getItem("user")
            );



            console.log(
                "CURRENT USER:",
                user
            );



            const storedBookings =
            JSON.parse(
                localStorage.getItem("bookings")
            )
            ||
            [];



            console.log(
                "LOCAL BOOKINGS:",
                storedBookings
            );



            const myBookings =
            storedBookings.filter(

                booking =>

                booking.customer_id === user?.id

            );



            console.log(
                "MY BOOKINGS:",
                myBookings
            );



            setBookings(
                myBookings
            );



        }

        catch(error){


            console.error(
                "LOAD BOOKINGS ERROR:",
                error
            );


        }


        finally{


            setLoading(false);


        }


    }







    useEffect(()=>{


        loadBookings();


    },[]);







    if(loading){


        return (

            <div className="loading-bookings">

                <h2>
                    Loading bookings...
                </h2>

            </div>

        );


    }









    return (


        <div className="my-bookings-page">





            <div className="my-bookings-header">


                <p className="eyebrow">

                    My Reservations

                </p>



                <h1>

                    My Bookings

                </h1>



                <p>

                    View your photography reservations,
                    event details, and booking status.

                </p>



            </div>









            {
                bookings.length === 0 ?


                (

                    <div className="empty-bookings">


                        <h2>

                            No bookings found

                        </h2>



                        <p>

                            Your submitted bookings will appear here.

                        </p>


                    </div>


                )



                :



                (


                    <div className="booking-grid">



                    {

                        bookings.map((booking)=>(


                            <div

                                className="booking-card"

                                key={booking.id}

                            >






                                <div className="booking-card-top">



                                    <div>


                                        <h2>

                                            {booking.package_name}

                                        </h2>



                                        <span>

                                            {booking.booking_code}

                                        </span>


                                    </div>






                                    <span

                                    className={
                                        `status ${booking.status}`
                                    }

                                    >

                                        {booking.status}


                                    </span>



                                </div>









                                <div className="booking-details">



                                    <div>

                                        <label>
                                            Event
                                        </label>


                                        <p>
                                            {booking.event_type}
                                        </p>

                                    </div>






                                    <div>

                                        <label>
                                            Date
                                        </label>


                                        <p>
                                            {booking.event_date}
                                        </p>

                                    </div>







                                    <div>

                                        <label>
                                            Time
                                        </label>


                                        <p>
                                            {booking.event_time}
                                        </p>

                                    </div>






                                    <div>

                                        <label>
                                            Venue
                                        </label>


                                        <p>
                                            {booking.venue_name}
                                        </p>


                                    </div>





                                    <div>


                                        <label>
                                            Contact
                                        </label>


                                        <p>
                                            {booking.contact_number}
                                        </p>


                                    </div>






                                    <div>


                                        <label>
                                            Motif
                                        </label>


                                        <p>
                                            {booking.motif || "None"}
                                        </p>


                                    </div>





                                </div>









                                <div className="booking-footer">



                                    <div>


                                        <small>
                                            Payment
                                        </small>


                                        <strong>

                                            {booking.payment_status}

                                        </strong>


                                    </div>







                                    <div>


                                        <small>
                                            Package Price
                                        </small>


                                        <strong>

                                            ₱{booking.package_price}

                                        </strong>


                                    </div>



                                </div>









                                <div className="booking-notes">


                                    <strong>
                                        Notes
                                    </strong>



                                    <p>

                                        {booking.notes || "No notes"}

                                    </p>



                                </div>







                            </div>


                        ))

                    }



                    </div>


                )

            }





        </div>


    );


}





export default MyBookings;