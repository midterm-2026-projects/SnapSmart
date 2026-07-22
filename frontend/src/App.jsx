import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


// ======================
// Regular Pages
// ======================

import Home from "./pages/Home";
import About from "./pages/About";
import Packages from "./pages/Packages";
import Booking from "./pages/Booking";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Gallery from "./pages/Gallery";
import MyGallery from "./pages/MyGallery";


// ======================
// Layouts
// ======================

import AuthLayout from "./layouts/AuthLayout";
import PublicLayout from "./layouts/PublicLayout";



// ======================
// Admin Components
// ======================

import AdminLayout from "./pages/admin/AdminLayout";

import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminBookings from "./pages/admin/AdminBookings";
import AdminCustomers from "./pages/admin/AdminCustomers";
import AdminPayments from "./pages/admin/AdminPayments";
import AdminPackages from "./pages/admin/AdminPackages";
import AdminTodoList from "./pages/admin/AdminTodoList";
import AdminNotifications from "./pages/admin/AdminNotifications";
import AdminMessages from "./pages/admin/AdminMessages";
import AdminGalleryUpload from "./pages/admin/AdminGalleryUpload";
import AdminGalleryManagement from "./pages/admin/AdminGalleryManagement";



function App() {


    return (


        <BrowserRouter>


            <Routes>


                {/* ======================
                    PUBLIC ROUTES
                ====================== */}


                <Route
    path="/"
    element={
        <PublicLayout>
            <Home />
        </PublicLayout>
    }
/>



                <Route
    path="/about"
    element={
        <PublicLayout>
            <About />
        </PublicLayout>
    }
/>



               <Route
    path="/packages"
    element={
        <PublicLayout>
            <Packages />
        </PublicLayout>
    }
/>



                <Route
    path="/booking"
    element={
        <PublicLayout>
            <Booking />
        </PublicLayout>
    }
/>

<Route
    path="/gallery"
    element={
        <PublicLayout>
            <Gallery />
        </PublicLayout>
    }
/>


<Route
    path="/my-gallery"
    element={
        <PublicLayout>
            <MyGallery />
        </PublicLayout>
    }
/>

                <Route
                    path="/login"
                    element={
                        <AuthLayout>
                            <Login />
                        </AuthLayout>
                    }
                />


                <Route
                    path="/register"
                    element={
                        <AuthLayout>
                            <Register />
                        </AuthLayout>
                    }
                />





                {/* ======================
                    ADMIN ROUTES
                ====================== */}



                <Route
                    path="/admin/dashboard"
                    element={
                        <AdminLayout>
                            <AdminDashboard />
                        </AdminLayout>
                    }
                />



                <Route
                    path="/admin/bookings"
                    element={
                        <AdminLayout>
                            <AdminBookings />
                        </AdminLayout>
                    }
                />



                <Route
                    path="/admin/customers"
                    element={
                        <AdminLayout>
                            <AdminCustomers />
                        </AdminLayout>
                    }
                />



                <Route
                    path="/admin/payments"
                    element={
                        <AdminLayout>
                            <AdminPayments />
                        </AdminLayout>
                    }
                />



                <Route
                    path="/admin/packages"
                    element={
                        <AdminLayout>
                            <AdminPackages />
                        </AdminLayout>
                    }
                />



                <Route
                    path="/admin/todo"
                    element={
                        <AdminLayout>
                            <AdminTodoList />
                        </AdminLayout>
                    }
                />



                <Route
                    path="/admin/notifications"
                    element={
                        <AdminLayout>
                            <AdminNotifications />
                        </AdminLayout>
                    }
                />



                <Route
                    path="/admin/messages"
                    element={
                        <AdminLayout>
                            <AdminMessages />
                        </AdminLayout>
                    }
                />



                <Route
                    path="/admin/gallery-upload"
                    element={
                        <AdminLayout>
                            <AdminGalleryUpload />
                        </AdminLayout>
                    }
                />



                <Route
                    path="/admin/gallery-management"
                    element={
                        <AdminLayout>
                            <AdminGalleryManagement />
                        </AdminLayout>
                    }
                />






                {/* ======================
                    NOT FOUND ROUTE
                    ALWAYS LAST
                ====================== */}


                <Route
                    path="*"
                    element={
                        <h1>
                            PAGE NOT FOUND:
                            {" "}
                            {window.location.pathname}
                        </h1>
                    }
                />



            </Routes>


        </BrowserRouter>


    );

}


export default App;