import { useState } from "react";
import { useNavigate } from "react-router-dom";

import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";
import pic5 from "../assets/pic5.png";

import "./Gallery.css";



function Gallery(){


    const navigate = useNavigate();


    const [selectedPhoto, setSelectedPhoto] = useState(null);




    const photos = [


        {
            id:1,
            image_url:pic1
        },


        {
            id:2,
            image_url:pic2
        },


        {
            id:3,
            image_url:pic3
        },


        {
            id:4,
            image_url:pic4
        },


        {
            id:5,
            image_url:pic5
        }


    ];







    return (


        <div className="gallery-container">





            <button

                className="back-button"

                onClick={() => navigate(-1)}

            >

                ← Back

            </button>







            <section className="gallery-heading">


                <h1>
                    SnapSmart Gallery
                </h1>


                <p>
                    Capturing timeless moments, beautifully preserved.
                </p>


            </section>









            <div className="gallery-grid">



                {

                    photos.map((photo,index)=>(



                        <div


                            key={photo.id}


                            className="gallery-card"


                            style={{

                                animationDelay:
                                `${index * 0.1}s`

                            }}



                            onClick={() =>

                                setSelectedPhoto(photo)

                            }


                        >





                            <img

                                src={photo.image_url}

                                alt="SnapSmart Event"

                            />







                            <div className="overlay">


                                <span>
                                    View Photo
                                </span>


                            </div>





                        </div>



                    ))

                }



            </div>









            {


                selectedPhoto &&





                <div


                    className="lightbox"


                    onClick={() =>

                        setSelectedPhoto(null)

                    }


                >






                    <div


                        className="lightbox-content"


                        onClick={(e)=>

                            e.stopPropagation()

                        }


                    >






                        <button


                            className="close"


                            onClick={() =>

                                setSelectedPhoto(null)

                            }


                        >

                            ×

                        </button>








                        <img


                            src={selectedPhoto.image_url}


                            alt="Preview"


                        />





                    </div>





                </div>



            }





        </div>


    );


}



export default Gallery;