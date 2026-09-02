// ==========================================================================
// VITOR DEV PORTFOLIO - MAIN INTERACTION LOGIC (COM GALERIA DE TELAS REAIS)
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initProjectsGallery();
  initProjectModal();
  initLightbox();
  initTerminal();
  initContactForm();
  initStatsCounter();
});

/* ----------------- 1. NAVBAR & SMOOTH SCROLL ----------------- */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("header[id], section[id]");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.top = "10px";
    } else {
      navbar.style.top = "20px";
    }

    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

/* ----------------- 2. PROJECTS GALLERY & FILTER ----------------- */
function initProjectsGallery() {
  const grid = document.getElementById("projects-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");

  if (!grid || typeof projectsData === "undefined") return;

  function renderProjects(filter = "all") {
    grid.innerHTML = "";

    const filtered = filter === "all" 
      ? projectsData 
      : projectsData.filter(p => p.category === filter);

    filtered.forEach(project => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.setAttribute("data-category", project.category);

      let iconSvg = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`;
      if (project.icon === "truck") {
        iconSvg = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>`;
      } else if (project.icon === "cpu") {
        iconSvg = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line></svg>`;
      } else if (project.icon === "file-text") {
        iconSvg = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>`;
      } else if (project.icon === "database") {
        iconSvg = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`;
      } else if (project.icon === "check-square") {
        iconSvg = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>`;
      }

      // Cover image if available
      const coverHtml = project.coverImage 
        ? `<div class="project-card-image-wrap"><img src="${project.coverImage}" alt="${project.title}" loading="lazy"></div>`
        : "";

      card.innerHTML = `
        ${coverHtml}
        <div class="project-card-body">
          <div class="project-card-top">
            <div class="project-icon">${iconSvg}</div>
            <span class="project-badge">${project.badge || project.categoryLabel}</span>
          </div>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.shortDescription}</p>
          <div class="project-tags">
            ${project.tags.slice(0, 4).map(t => `<span class="project-tag">${t}</span>`).join("")}
          </div>
          <div class="project-card-footer">
            <button class="btn-project-details" data-id="${project.id}">
              <span>Ver Fotos & Detalhes</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });

    document.querySelectorAll(".btn-project-details").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const id = e.currentTarget.getAttribute("data-id");
        openProjectModal(id);
      });
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      renderProjects(category);
    });
  });

  renderProjects("all");
}

/* ----------------- 3. PROJECT MODAL & GALLERY ----------------- */
let currentModalImages = [];
let currentImageIndex = 0;

function initProjectModal() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  const galleryBox = document.getElementById("gallery-main-box");

  if (!modal || !closeBtn) return;

  closeBtn.addEventListener("click", () => closeModal());

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });

  if (galleryBox) {
    galleryBox.addEventListener("click", () => {
      if (currentModalImages.length > 0) {
        const cur = currentModalImages[currentImageIndex];
        openLightbox(cur.src, cur.title || cur.desc);
      }
    });
  }

  function closeModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
}

function openProjectModal(projectId) {
  const modal = document.getElementById("project-modal");
  if (!modal || typeof projectsData === "undefined") return;

  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  document.getElementById("modal-badge").textContent = project.categoryLabel;
  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-full-desc").textContent = project.fullDescription;
  document.getElementById("modal-architecture").textContent = project.architecture;

  // Render Image Gallery
  const galleryWrapper = document.getElementById("modal-gallery-wrapper");
  const thumbsStrip = document.getElementById("gallery-thumbs-strip");
  const mainImg = document.getElementById("gallery-main-img");
  const imgTitle = document.getElementById("gallery-img-title");
  const imgDesc = document.getElementById("gallery-img-desc");

  currentModalImages = project.images || [];
  currentImageIndex = 0;

  if (currentModalImages.length > 0) {
    galleryWrapper.style.display = "block";
    thumbsStrip.innerHTML = "";

    // Set first image
    mainImg.src = currentModalImages[0].src;
    imgTitle.textContent = currentModalImages[0].title;
    imgDesc.textContent = currentModalImages[0].desc;

    // Render thumbnails
    currentModalImages.forEach((imgObj, idx) => {
      const thumb = document.createElement("div");
      thumb.className = `gallery-thumb-item ${idx === 0 ? "active" : ""}`;
      thumb.innerHTML = `<img src="${imgObj.src}" alt="${imgObj.title}">`;
      thumb.addEventListener("click", () => {
        document.querySelectorAll(".gallery-thumb-item").forEach(t => t.classList.remove("active"));
        thumb.classList.add("active");
        currentImageIndex = idx;
        mainImg.src = imgObj.src;
        imgTitle.textContent = imgObj.title;
        imgDesc.textContent = imgObj.desc;
      });
      thumbsStrip.appendChild(thumb);
    });
  } else {
    galleryWrapper.style.display = "none";
  }

  // Features list
  const featuresList = document.getElementById("modal-features");
  featuresList.innerHTML = project.features.map(f => `
    <li>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span>${f}</span>
    </li>
  `).join("");

  // Stats grid
  const statsGrid = document.getElementById("modal-stats");
  statsGrid.innerHTML = Object.entries(project.stats || {}).map(([k, v]) => `
    <div class="modal-stat-card">
      <span class="stat-key">${k}</span>
      <span class="stat-val">${v}</span>
    </div>
  `).join("");

  // Tags
  const tagsContainer = document.getElementById("modal-tags");
  tagsContainer.innerHTML = project.tags.map(t => `<span class="project-tag">${t}</span>`).join("");

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

/* ----------------- 4. LIGHTBOX FULLSCREEN ----------------- */
function initLightbox() {
  const lightbox = document.getElementById("lightbox-modal");
  const closeBtn = document.getElementById("lightbox-close-btn");

  if (!lightbox || !closeBtn) return;

  closeBtn.addEventListener("click", () => closeLightbox());
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      closeLightbox();
    }
  });

  function closeLightbox() {
    lightbox.classList.remove("active");
  }
}

function openLightbox(src, caption) {
  const lightbox = document.getElementById("lightbox-modal");
  const lbImg = document.getElementById("lightbox-img");
  const lbCap = document.getElementById("lightbox-caption");

  if (!lightbox || !lbImg) return;

  lbImg.src = src;
  lbCap.textContent = caption || "";
  lightbox.classList.add("active");
}

/* ----------------- 5. TERMINAL INTERATIVO ----------------- */
function initTerminal() {
  const terminalInput = document.getElementById("terminal-input");
  const terminalOutput = document.getElementById("terminal-output");
  const terminalBody = document.getElementById("terminal-body");
  const hintPills = document.querySelectorAll(".cmd-pill");

  if (!terminalInput || !terminalOutput) return;

  const history = [];
  let historyIndex = -1;

  terminalInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const rawCmd = terminalInput.value.trim();
      if (!rawCmd) return;

      history.push(rawCmd);
      historyIndex = history.length;

      executeCommand(rawCmd);
      terminalInput.value = "";
    } else if (e.key === "ArrowUp") {
      if (historyIndex > 0) {
        historyIndex--;
        terminalInput.value = history[historyIndex];
      }
    } else if (e.key === "ArrowDown") {
      if (historyIndex < history.length - 1) {
        historyIndex++;
        terminalInput.value = history[historyIndex];
      } else {
        historyIndex = history.length;
        terminalInput.value = "";
      }
    }
  });

  hintPills.forEach(pill => {
    pill.addEventListener("click", () => {
      const cmd = pill.getAttribute("data-cmd");
      executeCommand(cmd);
      terminalInput.focus();
    });
  });

  function executeCommand(cmdStr) {
    const cleanCmd = cmdStr.toLowerCase().trim();
    
    const cmdEcho = document.createElement("div");
    cmdEcho.className = "terminal-line cmd-echo";
    cmdEcho.textContent = `vitor@portfolio:~$ ${cmdStr}`;
    terminalOutput.appendChild(cmdEcho);

    let responseText = "";
    const parts = cleanCmd.split(" ");

    if (cleanCmd === "clear" || cleanCmd === "vitor clear") {
      terminalOutput.innerHTML = "";
      return;
    }

    if (parts[0] === "vitor") {
      const subCmd = parts[1] || "help";
      if (terminalCommands[subCmd]) {
        responseText = terminalCommands[subCmd];
      } else {
        responseText = `Comando '${subCmd}' não reconhecido. Digite 'vitor help' para ver os comandos válidos.`;
      }
    } else if (terminalCommands[cleanCmd]) {
      responseText = terminalCommands[cleanCmd];
    } else {
      responseText = `Comando '${cmdStr}' não encontrado. Digite 'vitor help' para instruções.`;
    }

    const responseDiv = document.createElement("div");
    responseDiv.className = "terminal-line";
    responseDiv.style.color = "#cbd5e1";
    responseDiv.style.marginBottom = "14px";
    responseDiv.textContent = responseText;
    terminalOutput.appendChild(responseDiv);

    terminalBody.scrollTop = terminalBody.scrollHeight;
  }
}

/* ----------------- 6. STATS ANIMATED COUNTER ----------------- */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll(".stat-number[data-target]");
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-target"), 10);
        const prefix = el.textContent.includes("+") ? "+" : "";
        const suffix = el.textContent.includes("%") ? "%" : (el.textContent.includes("s") ? "s" : "+");
        
        let count = 0;
        const duration = 1500;
        const stepTime = 30;
        const steps = duration / stepTime;
        const increment = target / steps;

        const timer = setInterval(() => {
          count += increment;
          if (count >= target) {
            el.textContent = `${prefix}${target}${suffix}`;
            clearInterval(timer);
          } else {
            el.textContent = `${prefix}${Math.floor(count)}${suffix}`;
          }
        }, stepTime);

        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(stat => observer.observe(stat));
}

/* ----------------- 7. CONTACT FORM & TOAST ----------------- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toast-message");

  if (!form || !toast) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    showToast(`Obrigado pelo contato, ${name || "parceiro"}! Mensagem registrada com sucesso.`);
    form.reset();
  });

  function showToast(msg) {
    toastMsg.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 4500);
  }
}
