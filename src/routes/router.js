import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../pages/Blog/Blog";
import Courses from "../pages/Courses/Courses";
import Faq from "../pages/Faq/Faq";
import Home from "../pages/Home/Home";

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
                path: '/faq', element: <Faq></Faq>
            },
            {
                path: '/blog', element: <Blog></Blog>
            },
        ]
    }
])