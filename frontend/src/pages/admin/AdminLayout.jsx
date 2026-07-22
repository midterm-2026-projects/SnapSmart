import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../../styles/admin/AdminLayout.css';

const AdminLayout = ({ children }) => {

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  
  console.log("ADMIN LAYOUT LOADED");
  console.log("CURRENT PATH:", location.pathname);


  const menuItems = [
    {
      label: 'Dashboard',
      path: '/admin/dashboard',
      icon: '📊'
    },

    {
      label: 'Manage Bookings',
      path: '/admin/bookings',
      icon: '📅'
    },

    {
      label: 'Manage Customers',
      path: '/admin/customers',
      icon: '👥'
    },

    {
      label: 'Manage Payments',
      path: '/admin/payments',
      icon: '💰'
    },

    {
      label: 'Manage Packages',
      path: '/admin/packages',
      icon: '📦'
    },

    {
      label: 'Gallery Upload',
      path: '/admin/gallery-upload',
      icon: '📤'
    },

    {
      label: 'Gallery Management',
      path: '/admin/gallery-management',
      icon: '🖼️'
    },

    {
      label: 'To Do List',
      path: '/admin/todo',
      icon: '✓'
    },

    {
      label: 'Notifications',
      path: '/admin/notifications',
      icon: '🔔'
    },

    {
      label: 'Message Clients',
      path: '/admin/messages',
      icon: '💬'
    }
  ];



  const handleLogout = () => {

    // Remove login data kung meron
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // Redirect sa Home
    navigate('/');

  };



  return (

    <div className="admin-container">


      {/* SIDEBAR */}

      <aside
        className={`admin-sidebar ${
          sidebarOpen ? 'open' : 'closed'
        }`}
      >


        <div className="sidebar-header">

          <h2>
            Admin Panel
          </h2>


          <button
            className="toggle-btn"
            onClick={() =>
              setSidebarOpen(!sidebarOpen)
            }
          >
            ☰
          </button>


        </div>



        <nav className="sidebar-nav">


          {
            menuItems.map((item) => (

              <Link
                key={item.path}
                to={item.path}
                className={
                  `nav-item ${
                    location.pathname === item.path
                    ? 'active'
                    : ''
                  }`
                }
              >

                <span className="icon">
                  {item.icon}
                </span>


                {
                  sidebarOpen && (

                    <span className="label">
                      {item.label}
                    </span>

                  )
                }


              </Link>

            ))
          }


        </nav>




        <div className="sidebar-footer">


          <button
            className="logout-btn"
            onClick={handleLogout}
          >

            🚪 Logout

          </button>


        </div>


      </aside>






      {/* MAIN CONTENT */}


      <main className="admin-main">


        <header className="admin-header">


          <div className="header-left">


            <button
              className="sidebar-toggle"
              onClick={() =>
                setSidebarOpen(!sidebarOpen)
              }
            >

              ☰

            </button>



            <h1>
              Admin Dashboard
            </h1>


          </div>





          <div className="header-right">


            <input
              type="search"
              placeholder="Search..."
              className="search-box"
            />



            <div className="admin-profile">


              <img
                src="https://via.placeholder.com/40"
                alt="Admin"
              />


              <span>
                Admin User
              </span>


            </div>


          </div>



        </header>






        <div className="admin-content">

          {children}

        </div>





      </main>



    </div>

  );

};


export default AdminLayout;