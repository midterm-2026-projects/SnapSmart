function Gallery() {


  const galleries = [
    {
      client: "Juan Dela Cruz",
      image: "Wedding.jpg",
      event: "Wedding",
      size: "25.4 MB"
    },
    {
      client: "Maria Santos",
      image: "Birthday.jpg",
      event: "Birthday",
      size: "18.7 MB"
    },
    {
      client: "Pedro Reyes",
      image: "Debut.jpg",
      event: "Debut",
      size: "32.1 MB"
    }
  ];



  return (

    <div
      className="
        bg-white
        rounded-xl
        shadow-md
        p-8
        w-full
        max-w-5xl
      "
    >



      <div
        className="
          flex
          justify-between
          items-center
          mb-6
        "
      >

        <div>

          <h1
            className="
              text-3xl
              font-bold
              text-gray-800
            "
          >
            Gallery
          </h1>


          <p className="text-gray-500">
            Manage client galleries
          </p>


        </div>



        <button
          className="
            bg-purple-600
            text-white
            px-5
            py-2
            rounded-lg
          "
        >
          + Create Gallery
        </button>


      </div>





      <table
        className="
          w-full
          overflow-hidden
          rounded-lg
        "
      >


        <thead>

          <tr
            className="
              bg-gray-100
              text-left
            "
          >

            <th className="p-4">
              Client Name
            </th>

            <th className="p-4">
              Image Name
            </th>

            <th className="p-4">
              Event Type
            </th>

            <th className="p-4">
              File Size
            </th>

            <th className="p-4">
              Actions
            </th>

          </tr>

        </thead>




        <tbody>


          {
            galleries.map((gallery,index)=>(

              <tr
                key={index}
                className="
                  border-b
                  hover:bg-gray-50
                "
              >


                <td className="p-4">
                  {gallery.client}
                </td>


                <td className="p-4">
                  {gallery.image}
                </td>


                <td className="p-4">
                  {gallery.event}
                </td>


                <td className="p-4">
                  {gallery.size}
                </td>



                <td className="p-4 space-x-2">


                  <button
                    className="
                      bg-blue-500
                      text-white
                      px-3
                      py-1
                      rounded
                    "
                  >
                    👁
                  </button>



                  <button
                    className="
                      bg-purple-600
                      text-white
                      px-3
                      py-1
                      rounded
                    "
                  >
                    ✏
                  </button>



                  <button
                    className="
                      bg-red-500
                      text-white
                      px-3
                      py-1
                      rounded
                    "
                  >
                    🗑
                  </button>



                </td>


              </tr>


            ))
          }



        </tbody>


      </table>





      <div
        className="
          flex
          justify-center
          gap-3
          mt-6
        "
      >

        <button className="px-3 py-1 border rounded">
          1
        </button>

        <button className="px-3 py-1 border rounded">
          2
        </button>

        <button className="px-3 py-1 border rounded">
          →
        </button>


      </div>



    </div>

  );

}


export default Gallery;