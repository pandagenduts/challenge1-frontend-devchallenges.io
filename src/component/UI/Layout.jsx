import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { useEffect } from "react";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    if(location.pathname === '/') {
      navigate('/buttons')
    }
  })

  return (
    <>
      <div className="flex flex-col web-wrapper md:flex-row">
        <Navigation />
        <main className="w-full min-h-screen px-4 pt-6 pb-4 md:pt-14">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
