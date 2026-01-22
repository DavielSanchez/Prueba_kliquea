import { Star } from "lucide-react";
import React from "react";

function RepoInformation({ repo }) {
  return (
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
              stroke={repo?.stargazers_count > 0 ? "#e3b341" : "#848d97"}
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
  );
}

export default RepoInformation;
