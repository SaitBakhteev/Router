import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

const items = [
  { path: "/", label: "Главная" },
  { path: "/catalog", label: "Каталог" },
  { path: "/about", label: "О нас" },
  { path: "/services", label: "Услуги" },
  { path: "/blog", label: "Блог" },
  { path: "/contacts", label: "Контакты" },
];

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: 16 }}>
      {items.map((i) => (
        <NavLink
          key={i.path}
          to={i.path}
          style={({ isActive }) => ({ fontWeight: isActive ? 700 : 400 })}
        >
          {i.label}
        </NavLink>
      ))}
    </nav>
  );
}

function Page({ title }) {
  return <h2>{title}</h2>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {items.map((i) => (
          <Route key={i.path} path={i.path} element={<Page title={i.label} />} />
        ))}
        <Route path="*" element={<Page title="404" />} />
      </Routes>
    </BrowserRouter>
  );
}