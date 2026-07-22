import { useState } from "react";
import axios from "axios";

import ClientInformation from "../components/ClientInformation";
import EventInformation from "../components/EventInformation";


function BookingForm() {

  const [step, setStep] = useState(1);


  const [client, setClient] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
  });


  const [event, setEvent] = useState({
    eventType: "",
    eventDate: "",
    venue: "",
  });



  const [message, setMessage] = useState("");



  const handleClientSubmit = () => {

    if (
      !client.fullName ||
      !client.email ||
      !client.contactNumber
    ) {

      setMessage(
        "Please complete client information."
      );

      return;

    }


    setMessage("");

    setStep(2);

  };





  const handleEventSubmit = () => {


    if (
      !event.eventType ||
      !event.eventDate ||
      !event.venue
    ) {

      setMessage(
        "Please complete event information."
      );

      return;

    }


    setMessage("");

    setStep(3);

  };






  const handleConfirmBooking = async () => {


    try {


      const bookingData = {

        clientName: client.fullName,

        email: client.email,

        contactNumber: client.contactNumber,

        eventType: event.eventType,

        eventDate: event.eventDate,

        venue: event.venue,

      };



      const response = await axios.post(

        "http://localhost:3000/bookings",

        bookingData

      );



      setMessage(
        response.data.message
      );



    } catch(error) {


      console.error(error);


      setMessage(

        error.response?.data?.message ||

        "Booking failed"

      );


    }


  };





  return (

    <div className="
      max-w-4xl
      mx-auto
    ">


      <div className="
        bg-white
        rounded-xl
        shadow-md
        p-8
      ">


        <h1 className="
          text-3xl
          font-bold
          text-gray-800
          mb-8
        ">
          Booking Form
        </h1>





        {
          step === 1 && (

            <>

            <h2 className="
              text-xl
              font-semibold
              text-purple-600
              mb-4
            ">
              Client Information
            </h2>


            <ClientInformation

              client={client}

              setClient={setClient}

              errors={{}}

              clearError={()=>{}}

            />



            <button

              onClick={handleClientSubmit}

              className="
                mt-5
                bg-purple-600
                text-white
                px-6
                py-3
                rounded-lg
              "

            >

              Submit Client Information

            </button>


            </>

          )
        }








        {
          step === 2 && (

            <>

            <h2 className="
              text-xl
              font-semibold
              text-purple-600
              mb-4
            ">
              Event Information
            </h2>



            <EventInformation

              event={event}

              setEvent={setEvent}

              errors={{}}

              clearError={()=>{}}

            />



            <button

              onClick={handleEventSubmit}

              className="
                mt-5
                bg-purple-600
                text-white
                px-6
                py-3
                rounded-lg
              "

            >

              Submit Event Booking

            </button>


            </>

          )
        }








        {
          step === 3 && (

            <>


            <h2 className="
              text-xl
              font-semibold
              text-purple-600
              mb-4
            ">
              Confirm Booking
            </h2>



            <div className="
              bg-gray-100
              p-5
              rounded-lg
              mb-5
            ">


              <p>
                Name: {client.fullName}
              </p>

              <p>
                Email: {client.email}
              </p>

              <p>
                Contact: {client.contactNumber}
              </p>

              <br />

              <p>
                Event: {event.eventType}
              </p>

              <p>
                Date: {event.eventDate}
              </p>

              <p>
                Venue: {event.venue}
              </p>


            </div>





            <button

              onClick={handleConfirmBooking}

              className="
                w-full
                bg-purple-600
                text-white
                py-3
                rounded-lg
                font-semibold
              "

            >

              Confirm Booking

            </button>



            </>

          )
        }






        {
          message && (

            <p className="
              mt-5
              text-purple-600
              font-semibold
            ">

              {message}

            </p>

          )
        }



      </div>


    </div>

  );

}


export default BookingForm;