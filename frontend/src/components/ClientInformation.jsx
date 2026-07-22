import { useState } from "react";


function ClientInformation({
  client,
  setClient,
  errors,
  setErrors,
  clearError
}) {


  const [message, setMessage] = useState("");



  const handleChange = (e) => {

    const { name, value } = e.target;


    setClient((prev) => ({
      ...prev,
      [name]: value
    }));


    if(value.trim()) {

      if(clearError){

        clearError(name);

      }
      else {

        setErrors((prev)=>({
          ...prev,
          [name]: ""
        }));

      }

    }

  };




  const handleSubmit = () => {


    setMessage("");


    const newErrors = {};



    if(!client.fullName.trim()){

      newErrors.fullName = "Name is required";

    }



    if(!client.email.trim()){

      newErrors.email = "Email is Required";

    }



    if(!client.contactNumber.trim()){

      newErrors.contactNumber = "Contact Number is Required";

    }



    setErrors(newErrors);





    const allEmpty =

      !client.fullName.trim() &&

      !client.email.trim() &&

      !client.contactNumber.trim();




    const allComplete =

      client.fullName.trim() &&

      client.email.trim() &&

      client.contactNumber.trim();






    if(allEmpty){

      setMessage(
        "Please complete all Client Information fields."
      );

      return;

    }





    if(!allComplete){

      setMessage(
        "Please complete the missing Client Information fields."
      );

      return;

    }





    setMessage(
      "Client Information Submitted Successfully!"
    );


  };





  return (

    <div className="
      grid
      grid-cols-1
      md:grid-cols-2
      gap-5
    ">




      {/* Full Name */}

      <div>


        <label className="
          block
          text-sm
          font-medium
          text-gray-700
          mb-2
        ">
          Full Name
        </label>



        <input

          type="text"

          name="fullName"

          value={client.fullName}

          onChange={handleChange}

          placeholder="Full Name"

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
          errors.fullName && (

            <p className="text-red-500 text-sm mt-1">
              {errors.fullName}
            </p>

          )
        }


      </div>








      {/* Email */}


      <div>


        <label className="
          block
          text-sm
          font-medium
          text-gray-700
          mb-2
        ">
          Email Address
        </label>



        <input

          type="email"

          name="email"

          value={client.email}

          onChange={handleChange}

          placeholder="Email"

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
          errors.email && (

            <p className="text-red-500 text-sm mt-1">
              {errors.email}
            </p>

          )
        }


      </div>









      {/* Contact Number */}


      <div className="
        md:col-span-2
      ">


        <label className="
          block
          text-sm
          font-medium
          text-gray-700
          mb-2
        ">
          Contact Number
        </label>



        <input

          type="text"

          name="contactNumber"

          value={client.contactNumber}

          onChange={handleChange}

          placeholder="Contact Number"

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
          errors.contactNumber && (

            <p className="text-red-500 text-sm mt-1">
              {errors.contactNumber}
            </p>

          )
        }


      </div>








      {/* Submit Button */}


      <div className="
        md:col-span-2
      ">


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

          Submit Client Information

        </button>



      </div>







      {/* Message */}


      {
        message && (

          <p className="
            md:col-span-2
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



export default ClientInformation;