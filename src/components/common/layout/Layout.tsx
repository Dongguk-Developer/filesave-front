// src/components/Layout.tsx
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">공통 헤더</header>
      <main className="flex-1 p-4">
        <Outlet/>
      </main>
      <footer className="bg-gray-800 text-white p-4">공통 푸터</footer>
    </div>
  );
}
