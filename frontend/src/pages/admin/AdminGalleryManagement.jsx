import React, { useState } from "react";
import "../../styles/admin/AdminGalleryManagement.css";

const AdminGalleryManagement = () => {

  const [photos, setPhotos] = useState([
    {
      id: 1,
      title: "Wedding Ceremony",
      category: "Wedding",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552",
      date: "July 20, 2026",
    },
    {
      id: 2,
      title: "Birthday Celebration",
      category: "Birthday",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d",
      date: "July 18, 2026",
    },
    {
      id: 3,
      title: "Debut Event",
      category: "Debut",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
      date: "July 15, 2026",
    },
  ]);


  const [filter, setFilter] = useState("All");


  const filteredPhotos =
    filter === "All"
      ? photos
      : photos.filter(
          (photo) => photo.category === filter
        );



  const handleDelete = (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this photo?"
    );


    if (confirmDelete) {

      setPhotos(
        photos.filter(
          (photo) => photo.id !== id
        )
      );

    }

  };



  return (

    <div className="gallery-management-container">


      <div className="gallery-header">

        <div>

          <h1>
            🖼️ Gallery Management
          </h1>

          <p>
            Manage uploaded photos and gallery content
          </p>

        </div>


        <button className="upload-btn">
          📤 Upload Photos
        </button>


      </div>





      <div className="gallery-filter">


        {[
          "All",
          "Wedding",
          "Birthday",
          "Debut"
        ].map((category) => (

          <button
            key={category}
            className={
              filter === category
                ? "active"
                : ""
            }
            onClick={() =>
              setFilter(category)
            }
          >
            {category}
          </button>

        ))}


      </div>





      <div className="gallery-grid">


        {filteredPhotos.map((photo) => (


          <div
            className="gallery-card"
            key={photo.id}
          >


            <img
              src={photo.image}
              alt={photo.title}
            />



            <div className="gallery-info">


              <h3>
                {photo.title}
              </h3>


              <span>
                {photo.category}
              </span>


              <p>
                Added: {photo.date}
              </p>



              <div className="gallery-actions">


                <button
                  className="edit-btn"
                >
                  ✏️ Edit
                </button>



                <button
                  className="delete-btn"
                  onClick={() =>
                    handleDelete(photo.id)
                  }
                >
                  🗑 Delete
                </button>


              </div>


            </div>


          </div>


        ))}


      </div>


    </div>

  );

};


export default AdminGalleryManagement;