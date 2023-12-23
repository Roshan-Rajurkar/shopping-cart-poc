import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { UserContextProvider } from "../UserContext/userContextProvider";
const AppLayout = () => {
  return (
    <div className="w p-4 h-screen m-auto lg:w-3/4 lg:p-0 relative">
      <UserContextProvider>
        <Header />
      </UserContextProvider>
      <main className="mt-24 flex justify-center">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
