import './BurgerMenu.scss';
import { NavLink } from 'react-router-dom';

export const BurgerMenu = ({ burgerOpen, toggleBurger }: { burgerOpen: boolean; toggleBurger: Function }) => {
  return (
    <div className={`burger ${burgerOpen && 'burger--open'}`}>
      <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link nav-link--selected' : 'nav-link')}>
        <i className="fa-solid fa-earth-europe"></i>
      </NavLink>
      <NavLink to="/map" className={({ isActive }) => (isActive ? 'nav-link nav-link--selected' : 'nav-link')}>
        <i className="fa-solid fa-person"></i>
      </NavLink>
      <button type="button" className="burger__close" onClick={() => toggleBurger()}>
        <i className="fa-solid fa-x"></i>
      </button>
    </div>
  );
};
