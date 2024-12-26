import AddBook from "../pages/Admin/AddBook";
import AdminRoute from "../pages/Admin/AdminRoute";
import BookDetail from "../pages/Admin/BookDetail";
import Books from "../pages/Admin/Books";
import Dashboard from "../pages/Admin/Dashboard";
import EditBook from "../pages/Admin/EditBook";
import Basket from "../pages/User/Basket";
import Favorites from "../pages/User/Favorites";
import Home from "../pages/User/Home";
import UserBookDetail from "../pages/User/UserBookDetail";
import UserBooks from "../pages/User/UserBooks";
import UserRoute from "../pages/User/UserRoute";


const ROUTE = [
    {
        path: "/",
        element: <UserRoute />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/books",
                element: <UserBooks />
            },
            {
                path: "/books/:id",
                element: <UserBookDetail />
            },
            {
                path: "/favorites",
                element: <Favorites />
            },
            {
                path: "/basket",
                element: <Basket />
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminRoute />,
        children: [
            {
                path:"",
                element:<Dashboard/>
            },
            {
                path: "adminbooks",
                element: <Books />
            },
            {
                path: "adminbooks/:id",
                element: <BookDetail />
            },
            {
                path: "addbook",
                element: <AddBook />
            },
            {
                path: "editbook",
                element: <EditBook />
            }
        ]
    }

]

export default ROUTE