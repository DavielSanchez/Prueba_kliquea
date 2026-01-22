import React, { useEffect } from "react";
import Navbar from "../components/shared/navbar";
import useGithubStore from "../store/useGithubStore";
import { Link as LINK, Mail, Star, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  const { user, repos, loading, fetchGithubData } = useGithubStore();

  useEffect(() => {
    fetchGithubData();
  }, [fetchGithubData]);

  if (loading)
    return (
      <div className="bg-[#0d1117] min-h-screen text-white p-10 flex items-center justify-center">
        <div className="animate-pulse text-xl">Cargando datos...</div>
      </div>
    );

  return (
    <div className="bg-[#0d1117] min-h-screen font-sans text-[#1f2328]">
      <Navbar />

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 px-4 sm:px-10 lg:px-16">
        <aside className="md:col-span-3 flex flex-col items-center md:items-start">
          <img
            src={user?.avatar_url}
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-full rounded-full border border-[#30363d] shadow-sm"
            alt="Avatar"
          />

          <div className="w-full text-center md:text-left">
            <p className="text-white font-semibold text-2xl mt-4">
              {user?.name}
            </p>
            <p className="text-gray-500 text-xl font-light">{user?.login}</p>
          </div>

          <p className="text-[#e6edf3] text-md mt-4 w-full text-center md:text-left">
            {user?.bio}
          </p>

          <Link
            className="w-full block py-1.5 text-center bg-[#21262d] hover:bg-[#30363d] rounded-md text-[#e6edf3] text-sm font-semibold mt-4 border border-[#30363d] transition-colors"
            to={`${user?.html_url}?tab=repositories`}
            target="_blank"
          >
            Ver en GitHub
          </Link>

          <div className="flex flex-wrap justify-center md:justify-start items-center gap-1 text-gray-500 text-sm mt-4 w-full">
            <UsersRound size={16} />
            <span className="text-white font-bold">{user?.followers}</span>
            <span>followers</span>
            <span className="text-white px-1">·</span>
            <span className="text-white font-bold">{user?.following}</span>
            <span>following</span>
          </div>

          <div className="w-full mt-4 space-y-2">
            {user?.email && (
              <p className="text-[#e6edf3] text-sm flex items-center justify-center md:justify-start gap-2">
                <Mail size={16} className="text-[#848d97]" />
                <span className="truncate">{user.email}</span>
              </p>
            )}
            {user?.blog && (
              <p className="text-[#e6edf3] text-sm flex items-center justify-center md:justify-start gap-2">
                <LINK size={16} className="text-[#848d97]" />
                <a
                  href={user.blog}
                  target="_blank"
                  className="hover:text-[#58a6ff] hover:underline font-semibold truncate"
                >
                  {user.blog.replace(/^https?:\/\//, "")}
                </a>
              </p>
            )}
          </div>
        </aside>

        <section className="md:col-span-9">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="py-6 border-b border-[#30363d] first:border-t-0"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={repo?.html_url}
                    target="_blank"
                    className="text-[#58a6ff] text-xl font-semibold hover:underline break-all"
                  >
                    {repo.name}
                  </a>
                  <span className="text-[12px] font-medium text-[#848d97] border border-[#30363d] rounded-full px-2 py-0.5">
                    {repo.private ? "Private" : "Public"}
                  </span>
                </div>

                <div className="flex items-center self-end sm:self-auto">
                  <button className="flex items-center gap-2 px-3 py-1 bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] rounded-l-md text-[#e6edf3] text-xs font-medium transition-colors">
                    <Star
                      size={14}
                      fill={repo?.stargazers_count > 0 ? "#e3b341" : "none"}
                      stroke={
                        repo?.stargazers_count > 0 ? "#e3b341" : "#848d97"
                      }
                    />
                    Star
                  </button>
                  <button className="px-2 py-1 bg-[#21262d] border-y border-r border-[#30363d] rounded-r-md text-[#e6edf3] text-xs transition-colors">
                    {repo?.stargazers_count || 0}
                  </button>
                </div>
              </div>

              <div className="text-sm text-[#848d97] mt-2 max-w-[90%]">
                <p>
                  {repo?.description ||
                    "Este repositorio no cuenta con una descripción."}
                </p>
              </div>

              {repo.language && (
                <div className="mt-4 flex items-center gap-1 text-xs text-[#848d97]">
                  <span className="w-3 h-3 rounded-full bg-[#f1e05a]"></span>
                  <span>{repo.language}</span>
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Home;
