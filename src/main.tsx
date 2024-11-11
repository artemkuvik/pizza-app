import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Card } from "./pages/Card/Card.tsx";
import { Error } from "./pages/Error/Error.tsx";
import { Layout } from "./layuot/Layout/Layout.tsx";
import { Product } from "./components/Product/Product.tsx";
import axios from "axios";
import { PREFIX } from "./helpers/Api.ts";
import AuthLayout from "./layuot/AuthLayout/AuthLayout.tsx";
import Login from "./pages/Login/Login.tsx";
import Register from "./pages/Register/Register.tsx";
import { RequireAuth } from "./helpers/RequireAuth.tsx";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";
import { Success } from "./pages/Success/Success.tsx";

const Menu = lazy(() => import("./pages/Menu/Menu.tsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<>Загрузка</>}>
            <Menu />
          </Suspense>
        ),
      },
      {
        path: "/card",
        element: <Card />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/product/:id",
        element: <Product />,
        errorElement: <>Ошибка</>,
        loader: async ({ params }) => {
          const { data } = await axios.get(`${PREFIX}/products/${params.id}`);
          return data;
        },
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
