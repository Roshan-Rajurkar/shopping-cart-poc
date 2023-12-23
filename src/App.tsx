import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductPage from "./pages/ProductPage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./Layout/AppLayout";

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <AppLayout/>,
      children : [
        {
          index : true,
          element: <HomePage />,
        },
        {
          path: "/product/:id",
          element: <ProductPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/signup",
          element: <SignUpPage />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
        {
          path: "/checkout",
          element: <CheckoutPage />,
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ]
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
