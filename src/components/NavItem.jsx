import { useLocation } from 'react-router-dom';

export default function NavItem({ name, href, className }) {
  const location = useLocation();
  const path = location.pathname;
  // console.log(location.pathname);
  // return location.pathname
  return (
    <a
      className={`nav-link link-light ${className} ${path === href && 'active'}`}
      href={`${href}`}
    >
      {name}
    </a>
  );
}
