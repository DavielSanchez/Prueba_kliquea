import { Link as LINK, Mail, UsersRound } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function UserInformation({ user }) {
  return (
    <aside className="md:col-span-3 flex flex-col items-center md:items-start">
      <img
        src={user?.avatar_url}
        className="w-48 h-48 sm:w-64 sm:h-64 md:w-full rounded-full border border-[#30363d] shadow-sm"
        alt="Avatar"
      />

      <div className="w-full text-center md:text-left">
        <p className="text-white font-semibold text-2xl mt-4">{user?.name}</p>
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
  );
}

export default UserInformation;
