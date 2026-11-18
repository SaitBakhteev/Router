import { useState, useEffect } from "react";
import { fetchObject } from "./api";

export default function Catalog() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchObject()
      .then((res) => setData(res.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h2>Загрузка (спиннер)...</h2>;

  return <h2>Ответ от FastAPI: {data}</h2>;
}