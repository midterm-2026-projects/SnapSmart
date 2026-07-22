import { useNavigate } from "react-router-dom";

import mypic1 from "../assets/mypic1.png";
import mypic2 from "../assets/mypic2.png";
import mypic3 from "../assets/mypic3.png";
import mypic4 from "../assets/mypic4.png";
import mypic5 from "../assets/mypic5.png";
import mypic6 from "../assets/mypic6.png";
import mypic7 from "../assets/mypic7.png";
import mypic8 from "../assets/mypic8.png";
import mypic9 from "../assets/mypic9.png";
import mypic10 from "../assets/mypic10.png";
import mypic11 from "../assets/mypic11.png";
import mypic12 from "../assets/mypic12.png";

import "./MyGallery.css";



function MyGallery(){


    const navigate = useNavigate();




    const photos = [


        {
            id:1,
            image:mypic1,
            title:"Event Memory"
        },


        {
            id:2,
            image:mypic2,
            title:"Event Memory"
        },


        {
            id:3,
            image:mypic3,
            title:"Event Memory"
        },


        {
            id:4,
            image:mypic4,
            title:"Event Memory"
        },


        {
            id:5,
            image:mypic5,
            title:"Event Memory"
        },


        {
            id:6,
            image:mypic6,
            title:"Event Memory"
        },


        {
            id:7,
            image:mypic7,
            title:"Event Memory"
        },


        {
            id:8,
            image:mypic8,
            title:"Event Memory"
        },


        {
            id:9,
            image:mypic9,
            title:"Event Memory"
        },


        {
            id:10,
            image:mypic10,
            title:"Event Memory"
        },


        {
            id:11,
            image:mypic11,
            title:"Event Memory"
        },


        {
            id:12,
            image:mypic12,
            title:"Event Memory"
        }


    ];







    return (


        <div className="my-gallery-container">





            <button

                className="my-gallery-back"

                onClick={() => navigate(-1)}

            >

                ← Back

            </button>









            <section className="my-gallery-heading">



                <h1>
                    My Gallery
                </h1>




                <p>
                    Your personal event memories captured by SnapSmart.
                </p>



            </section>









            <div className="my-gallery-grid">





                {


                    photos.map((photo,index)=>(





                        <div


                            key={photo.id}


                            className="my-gallery-card"



                            style={{

                                animationDelay:
                                `${index * 0.15}s`

                            }}



                        >







                            <img


                                src={photo.image}


                                alt={photo.title}


                            />










                            <div className="my-gallery-overlay">





                                <h3>

                                    {photo.title}

                                </h3>






                                <a


                                    href={photo.image}


                                    download



                                    className="download-btn"


                                >

                                    Download


                                </a>







                            </div>







                        </div>





                    ))


                }





            </div>








        </div>


    );


}



export default MyGallery;