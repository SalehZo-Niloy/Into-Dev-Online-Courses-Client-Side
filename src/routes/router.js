import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../pages/Blog/Blog";
import CheckOut from "../pages/CheckOut/CheckOut";
import CourseDetails from "../pages/Courses/CourseDetails/CourseDetails";
import Courses from "../pages/Courses/Courses";
import Faq from "../pages/Faq/Faq";
import Home from "../pages/Home/Home";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Login from "../pages/shared/Login/Login";
import Register from "../pages/shared/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/home', element: <Home></Home>
            },
            {
                path: '/courses', element: <Courses></Courses>,
                loader: async () => fetch('https://assignment-10-server-mu.vercel.app/courses')
            },
            {
                path: '/courses/:id', element: <CourseDetails></CourseDetails>,
                loader: async ({ params }) => fetch(`https://assignment-10-server-mu.vercel.app/courses/${params.id}`)
            },
            {
                path: '/checkout/:id', element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: async ({ params }) => fetch(`https://assignment-10-server-mu.vercel.app/courses/${params.id}`)
            },
            {
                path: '/faq', element: <Faq></Faq>
            },
            {
                path: '/blog', element: <Blog></Blog>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/register', element: <Register></Register>
            },
        ]
    },
    {
        path: '*', element: <PageNotFound></PageNotFound>
    }
])