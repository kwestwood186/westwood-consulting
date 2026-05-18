// Westwood Consulting — site interactions

// Inject sticky mobile CTA on every page except coaching itself
(function () {
  var path = window.location.pathname;
  if (path.indexOf("coaching.html") !== -1 || path.endsWith("/404.html")) return;
  var cta = document.createElement("a");
  cta.href = "coaching.html";
  cta.className = "mobile-cta";
  cta.textContent = "Book a session";
  if (document.body) document.body.appendChild(cta);
  else document.addEventListener("DOMContentLoaded", function () { document.body.appendChild(cta); });
})();

// Engagement prompt — triggers on time OR scroll engagement, max once per visitor per week
(function () {
  var path = window.location.pathname;
  var blocked = ["coaching.html", "privacy.html", "404.html"];
  for (var i = 0; i < blocked.length; i++) {
    if (path.indexOf(blocked[i]) !== -1) return;
  }

  // Don't show if dismissed within the last 7 days
  try {
    var lastDismissed = localStorage.getItem("ww_modal_dismissed");
    if (lastDismissed) {
      var daysSince = (Date.now() - parseInt(lastDismissed, 10)) / 86400000;
      if (daysSince < 7) return;
    }
  } catch (e) { /* localStorage unavailable, proceed */ }

  var shown = false;

  function buildModal() {
    var backdrop = document.createElement("div");
    backdrop.className = "engagement-modal-backdrop";
    backdrop.setAttribute("role", "dialog");
    backdrop.setAttribute("aria-modal", "true");
    backdrop.innerHTML =
      '<div class="engagement-modal">' +
        '<button class="engagement-modal-close" aria-label="Close">×</button>' +
        '<span class="eyebrow">Before you go</span>' +
        '<h3>Take something with you</h3>' +
        '<p class="engagement-modal-subtitle">Three free guides built from the same frameworks I use with coaching clients. Grab whichever fits where you are right now.</p>' +
        '<div class="engagement-modal-options">' +
          '<a href="assets/downloads/westwood-cover-letter-template.pdf" download class="engagement-modal-option">' +
            '<div>' +
              '<div class="engagement-modal-option-title">Cover letter template</div>' +
              '<div class="engagement-modal-option-desc">PDF · The two-fit framework + fill-in structure</div>' +
            '</div>' +
            '<span class="engagement-modal-option-arrow">↓</span>' +
          '</a>' +
          '<a href="assets/downloads/westwood-salary-negotiation-worksheet.pdf" download class="engagement-modal-option">' +
            '<div>' +
              '<div class="engagement-modal-option-title">Salary negotiation worksheet</div>' +
              '<div class="engagement-modal-option-desc">PDF · No-number floor + anchor calculator</div>' +
            '</div>' +
            '<span class="engagement-modal-option-arrow">↓</span>' +
          '</a>' +
          '<a href="assets/downloads/westwood-interview-prep-checklist.pdf" download class="engagement-modal-option">' +
            '<div>' +
              '<div class="engagement-modal-option-title">Interview prep checklist</div>' +
              '<div class="engagement-modal-option-desc">PDF · 6 STAR stories + day-of checklist</div>' +
            '</div>' +
            '<span class="engagement-modal-option-arrow">↓</span>' +
          '</a>' +
        '</div>' +
        '<div class="engagement-modal-divider">— Or —</div>' +
        '<a href="https://calendar.app.google/Y1b6zTNn6Ww7pJKy8" class="btn btn-primary">Book a free 15-min consultation</a>' +
      '</div>';
    return backdrop;
  }

  function dismiss(backdrop, reason) {
    backdrop.classList.remove("open");
    try { localStorage.setItem("ww_modal_dismissed", Date.now().toString()); } catch (e) {}
    if (typeof gtag === "function") {
      gtag("event", "engagement_modal_dismissed", { dismiss_reason: reason || "close" });
    }
    setTimeout(function () { if (backdrop.parentNode) backdrop.parentNode.removeChild(backdrop); }, 250);
  }

  function showModal() {
    if (shown) return;
    shown = true;
    var backdrop = buildModal();
    document.body.appendChild(backdrop);
    requestAnimationFrame(function () { backdrop.classList.add("open"); });

    if (typeof gtag === "function") {
      gtag("event", "engagement_modal_shown");
    }

    backdrop.querySelector(".engagement-modal-close").addEventListener("click", function () {
      dismiss(backdrop, "close_button");
    });
    backdrop.addEventListener("click", function (e) {
      if (e.target === backdrop) dismiss(backdrop, "backdrop");
    });
    document.addEventListener("keydown", function escHandler(e) {
      if (e.key === "Escape") {
        dismiss(backdrop, "escape");
        document.removeEventListener("keydown", escHandler);
      }
    });
    // Clicking a download or booking link counts as a conversion, not a dismissal
    var convLinks = backdrop.querySelectorAll(".engagement-modal-option, .btn-primary");
    convLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        if (typeof gtag === "function") {
          gtag("event", "engagement_modal_converted", { item: link.textContent.trim().substring(0, 50) });
        }
        try { localStorage.setItem("ww_modal_dismissed", Date.now().toString()); } catch (e) {}
      });
    });
  }

  // Trigger 1: 90 seconds on page
  var timeTrigger = setTimeout(showModal, 90000);

  // Trigger 2: 60% page scroll
  function onScroll() {
    if (shown) { window.removeEventListener("scroll", onScroll); return; }
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;
    var pct = (window.scrollY / docHeight) * 100;
    if (pct >= 60) {
      clearTimeout(timeTrigger);
      showModal();
      window.removeEventListener("scroll", onScroll);
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
})();

// Collapsible Q&A items on interview-skills page
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".qa-item").forEach(function (item) {
    var q = item.querySelector(".qa-question");
    if (q) {
      q.addEventListener("click", function () {
        item.classList.toggle("open");
      });
    }
  });

  // Mobile side-drawer nav
  var toggle = document.querySelector(".nav-mobile-toggle");
  var nav = document.querySelector(".nav");
  var navLinks = document.querySelector(".nav-links");
  if (!toggle || !nav || !navLinks) return;

  var iconMap = {
    "index.html": "ti-home",
    "application-tools.html": "ti-file-text",
    "interview-skills.html": "ti-messages",
    "salary-negotiation.html": "ti-coin",
    "speaking.html": "ti-microphone",
    "blog.html": "ti-pencil",
    "about.html": "ti-user",
    "testimonials.html": "ti-star",
    "coaching.html": "ti-calendar"
  };

  navLinks.querySelectorAll("a").forEach(function (link) {
    if (link.querySelector("i.ti")) return;
    var href = (link.getAttribute("href") || "").split("#")[0].replace(/^\.\//, "");
    var iconClass = iconMap[href];
    if (!iconClass) return;
    var icon = document.createElement("i");
    icon.className = "ti " + iconClass;
    icon.setAttribute("aria-hidden", "true");
    link.insertBefore(icon, link.firstChild);
  });

  var backdrop = document.createElement("div");
  backdrop.className = "nav-backdrop";
  document.body.appendChild(backdrop);

  var closeLi = document.createElement("li");
  var closeBtn = document.createElement("button");
  closeBtn.className = "nav-drawer-close";
  closeBtn.setAttribute("aria-label", "Close menu");
  closeBtn.innerHTML = "&times;";
  closeLi.appendChild(closeBtn);
  navLinks.insertBefore(closeLi, navLinks.firstChild);

  var homeLi = document.createElement("li");
  homeLi.className = "nav-home-mobile";
  var homeLink = document.createElement("a");
  homeLink.href = "index.html";
  var homeIcon = document.createElement("i");
  homeIcon.className = "ti ti-home";
  homeIcon.setAttribute("aria-hidden", "true");
  homeLink.appendChild(homeIcon);
  homeLink.appendChild(document.createTextNode("Home"));
  homeLi.appendChild(homeLink);
  navLinks.insertBefore(homeLi, closeLi.nextSibling);

  function openDrawer() {
    nav.classList.add("nav-mobile-open");
    backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
    toggle.setAttribute("aria-expanded", "true");
  }
  function closeDrawer() {
    nav.classList.remove("nav-mobile-open");
    backdrop.classList.remove("active");
    document.body.style.overflow = "";
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.setAttribute("aria-expanded", "false");
  toggle.addEventListener("click", function (e) {
    e.stopPropagation();
    if (nav.classList.contains("nav-mobile-open")) closeDrawer();
    else openDrawer();
  });
  closeBtn.addEventListener("click", closeDrawer);
  backdrop.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("nav-mobile-open")) closeDrawer();
  });
  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () { setTimeout(closeDrawer, 80); });
  });
});
