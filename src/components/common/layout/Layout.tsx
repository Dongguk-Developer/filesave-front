// src/components/Layout.tsx
import { Outlet } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
export default function Layout() {
    const navigate = useNavigate();
    const location = useLocation();

    const getLinkClass = (path: string) => {
        return location.pathname === path
        ? "cursor-pointer font-bold underline"
        : "cursor-pointer";
    };
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-[#F7FAFC] text-[#0D141C] p-4 flex flex-row justify-between border-b-2 border-[#D1DBE8]">
        <div className="flex flex-row gap-1 cursor-pointer" onClick={()=>{navigate('/')}}>
            <div className="h-full flex flex-col justify-center">
                <div className="w-4 h-4 bg-black"></div>
            </div>
            <div className="font-black">FileDrop</div>    
        </div>
        <div className="flex flex-row gap-4">
            <div className={getLinkClass("/access")} onClick={()=>{navigate('/access')}}>Access</div>
            <div className={getLinkClass("/share")} onClick={()=>{navigate('/share')}}>Share</div>
            <div className={getLinkClass("/")} onClick={()=>{navigate('/')}}>Home</div>
        </div>
      </header>
      <main className="flex-1 p-4 bg-[#F7FAFC]">
        <Outlet/>
      </main>
      {/* <footer className="bg-gray-800 text-white p-4">공통 푸터</footer> */}
    </div>
  );
}
