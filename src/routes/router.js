import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../pages/Blog/Blog";
import CheckOut from "../pages/CheckOut/CheckOut";
import CourseDetails from "../pages/Courses/CourseDetails/CourseDetails";
import Courses from "../pages/Courses/Courses";
import Faq from "../pages/Faq/Faq";
import Home from "../pages/Home/Home";
import Login from "../pages/shared/Login/Login";

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
                loader: async () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/courses/:id', element: <CourseDetails></CourseDetails>,
                loader: async ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/checkout/:id', element: <CheckOut></CheckOut>,
                loader: async ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
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
        ]
    }
])