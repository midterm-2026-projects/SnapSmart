import { useEffect, useState } from "react";
import supabase from "../services/supabaseClient";
import "./Gallery.css";

function Gallery() {

    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadPhotos();
    }, []);

    async function loadPhotos() {

        const { data, error } = await supabase
            .from("photos")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) {

            console.error(error);

        } else {

            setPhotos(data);

        }

        setLoading(false);

    }

    return (

        <div className="gallery-container">

            <h1 className="gallery-title">
                SnapSmart Gallery
            </h1>

            <p className="gallery-subtitle">
                Capturing unforgettable moments.
            </p>

            {
                loading &&
                <div className="loading">
                    Loading photos...
                </div>
            }

            {
                !loading &&
                photos.length === 0 &&
                <div className="empty">
                    No photos uploaded yet.
                </div>
            }

            <div className="gallery-grid">

                {
                    photos.map(photo => (

                        <div
                            key={photo.id}
                            className="gallery-card"
                        >

                            <img
                                src={photo.image_url}
                                alt="Gallery"
                            />

                        </div>

                    ))
                }

            </div>

        </div>

    );

}

export default Gallery;