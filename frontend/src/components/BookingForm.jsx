import { useState } from "react";

import ClientInformation from "../components/ClientInformation";
import EventInformation from "../components/EventInformation";


function BookingForm() {


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



  const [errors, setErrors] = useState({});

  const [message, setMessage] = useState("");



  const clearError = (field) => {

    setErrors((prev)=>{

      const updated = {
        ...prev
      };

      delete updated[field];

      return updated;

    });

  };




  const handleConfirmBooking = () => {

    setMessage("");



    const clientFields = [

      client.fullName.trim(),

      client.email.trim(),

      client.contactNumber.trim()

    ];



    const eventFields = [

      event.eventType.trim(),

      event.eventDate,

      event.venue.trim()

    ];



    const allFields = [

      ...clientFields,

      ...eventFields

    ];




    const allEmpty = allFields.every(

      (field)=> field === ""

    );



    const allComplete = allFields.every(

      (field)=> field !== ""

    );




    if(allEmpty){

      setMessage(
        "Please complete all required fields."
      );

      return;

    }




    if(!allComplete){

      setMessage(
        "Please complete all required fields before confirming your booking."
      );

      return;

    }



    setMessage(
      "Booking Confirmed Successfully!"
    );


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



        {/* Title */}

        <h1 className="
          text-3xl
          font-bold
          text-gray-800
          mb-2
        ">
          Booking Form
        </h1>



        <p className="
          text-gray-500
          mb-8
        ">
          Manage client booking information
        </p>





        {/* Client Section */}

        <div className="
          mb-8
        ">


          <h2 className="
            text-xl
            font-semibold
            text-gray-700
            mb-4
          ">
            Client Information
          </h2>



          <ClientInformation

            client={client}

            setClient={setClient}

            errors={errors}

            setErrors={setErrors}

            clearError={clearError}

          />


        </div>






        {/* Event Section */}

        <div className="
          mb-8
        ">


          <h2 className="
            text-xl
            font-semibold
            text-gray-700
            mb-4
          ">
            Event Information
          </h2>



          <EventInformation

            event={event}

            setEvent={setEvent}

            errors={errors}

            setErrors={setErrors}

            clearError={clearError}

          />



        </div>







        {/* Confirm Button */}

        <button

          type="button"

          onClick={handleConfirmBooking}

          className="
            w-full
            bg-purple-600
            text-white
            py-3
            rounded-lg
            font-semibold
            hover:bg-purple-700
            transition
          "

        >

          Confirm Booking

        </button>







        {
          message && (

            <p className="
              mt-5
              text-center
              font-semibold
              text-green-600
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