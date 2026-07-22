import { useState } from "react";


function EventInformation({
  event,
  setEvent,
  errors,
  setErrors,
}) {


  const [message, setMessage] = useState("");



  const handleChange = (e) => {

    const { name, value } = e.target;


    setEvent((prev)=>({

      ...prev,

      [name]: value

    }));


    if(value.trim()){

      setErrors((prev)=>({

        ...prev,

        [name]: ""

      }));

    }

  };





  const handleSubmit = () => {


    setMessage("");

    const newErrors = {};



    if(!event.eventType.trim()){

      newErrors.eventType = "Event Type is required";

    }



    if(!event.eventDate){

      newErrors.eventDate = "Event Date is required";

    }



    if(!event.venue.trim()){

      newErrors.venue = "Venue is required";

    }



    setErrors(newErrors);




    const allEmpty =

      !event.eventType.trim() &&

      !event.eventDate &&

      !event.venue.trim();




    const allComplete =

      event.eventType.trim() &&

      event.eventDate &&

      event.venue.trim();






    if(allEmpty){

      setMessage(
        "Please complete all Event Information fields."
      );

      return;

    }





    if(!allComplete){

      setMessage(
        "Please complete the missing Event Information fields."
      );

      return;

    }





    setMessage(
      "Event Information Submitted Successfully!"
    );


  };





  return (

    <div className="
      grid
      grid-cols-1
      gap-5
    ">





      {/* Event Type */}

      <div>


        <label className="
          block
          text-sm
          font-medium
          text-gray-700
          mb-2
        ">
          Event Type
        </label>



        <input

          type="text"

          name="eventType"

          value={event.eventType}

          onChange={handleChange}

          placeholder="Event Type"

          className="
            w-full
            border
            border-gray-300
            rounded-lg
            px-4
            py-3
          "

        />



        {
          errors.eventType && (

            <p className="
              text-red-500
              text-sm
              mt-1
            ">

              {errors.eventType}

            </p>

          )
        }


      </div>







      {/* Event Date */}

      <div>


        <label className="
          block
          text-sm
          font-medium
          text-gray-700
          mb-2
        ">
          Event Date
        </label>



        <input

          type="date"

          name="eventDate"

          value={event.eventDate}

          onChange={handleChange}

          className="
            w-full
            border
            border-gray-300
            rounded-lg
            px-4
            py-3
          "

        />



        {
          errors.eventDate && (

            <p className="
              text-red-500
              text-sm
              mt-1
            ">

              {errors.eventDate}

            </p>

          )
        }


      </div>








      {/* Venue */}

      <div>


        <label className="
          block
          text-sm
          font-medium
          text-gray-700
          mb-2
        ">
          Venue
        </label>




        <input

          type="text"

          name="venue"

          value={event.venue}

          onChange={handleChange}

          placeholder="Venue"

          className="
            w-full
            border
            border-gray-300
            rounded-lg
            px-4
            py-3
          "

        />



        {
          errors.venue && (

            <p className="
              text-red-500
              text-sm
              mt-1
            ">

              {errors.venue}

            </p>

          )
        }



      </div>






      {/* Submit Button */}

      <button

        type="button"

        onClick={handleSubmit}

        className="
          bg-purple-600
          text-white
          px-5
          py-3
          rounded-lg
        "

      >

        Submit Event Booking

      </button>







      {/* Message */}

      {
        message && (

          <p className="
            text-purple-600
            font-semibold
          ">

            {message}

          </p>

        )
      }





    </div>

  );

}


export default EventInformation;