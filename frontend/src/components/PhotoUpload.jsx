import { useState } from "react";

function PhotoUpload() {
  const [galleryId, setGalleryId] = useState("");
  const [photoName, setPhotoName] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [message, setMessage] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:3000/gallery/${galleryId}/photos`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            photoName,
            fileSize: Number(fileSize),
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        setMessage("Photo uploaded successfully");
      } else {
        setMessage(result.message);
      }
    } catch {
      setMessage("Unable to connect to server");
    }
  };

  return (
    <div>
      <h2>Upload Photo</h2>

      <form onSubmit={handleUpload}>
        <input
          placeholder="Gallery ID"
          value={galleryId}
          onChange={(e) => setGalleryId(e.target.value)}
        />

        <input
          placeholder="Photo Name"
          value={photoName}
          onChange={(e) => setPhotoName(e.target.value)}
        />

        <input
          type="number"
          placeholder="File Size"
          value={fileSize}
          onChange={(e) => setFileSize(e.target.value)}
        />

        <button type="submit">
          Upload Photo
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default PhotoUpload;