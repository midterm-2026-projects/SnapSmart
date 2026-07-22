import supabase from "./supabaseClient";



// =========================
// REGISTER
// =========================

export async function registerUser(userData){


    const {

        email,

        password,

        firstName,

        lastName,

        phoneNumber

    } = userData;




    // Create Auth user

    const {

        data: authData,

        error: authError

    } = await supabase.auth.signUp({

        email,

        password

    });




    if(authError)
        throw authError;




    const user = authData.user;




    if(!user)

        throw new Error(
            "User creation failed"
        );





    // Create Profile

    const {

        error: profileError

    } = await supabase

        .from("profiles")

        .insert([

            {

                id:user.id,

                email,

                first_name:firstName,

                last_name:lastName,

                phone_number:phoneNumber,

                role:"customer"

            }

        ]);





    if(profileError)

        throw profileError;




    return user;


}






// =========================
// LOGIN
// =========================

export async function loginUser(

    email,

    password

){



    // Login Auth

    const {

        data,

        error

    } = await supabase.auth

        .signInWithPassword({

            email,

            password

        });





    if(error)

        throw error;





    const user = data.user;




    if(!user)

        throw new Error(
            "User not found"
        );






    // Get Profile Data

    const {

        data: profiles,

        error: profileError

    } = await supabase

        .from("profiles")

        .select("*")

        .eq(

            "id",

            user.id

        );





    if(profileError)

        throw profileError;





    console.log(
        "PROFILE RESULT:",
        profiles
    );






    // Get first profile only

    const profile = profiles?.[0];







    return {


        ...data,



        user:{


            ...user,



           role:
profile?.role?.trim().toLowerCase() || "customer",



            first_name:

            profile?.first_name || "",



            last_name:

            profile?.last_name || "",



            phone_number:

            profile?.phone_number || ""


        }


    };



}







// =========================
// LOGOUT
// =========================

export async function logoutUser(){



    const {

        error

    } = await supabase.auth.signOut();




    if(error)

        throw error;



}