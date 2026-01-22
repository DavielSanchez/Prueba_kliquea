import React from "react";
import { Album, Search, LayoutDashboard, Star, BookOpen } from "lucide-react";
import useGithubStore from "../../store/useGithubStore";

function Navbar() {
  const { user } = useGithubStore();
  return (
    <>
      <nav className="border-b border-gray-500 bg-[#010409] px-4 pt-4 mb-8">
        {/* Contenedor Superior: Centrado y con ancho máximo */}
        <div className="flex justify-between items-center max-w-[1280px] mx-auto w-full">
          <div className="flex items-center">
            <img
              src="/icons/github.png"
              alt="github-images"
              className="w-8 h-8 md:w-10 md:h-10 mr-3"
            />
            <span className="font-semibold text-sm md:text-md text-white">
              {user?.login}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Buscador: Solo visible en Desktop */}
            <div className="hidden md:flex items-center border border-[#30363d] rounded-md px-3 py-1.5 gap-2 w-full min-w-[280px] cursor-text">
              <Search size={16} className="text-[#848d97]" />
              <div className="text-sm text-[#848d97] flex-1 flex justify-between items-center">
                <span>
                  Type{" "}
                  <span className="border border-[#30363d] rounded px-1 text-[10px]">
                    /
                  </span>{" "}
                  to search
                </span>
              </div>
            </div>

            <button className="p-1.5 rounded-md border border-[#30363d] hover:bg-[#21262d] transition-colors">
              <Album size={18} strokeWidth={2.5} className="text-[#848d97]" />
            </button>

            <img
              src={user?.avatar_url}
              className="rounded-full w-8 h-8"
              alt="avatar"
            />
          </div>
        </div>

        {/* Tabs Inferiores: Con scroll horizontal en móviles */}
        <div className="max-w-[1280px] mx-auto flex overflow-x-auto no-scrollbar mt-2">
          <div className="flex flex-nowrap">
            <button className="flex items-center gap-2 px-3 py-4 text-sm font-medium text-[#e6edf3] transition-colors group flex-shrink-0">
              <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg group-hover:bg-[#151b23]">
                <BookOpen size={16} />
                <span>Resumen</span>
              </div>
            </button>

            <button className="flex items-center gap-2 px-2 py-4 text-sm font-semibold text-white border-b-2 border-[#fd8c73] flex-shrink-0">
              <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg">
                <Album size={16} />
                <span>Repositorios</span>
                <span className="bg-[#21262d] text-white px-2 py-0.5 rounded-full text-xs font-medium">
                  {(user?.public_repos || 0) + (user?.total_private_repos || 0)}
                </span>
              </div>
            </button>

            <button className="flex items-center gap-2 px-3 py-4 text-sm font-medium text-[#e6edf3] transition-colors group flex-shrink-0">
              <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg group-hover:bg-[#151b23]">
                <LayoutDashboard size={16} />
                <span>Proyectos</span>
              </div>
            </button>

            <button className="flex items-center gap-2 px-3 py-4 text-sm font-medium text-[#e6edf3] transition-colors group flex-shrink-0">
              <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg group-hover:bg-[#151b23]">
                <Star size={16} />
                <span>Stars</span>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
