import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">Квест-Поиск</div>
      <div className="nav-links">
        <NavLink to="/" end className="nav-link">
          Главная
        </NavLink>
        <NavLink to="/challenges" className="nav-link">
          Задания
        </NavLink>
        <NavLink to="/shop" className="nav-link">
          Магазин
        </NavLink>
        <NavLink to="/minigame" className="nav-link">
          Игра
        </NavLink>
        <NavLink to="/profile" className="nav-link">
          Профиль
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
