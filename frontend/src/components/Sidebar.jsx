import { NavLink } from "react-router-dom";


function Sidebar() {


  const menuItems = [

    {
      name: "Dashboard",
      path: "/",
      icon: "🏠"
    },

    {
      name: "Booking Form",
      path: "/booking",
      icon: "📋"
    },

    {
      name: "Gallery",
      path: "/gallery",
      icon: "🖼"
    },

    {
      name: "Upload Photo",
      path: "/upload-photo",
      icon: "📤"
    },

    {
      name: "Clients",
      path: "/clients",
      icon: "👥"
    },

    {
      name: "Reports",
      path: "/reports",
      icon: "📊"
    },

    {
      name: "Settings",
      path: "/settings",
      icon: "⚙️"
    },

    {
      name: "Logout",
      path: "/logout",
      icon: "🚪"
    }

  ];




  return (

    <aside
      className="
        w-64
        min-h-screen
        bg-slate-950
        text-white
        px-6
        py-8
      "
    >



      {/* Logo */}

      <div
        className="
          flex
          items-center
          gap-3
          mb-10
        "
      >

        <span
          className="
            text-2xl
          "
        >
          📷
        </span>


        <h1
          className="
            text-2xl
            font-bold
          "
        >
          SnapSmart
        </h1>


      </div>





      <p
        className="
          text-xs
          text-gray-400
          mb-5
          uppercase
        "
      >
        Navigation
      </p>





      <nav
        className="
          space-y-3
        "
      >


        {
          menuItems.map((item)=>(


            <NavLink

              key={item.name}

              to={item.path}


              className={({isActive}) =>

                `
                flex
                items-center
                gap-4
                px-4
                py-3
                rounded-xl
                text-sm
                font-medium
                transition-all

                ${
                  isActive
                  ?
                  "bg-purple-600 text-white shadow-lg"
                  :
                  "text-gray-300 hover:bg-slate-800"
                }

                `

              }

            >


              <span
                className="
                  text-lg
                "
              >
                {item.icon}
              </span>



              <span>
                {item.name}
              </span>



            </NavLink>


          ))
        }



      </nav>



    </aside>

  );

}


export default Sidebar;