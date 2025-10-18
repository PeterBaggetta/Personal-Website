import { useEffect, useMemo, useState } from "react";

/** Simple language → dot color map */
const LANG_COLORS = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#555555",
  "C#": "#178600",
  Go: "#00ADD8",
  Rust: "#dea584",
  Shell: "#89e051",
  HTML: "#e34c26",
  CSS: "#563d7c",
};

/** Small SVG icons (no deps) */
const Star = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
    />
  </svg>
);

const External = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z"
    />
  </svg>
);

/** Skeleton card while loading */
const Skeleton = () => (
  <div className="card repo-card skeleton" aria-hidden="true">
    <div className="repo-title shimmer" />
    <div className="repo-desc shimmer" />
    <div className="repo-desc shimmer short" />
    <div className="repo-meta shimmer" />
  </div>
);

export default function RepoList() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [lang, setLang] = useState("All");
  const [sort, setSort] = useState("name"); // updated | stars | name
  const [error, setError] = useState("");

  useEffect(() => {
    let canceled = false;
    setLoading(true);
    setError("");
  
    async function loadRepos() {
      try {
        // --- 1️⃣  Fetch your own repos ---
        const res = await fetch(
          "https://api.github.com/users/PeterBaggetta/repos?per_page=100&sort=updated"
        );
        if (!res.ok) throw new Error(`GitHub ${res.status}`);
        const data = await res.json();
  
        // --- 2️⃣  Filter: only keep featured/starred, non-forks, non-archived ---
        const ownRepos = data.filter(
          (r) =>
            !r.fork &&
            !r.archived &&
            (r.topics?.includes?.("featured") || r.stargazers_count > 0)
        );
  
        // --- 3️⃣  Add external repos you want to feature manually ---
        const extras = await Promise.all([
          // 🔧 Replace these with the full repo API URLs you want shown:
          fetch("https://api.github.com/repos/PeterBaggetta/Autoencoder").then((r) =>
            r.json()
          ),
          // Add or remove entries as needed ↑
        ]);
  
        // --- 4️⃣  Merge + sort newest first ---
        const combined = [...ownRepos, ...extras].filter(Boolean);
        combined.sort(
          (a, b) =>
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );
  
        if (!canceled) setRepos(combined);
      } catch (err) {
        console.error(err);
        if (!canceled) setError("Could not load repositories.");
      } finally {
        if (!canceled) setLoading(false);
      }
    }
  
    loadRepos();
    return () => {
      canceled = true;
    };
  }, []);
  

  const languages = useMemo(() => {
    const set = new Set(repos.map((r) => r.language).filter(Boolean));
    return ["All", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, [repos]);

  const filtered = useMemo(() => {
    let out = [...repos];

    if (q.trim()) {
      const needle = q.toLowerCase();
      out = out.filter(
        (r) =>
          r.name.toLowerCase().includes(needle) ||
          (r.description || "").toLowerCase().includes(needle)
      );
    }

    if (lang !== "All") {
      out = out.filter((r) => r.language === lang);
    }

    switch (sort) {
      case "stars":
        out.sort((a, b) => b.stargazers_count - a.stargazers_count);
        break;
      case "name":
        out.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        out.sort(
          (a, b) =>
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );
    }

    return out;
  }, [repos, q, lang, sort]);

  return (
    <section className="section" aria-labelledby="repos-heading">
      <div className="repo-header">
        <h2 id="repos-heading">Projects / Repositories</h2>
        <p className="sub">
          Check out some of my work on Github!
        </p>
      </div>

      {/* Controls */}
      <div className="repo-controls" role="group" aria-label="Repository filters">
        <label className="input">
          <span className="visually-hidden">Search repositories</span>
          <input
            type="search"
            placeholder="Search repos…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-label="Search repositories"
          />
        </label>

        <label className="select">
          <span className="visually-hidden">Filter by language</span>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            aria-label="Filter by language"
          >
            {languages.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </label>

        <label className="select">
          <span className="visually-hidden">Sort repositories</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            aria-label="Sort repositories"
          >
            <option value="updated">Recently updated</option>
            <option value="stars">Most stars</option>
            <option value="name">Name A–Z</option>
          </select>
        </label>
      </div>

      {/* Grid */}
      {error && <div className="notice error">{error}</div>}

      <div className="repo-grid" data-loading={loading ? "true" : "false"}>
        {loading &&
          Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} />)}

        {!loading &&
          filtered.map((repo) => (
            <a
              key={repo.id}
              className="card repo-card"
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${repo.name} on GitHub`}
            >
              <div className="repo-top">
                <h3 className="repo-name">{repo.name}</h3>
                <External className="ext" />
              </div>

              <p className="repo-desc">
                {repo.description || "No description provided."}
              </p>

              <div className="repo-meta">
                <span className="lang">
                  <span
                    className="dot"
                    style={{
                      background:
                        LANG_COLORS[repo.language] || "var(--muted-dot)",
                    }}
                    aria-hidden="true"
                  />
                  {repo.language || "Other"}
                </span>

                <span className="stars">
                  <Star /> {repo.stargazers_count}
                </span>

                <span className="updated">
                  Updated {new Date(repo.updated_at).toLocaleDateString()}
                </span>
              </div>
            </a>
          ))}

        {!loading && !filtered.length && (
          <div className="notice">No repositories match your filters.</div>
        )}
      </div>
    </section>
  );
}
