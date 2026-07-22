import { useState } from "react";
import axios from "axios";

function UploadPhoto() {

  const [galleryId, setGalleryId] = useState("");
  const [photoName, setPhotoName] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const [message, setMessage] = useState("");



  const handleUpload = async () => {

    if (!galleryId || !photoName || !file) {

      setMessage("Please complete all required fields.");

      return;

    }


    const formData = new FormData();


    formData.append("galleryId", galleryId);
    formData.append("photoName", photoName);
    formData.append("image", file);



    try {

      const response = await axios.post(
        "http://localhost:3000/api/photos/upload",
        formData
      );


      setMessage(response.data.message);


      // reset after successful upload
      setGalleryId("");
      setPhotoName("");
      setFile(null);
      setPreview(null);


    } catch (error) {


      console.error(error);


      setMessage(
        error.response?.data?.message || "Upload failed."
      );


    }

  };




  const handleFileChange = (e) => {

    const selectedFile = e.target.files[0];


    if (selectedFile) {

      setFile(selectedFile);

      setPreview(URL.createObjectURL(selectedFile));

      setMessage("");

    }

  };




  return (

    <div
      className="
        bg-white
        rounded-xl
        shadow-md
        p-8
        w-full
        max-w-3xl
      "
    >


      <h1
        className="
          text-3xl
          font-bold
          text-gray-800
          mb-2
        "
      >
        Upload Photo
      </h1>



      <p
        className="
          text-gray-500
          mb-8
        "
      >
        Upload photos to gallery
      </p>





      <div className="space-y-5">



        {/* Gallery ID */}

        <div>

          <label className="block text-sm font-medium mb-2">
            Gallery ID
          </label>


          <input

            type="text"

            value={galleryId}

            onChange={(e)=>{

              setGalleryId(e.target.value);
              setMessage("");

            }}

            placeholder="Enter gallery ID"

            className="
              w-full
              border
              rounded-lg
              p-3
            "

          />

        </div>






        {/* Photo Name */}

        <div>

          <label className="block text-sm font-medium mb-2">
            Photo Name
          </label>


          <input

            type="text"

            value={photoName}

            onChange={(e)=>{

              setPhotoName(e.target.value);
              setMessage("");

            }}

            placeholder="Enter photo name"

            className="
              w-full
              border
              rounded-lg
              p-3
            "

          />

        </div>






        {/* File Upload */}

        <div>

          <label className="block text-sm font-medium mb-2">
            File Upload
          </label>


          <input

            type="file"

            accept="image/*"

            onChange={handleFileChange}

            className="
              w-full
              border
              rounded-lg
              p-3
            "

          />

        </div>






        {/* Preview */}

        {
          preview && (

            <div className="mt-4">


              <p className="text-sm font-medium mb-2">
                Preview
              </p>


              <img

                src={preview}

                alt="Preview"

                className="
                  w-48
                  h-48
                  object-cover
                  rounded-lg
                  border
                "

              />


            </div>

          )
        }







        {/* Button */}

        <button

          onClick={handleUpload}

          className="
            bg-purple-600
            text-white
            px-6
            py-3
            rounded-lg
            hover:bg-purple-700
          "

        >

          Upload Photo

        </button>







        {/* Message */}

        {
          message && (

            <p

              className="
                mt-4
                text-purple-600
                font-semibold
              "

            >

              {message}

            </p>

          )
        }





      </div>


    </div>

  );

}


export default UploadPhoto;