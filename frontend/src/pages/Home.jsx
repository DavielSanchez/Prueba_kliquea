import React, { useEffect } from "react";
import Navbar from "../components/shared/navbar";
import useGithubStore from "../store/useGithubStore";
import { Link as LINK, Mail, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import RepoInformation from "../components/RepoInformation";
import UserInformation from "../components/UserInformation";

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
        <UserInformation user={user} repos={repos} />
        <section className="md:col-span-9">
          {repos.map((repo) => (
            <RepoInformation repo={repo} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default Home;
