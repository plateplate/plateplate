document.addEventListener("DOMContentLoaded", () => {
  console.log("document successfully loaded, baby");

  // Button demo
  const btn = document.getElementById("btnClicky");
  if (btn) {
    btn.addEventListener("click", btnClicky);
  }

  // Set year in footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Load data for projects and achievements
  loadProjects();
  loadAchievements();

  // Search handler
  const searchInput = document.getElementById("projectSearch");
  if (searchInput) {
    searchInput.addEventListener("input", handleSearch);
  }
});

let allProjects = [];

function btnClicky() {
  console.log("in btnClicky event");
  const btn = document.getElementById("btnClicky");

  if (btn) {
    btn.style.transform = "rotate(15deg)";
    console.log("after rotation");
  }
}

async function loadJson(url) {
  console.log("[DevProfile] Fetching:", url);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error("[DevProfile] HTTP error", response.status, url);
      return null;
    }
    const data = await response.json();
    console.log("[DevProfile] Data loaded from", url, data);
    return data;
  } catch (err) {
    console.error("[DevProfile] Fetch failed:", url, err);
    return null;
  }
}

// PROJECTS
async function loadProjects() {
  const projectsRow = document.getElementById("projectsRow");
  if (!projectsRow) {
    console.warn("No #projectsRow element found.");
    return;
  }

  const data = await loadJson("assets/data/projects.json");
  allProjects = data || [];
  renderProjects(allProjects);
}

function renderProjects(projects) {
  const container = document.getElementById("projectsRow");
  if (!container) return;

  container.innerHTML = "";

  if (!projects || projects.length === 0) {
    container.innerHTML = `<p class="text-muted">No projects to show yet.</p>`;
    return;
  }

  projects.forEach((proj) => {
    const techBadges = (proj.tech || [])
      .map((t) => `<span class="badge bg-secondary me-1 mb-1">${t}</span>`)
      .join("");

    const imageTag = proj.image
      ? `<img src="${proj.image}" class="card-img-top" alt="${proj.title} screenshot">`
      : "";

    const codeLink = proj.codeUrl
      ? `<a href="${proj.codeUrl}" class="card-link" target="_blank" rel="noopener">
           <i class="bi bi-github"></i> Source
         </a>`
      : "";

    const appLink = proj.appUrl
      ? `<a href="${proj.appUrl}" class="card-link" target="_blank" rel="noopener">
           Live app
         </a>`
      : `<span class="text-muted small">Live app coming soon</span>`;

    const col = document.createElement("div");
    col.className = "col-md-6";

    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        ${imageTag}
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${proj.title}</h5>
          <p class="card-text mb-1"><strong>${proj.role}</strong></p>
          <p class="card-text">${proj.description}</p>
          <div class="mb-2">${techBadges}</div>
          <div class="mt-auto d-flex justify-content-between align-items-center">
            ${codeLink}
            ${appLink}
          </div>
        </div>
      </div>
    `;

    container.appendChild(col);
  });
}

function handleSearch(event) {
  const term = event.target.value.toLowerCase().trim();
  console.log("[DevProfile] Search term:", term);

  if (!term) {
    renderProjects(allProjects);
    return;
  }

  const filtered = allProjects.filter((p) => {
    const haystack = `${p.title} ${p.description} ${(p.tech || []).join(" ")}`.toLowerCase();
    return haystack.includes(term);
  });

  renderProjects(filtered);
}

// ACHIEVEMENTS
async function loadAchievements() {
  const container = document.getElementById("achievementsRow");
  if (!container) {
    console.warn("No #achievementsRow element found.");
    return;
  }

  const data = await loadJson("assets/data/achievements.json");
  const achievements = data || [];
  renderAchievements(achievements);
}

function renderAchievements(achievements) {
  const container = document.getElementById("achievementsRow");
  if (!container) return;

  container.innerHTML = "";

  if (!achievements || achievements.length === 0) {
    container.innerHTML = `<p class="text-muted">No achievements recorded yet.</p>`;
    return;
  }

  achievements.forEach((a) => {
    const col = document.createElement("div");
    col.className = "col-md-4";

    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title d-flex align-items-center gap-2">
            <i class="bi ${a.icon || "bi-award"} text-primary"></i>
            <span>${a.title}</span>
          </h5>
          <p class="card-text mb-2">${a.description}</p>
          <p class="card-text small text-muted mb-0">
            <strong>Category:</strong> ${a.category}<br>
            <strong>When:</strong> ${a.date}
          </p>
        </div>
      </div>
    `;

    container.appendChild(col);
  });
}
