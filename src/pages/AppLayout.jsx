import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import { useFetchData } from "../hooks/useFetchData";
import { useEffect } from "react";
import { lazy, Suspense } from "react";
import Spinner from "../ui/Spinner";

const MobileNavigation = lazy(() => import("../ui/MobileNavigation"));

function AppLayout() {
  const { handleFetch, handleFetchConfig } = useFetchData();

  useEffect(() => {
    handleFetch();
    handleFetchConfig();
  }, []);

  return (
    <main className="pb-14 md:pb-0">
      <Header />
      <div className="min-h-[94h]">
        <Outlet />
      </div>
      <Suspense fallback={<Spinner />}>
        <MobileNavigation />
      </Suspense>
    </main>
  );
}

export default AppLayout;
