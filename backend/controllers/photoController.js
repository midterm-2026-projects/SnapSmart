import supabase from "../config/supabaseClient.js";


export async function uploadPhoto(req, res) {

    console.log("UPLOAD REQUEST RECEIVED");


    try {

        const { galleryId } = req.body;

        const file = req.file;


        console.log("BODY:", req.body);
        console.log("FILE:", file?.originalname);



        if (!galleryId || !file) {

            return res.status(400).json({

                message: "Gallery ID and file are required"

            });

        }



        // Create file name
        const fileName = `${Date.now()}-${file.originalname}`;



        console.log("Uploading file:", fileName);



        // Upload image to Supabase Storage
        const { error: uploadError } = await supabase.storage

            .from("photos")

            .upload(
                fileName,
                file.buffer,
                {
                    contentType: file.mimetype
                }
            );



        if (uploadError) {

            console.error(
                "SUPABASE STORAGE ERROR:",
                uploadError
            );

            throw uploadError;

        }



        console.log("Storage upload success");




        // Get image public URL
        const { data: urlData } = supabase.storage

            .from("photos")

            .getPublicUrl(fileName);



        console.log(
            "IMAGE URL:",
            urlData.publicUrl
        );





        // Save image data to photos table
        const { data, error } = await supabase

            .from("photos")

            .insert([

                {
                    gallery_id: galleryId,
                    image_url: urlData.publicUrl
                }

            ])

            .select();



        if (error) {

            console.error(
                "DATABASE ERROR:",
                error
            );

            throw error;

        }



        console.log(
            "Database insert success"
        );



        return res.status(201).json({

            message: "Photo uploaded successfully",

            photo: data

        });



    } catch (error) {


        console.error(
            "UPLOAD ERROR:",
            error
        );



        return res.status(500).json({

            message: error.message || "Upload failed"

        });


    }

}