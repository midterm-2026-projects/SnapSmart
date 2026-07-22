import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";


function Layout() {

  return (

    <div className="
      flex
      min-h-screen
      bg-gray-100
    ">


      {/* Sidebar */}
      <Sidebar />



      {/* Main Content */}

      <div className="
        flex-1
        flex
        flex-col
      ">



        {/* Header */}

        <header
          className="
            h-20
            bg-white
            shadow-sm
            flex
            items-center
            justify-between
            px-10
          "
        >


          <h2
            className="
              text-xl
              font-bold
              text-gray-800
            "
          >
            Booking Management
          </h2>



          {/* Admin */}

          <div
            className="
              flex
              items-center
              gap-3
            "
          >


            <div
              className="
                w-11
                h-11
                rounded-full
                bg-purple-600
                text-white
                flex
                items-center
                justify-center
                font-bold
              "
            >
              A
            </div>



            <div>

              <p
                className="
                  font-semibold
                  text-gray-800
                "
              >
                Admin
              </p>


              <p
                className="
                  text-sm
                  text-gray-500
                "
              >
                Toni Photography
              </p>


            </div>


          </div>


        </header>





        {/* Page */}

        <main
          className="
            p-10
            flex
            justify-start
          "
        >

          <Outlet />

        </main>



      </div>



    </div>

  );

}


export default Layout;