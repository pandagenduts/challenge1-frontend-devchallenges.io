import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { useEffect } from "react";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    if(location.pathname === '/') {
      navigate('/button')
    }
  })

  return (
    <>
      <div className="flex flex-col web-wrapper md:flex-row">
        <Navigation />
        <main className="w-full min-h-screen bg-slate-400">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
