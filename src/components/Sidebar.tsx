import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Sidebar = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  return (
    <aside className="sidebar">
     <div className="sidebar-header">
        <h1 className="logo">{t('nav.energy')}</h1>
        <button className="menu-btn" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>
      <nav className={`${open ? "open" : "closed"}`}>
      <ul>
        <li>
          <NavLink to="/" end  className={({ isActive }) =>
        isActive ? "menu-link active" : "menu-link"
      }>{t('nav.dashboard')}</NavLink>
        </li>
        <li>
          <NavLink to="/reports"  className={({ isActive }) =>
        isActive ? "menu-link active" : "menu-link"
      }
>{t('nav.reports')}</NavLink>
        </li>
        <li>
          <NavLink to="/settings"  className={({ isActive }) =>
        isActive ? "menu-link active" : "menu-link"
      }>{t('nav.settings')}</NavLink>
        </li>
      </ul>
    </nav>
    </aside>
  );
};

export default Sidebar;
