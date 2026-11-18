import { useLoaderData } from "react-router";

export default function Catalog() {
  const data = useLoaderData();
  return <h2>Ответ от FastAPI: {data.message}</h2>;
}