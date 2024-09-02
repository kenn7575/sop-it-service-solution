import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { stripPath } from '../services/pathFormatter';

export default function ({
  destination = '/',
  text = 'Home',
  icon = 'fa-solid fa-house',
}) {
  const location = useLocation();
  const navigate = useNavigate();

  function handleClick() {
    navigate(destination, { replace: true });
  }

  function isSelected() {
    return stripPath(location.pathname, 1) === destination
      ? 'selected'
      : 'bg-transparent';
  }

  return (
    <NavLink
      to={destination}
      className={`button ${isSelected()} w-full cursor-pointer rounded-[10px] border-none p-[0.7rem_1rem] text-red-500 transition-colors duration-100 ease-in-out`}
    >
      <div className="flex items-center justify-start gap-2">
        <i className={icon + ' w-8 text-center text-xl text-foreground3'} />
        <p className="text-[1.2rem] text-foreground3">{text}</p>
      </div>
    </NavLink>
  );
}
