import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import MobileNavigation from "../ui/MobileNavigation";

function Home() {
  return (
    <main className="pb-14 md:pb-0">
      <Header />
      <div className="min-h-[94h]">
        <Outlet />
      </div>
      <MobileNavigation />
    </main>
  );
}

export default Home;
