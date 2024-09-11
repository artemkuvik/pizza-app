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

const Menu = lazy(() => import("./pages/Menu/Menu.tsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
    path: "*",
    element: <Error />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
