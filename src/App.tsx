import NavBar from './components/NavBar'
import Footer from './components/Footer'
import AppRoutes from './router'
import ShootingStar from "./components/ShootingStar";
import { useLocation } from "react-router-dom";


export default function App() {
    const { pathname } = useLocation();
    const isHome = pathname === "/"; 
    return (
      <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
        {isHome && (
        <ShootingStar
        burstCount={50}
        tricklePerMinute={100}
        maxConcurrent={100}
        directionDeg={90} // all top -> bottom, same direction
        />
       ) }
        <NavBar />
        <main id="content" className="flex-1">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    );
  }