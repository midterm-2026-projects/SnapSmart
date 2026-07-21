import { useState } from "react";

function Gallery() {
  const [clientName, setClientName] = useState("");
  const [imageName, setImageName] = useState("");
  const [eventType, setEventType] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/gallery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientName,
          imageName,
          eventType,
          fileSize: Number(fileSize),
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(result.message || "Gallery uploaded successfully");
      } else {
        setMessage(result.message || "Failed to create gallery");
      }
    } catch {
      setMessage("Unable to connect to server");
    }
  };

  return (
    <div>
      <h2>Gallery</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Client Name"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        />

        <input
          placeholder="Image Name"
          value={imageName}
          onChange={(e) => setImageName(e.target.value)}
        />

        <input
          placeholder="Event Type"
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
        />

        <input
          type="number"
          placeholder="File Size"
          value={fileSize}
          onChange={(e) => setFileSize(e.target.value)}
        />

        <button type="submit">
          Create Gallery
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default Gallery;