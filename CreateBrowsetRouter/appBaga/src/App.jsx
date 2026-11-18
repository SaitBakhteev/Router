import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout";
import Catalog from "./Catalog";
import { objectLoader } from "./api";

function Page({ title }) {
  return <h2>{title}</h2>;
}

// Создаем роутер
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Page title="Главная" /> },
      // Привязываем loader прямо к маршруту:
      { 
        path: "catalog", 
        element: <Catalog />, 
        loader: objectLoader 
      },
      { path: "about", element: <Page title="О нас" /> },
      { path: "services", element: <Page title="Услуги" /> },
      { path: "blog", element: <Page title="Блог" /> },
      { path: "contacts", element: <Page title="Контакты" /> },
      { path: "*", element: <Page title="404" /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}