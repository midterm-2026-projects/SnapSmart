import { useState } from "react";
import { uploadImage } from "../../services/cloudinary";
import supabase from "../../services/supabaseClient";

function AdminGalleryUpload() {

    const [images, setImages] = useState([]);
    const [urls, setUrls] = useState([]);
    const [uploading, setUploading] = useState(false);

    function handleSelect(e) {
        const files = Array.from(e.target.files);

        console.log("Selected files:", files);

        setImages(files);
    }

    async function handleUpload() {

        if (images.length === 0) {
            alert("Please select images first");
            return;
        }

        setUploading(true);

        try {

            const uploaded = [];

            for (const image of images) {

                console.log("Uploading:", image.name);

                // Upload to Cloudinary
                const url = await uploadImage(image);

                console.log("Cloudinary URL:", url);

                // Save URL to Supabase
                const { data, error } = await supabase
                    .from("photos")
                    .insert([
                        {
                            gallery_id: 5,
                            image_url: url
                        }
                    ])
                    .select();

                console.log("Supabase Data:", data);
                console.log("Supabase Error:", error);

                if (error) {
                    throw error;
                }

                uploaded.push(url);

            }

            setUrls(prev => [...prev, ...uploaded]);

            setImages([]);

            alert("Images uploaded successfully!");

        } catch (error) {

            console.error("UPLOAD ERROR:", error);

            alert(error.message);

        } finally {

            setUploading(false);

        }

    }

    return (
        <div>

            <h2>Admin Gallery Upload</h2>

            <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleSelect}
            />

            <br />
            <br />

            <button
                onClick={handleUpload}
                disabled={uploading}
            >
                {uploading ? "Uploading..." : "Upload Images"}
            </button>

            <hr />

            <h3>Uploaded Images</h3>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px"
                }}
            >
                {urls.map((url, index) => (
                    <img
                        key={index}
                        src={url}
                        alt={`upload-${index}`}
                        width="200"
                    />
                ))}
            </div>

        </div>
    );

}

export default AdminGalleryUpload;