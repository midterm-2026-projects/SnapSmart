import imageCompression from "browser-image-compression";


const CLOUD_NAME = "kd5qlwff";
const UPLOAD_PRESET = "snapsmart";


export async function uploadImage(file){


    const options = {
        maxSizeMB: 5,
        maxWidthOrHeight: 3000,
        useWebWorker: true
    };


    const compressedFile = await imageCompression(
        file,
        options
    );


    const formData = new FormData();


    formData.append(
        "file",
        compressedFile
    );


    formData.append(
        "upload_preset",
        UPLOAD_PRESET
    );


    const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
            method:"POST",
            body:formData
        }
    );


    const data = await response.json();


    if(!response.ok){
        throw new Error(data.error.message);
    }


    return data.secure_url;

}