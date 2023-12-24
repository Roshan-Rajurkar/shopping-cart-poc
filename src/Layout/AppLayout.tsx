import Header from "../components/Header";
import { Outlet } from "react-router-dom";
const AppLayout = () => {
  return (
    <div className="w-3/4 p-4 h-content m-auto lg:w-3/4 lg:p-0 relative">
        <Header />
      <main className="flex justify-center mt-20 mb-10">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
