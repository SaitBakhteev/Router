import { Outlet, NavLink, useNavigation } from "react-router";

const items = [
  { path: "/", label: "Главная" },
  { path: "/catalog", label: "Каталог (FastAPI)" },
  { path: "/about", label: "О нас" },
  { path: "/services", label: "Услуги" },
  { path: "/blog", label: "Блог" },
  { path: "/contacts", label: "Контакты" },
];

export default function Layout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      {/* Красная полоска прогресса */}
      {isLoading && (
        <div style={{ 
          height: 4, 
          background: 'red', 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          zIndex: 999 
        }} />
      )}
      
      <nav style={{ display: "flex", gap: 16, marginTop: isLoading ? 10 : 0 }}>
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

      {/* Сюда рендерится контент страницы (Catalog и т.д.) */}
      <Outlet />
    </>
  );
}