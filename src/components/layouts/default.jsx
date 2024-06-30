import { Outlet } from "react-router-dom";

function SharedLayout() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <header className="text-center mb-6">
        <h1 className="text-2xl font-bold">Bare-Bones App</h1>
      </header>
      <Outlet />
    </main>
  );
}

export default SharedLayout;