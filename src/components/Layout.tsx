import { NavLink, Outlet } from "react-router-dom"
import '../styles/layout.css'

export const Layout = () => {
  return (
    <main className="layout">
      <nav className='navbar'>
        <h1>MINNEK</h1>
        <ul className="navbar_navigation">
          <li>
            <NavLink to='/list' className={({ isActive }) => isActive ? 'active' : ''}>
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-dog">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M11 5h2" />
                <path d="M19 12c-.667 5.333 -2.333 8 -5 8h-4c-2.667 0 -4.333 -2.667 -5 -8" />
                <path d="M11 16c0 .667 .333 1 1 1s1 -.333 1 -1h-2z" />
                <path d="M12 18v2" />
                <path d="M10 11v.01" />
                <path d="M14 11v.01" />
                <path d="M5 4l6 .97l-6.238 6.688a1.021 1.021 0 0 1 -1.41 .111a.953 .953 0 0 1 -.327 -.954l1.975 -6.815z" />
                <path d="M19 4l-6 .97l6.238 6.688c.358 .408 .989 .458 1.41 .111a.953 .953 0 0 0 .327 -.954l-1.975 -6.815z" />
              </svg>
              <span>Dogs</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/management' className={({ isActive }) => isActive ? 'active' : ''}>
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-layout-cards">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                <path d="M14 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
              </svg>
              <span>Management</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </main>
  )
}
