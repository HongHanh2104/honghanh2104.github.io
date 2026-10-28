// Iris Lattice motion: neural field, scroll reveals, heading decrypt, card tilt.
// Pauses when the tab is hidden, thins out on small screens, and stays static
// when the visitor prefers reduced motion.

(function () {
  var root = document.documentElement;
  var reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  var mobileQuery = window.matchMedia("(max-width: 768px)");
  var fineQuery = window.matchMedia("(pointer: fine)");

  function prefersReduced() {
    return reduceQuery.matches;
  }

  function isMobile() {
    return mobileQuery.matches;
  }

  var stage = document.querySelector(".signal-stage");
  var canvas = document.getElementById("signal-field");
  var ctx = canvas ? canvas.getContext("2d", { alpha: true }) : null;

  var nodes = [];
  var edges = [];
  var pulses = [];
  var width = 0;
  var height = 0;
  var dpr = 1;
  var running = false;
  var rafId = 0;
  var lastTime = 0;
  var resizeTimer = 0;
  var pointer = { x: 0.5, y: 0.32 };
  var pointerTarget = { x: 0.5, y: 0.32 };
  var scrollCurrent = 0;
  var scrollTarget = 0;

  function palette() {
    var dark = root.getAttribute("data-theme") === "dark";
    if (dark) {
      return {
        rose: "rgba(240, 183, 200, 0.9)",
        mauve: "rgba(210, 192, 238, 0.85)",
        iris: "rgba(197, 208, 255, 0.85)",
        edge: "rgba(224, 196, 210, 0.22)",
        pulse: "rgba(255, 228, 236, 0.95)",
      };
    }
    return {
      rose: "rgba(168, 78, 110, 0.82)",
      mauve: "rgba(126, 98, 158, 0.78)",
      iris: "rgba(77, 98, 180, 0.72)",
      edge: "rgba(120, 78, 104, 0.18)",
      pulse: "rgba(138, 48, 84, 0.92)",
    };
  }

  function buildField() {
    var mobile = isMobile();
    var count = mobile ? 18 : 46;
    var cols = mobile ? 5 : 8;
    var rows = mobile ? 4 : 6;
    nodes = [];
    var i;
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols; c++) {
        if (nodes.length >= count) break;
        nodes.push({
          bx: ((c + 0.5) / cols) * width + (Math.random() - 0.5) * (width / cols) * 0.5,
          by: ((r + 0.45) / rows) * height + (Math.random() - 0.5) * (height / rows) * 0.4,
          drift: Math.random() * Math.PI * 2,
          speed: 0.18 + Math.random() * 0.4,
          radius: mobile ? 1.35 : 1.6 + Math.random() * 1.15,
          kind: Math.random() < 0.33 ? "iris" : Math.random() < 0.5 ? "mauve" : "rose",
        });
      }
    }
    edges = [];
    var maxDist = mobile ? 150 : 200;
    for (i = 0; i < nodes.length; i++) {
      var links = 0;
      for (var j = i + 1; j < nodes.length && links < 3; j++) {
        var dx = nodes[i].bx - nodes[j].bx;
        var dy = nodes[i].by - nodes[j].by;
        var dist = Math.hypot(dx, dy);
        if (dist < maxDist) {
          edges.push({ a: i, b: j });
          links++;
        }
      }
    }
    pulses = [];
  }

  function resize() {
    if (!canvas || !ctx) return;
    var mobile = isMobile();
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, mobile ? 1.15 : 1.5);
    if (width * dpr > 1800) dpr = 1800 / width;
    canvas.width = Math.max(1, Math.floor(width * dpr));
    canvas.height = Math.max(1, Math.floor(height * dpr));
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    buildField();
    if (prefersReduced() || document.hidden) draw(0, 16);
  }

  function nodePosition(node, time) {
    var mobile = isMobile();
    var amp = prefersReduced() ? 0 : mobile ? 4 : 9;
    var px = (pointer.x - 0.5) * (mobile ? 0 : 16);
    var py = (pointer.y - 0.5) * (mobile ? 0 : 12);
    var depth = 0.35 + node.by / Math.max(height, 1);
    var sy = prefersReduced() ? 0 : scrollCurrent * 0.025 * (node.by / Math.max(height, 1) - 0.5);
    return {
      x: node.bx + Math.cos(time * 0.00032 * node.speed + node.drift) * amp + px * depth,
      y: node.by + Math.sin(time * 0.00026 * node.speed + node.drift) * amp * 0.8 + py * depth + sy,
    };
  }

  function draw(time, dt) {
    if (!ctx) return;
    var colors = palette();
    var mobile = isMobile();
    ctx.clearRect(0, 0, width, height);
    var positions = new Array(nodes.length);
    var i;
    for (i = 0; i < nodes.length; i++) positions[i] = nodePosition(nodes[i], time);

    ctx.lineWidth = 1;
    ctx.strokeStyle = colors.edge;
    ctx.beginPath();
    for (i = 0; i < edges.length; i++) {
      var a = positions[edges[i].a];
      var b = positions[edges[i].b];
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
    }
    ctx.stroke();

    if (!prefersReduced()) {
      var cap = mobile ? 3 : 8;
      if (pulses.length < cap && edges.length && Math.random() < 0.12) {
        pulses.push({
          edge: edges[(Math.random() * edges.length) | 0],
          t: 0,
          speed: (0.00045 + Math.random() * 0.00055) * (mobile ? 0.85 : 1),
        });
      }
      ctx.fillStyle = colors.pulse;
      for (i = pulses.length - 1; i >= 0; i--) {
        var pulse = pulses[i];
        pulse.t += pulse.speed * dt;
        if (pulse.t >= 1) {
          pulses.splice(i, 1);
          continue;
        }
        var from = positions[pulse.edge.a];
        var to = positions[pulse.edge.b];
        var x = from.x + (to.x - from.x) * pulse.t;
        var y = from.y + (to.y - from.y) * pulse.t;
        ctx.beginPath();
        ctx.arc(x, y, mobile ? 1.5 : 2.15, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      var pos = positions[i];
      ctx.fillStyle = colors[node.kind];
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, node.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function frame(time) {
    if (!running) return;
    var dt = lastTime ? Math.min(34, time - lastTime) : 16;
    lastTime = time;
    pointer.x += (pointerTarget.x - pointer.x) * 0.06;
    pointer.y += (pointerTarget.y - pointer.y) * 0.06;
    scrollCurrent += (scrollTarget - scrollCurrent) * 0.08;
    if (stage && !prefersReduced()) {
      var px = (pointer.x - 0.5) * (isMobile() ? 8 : 22);
      var py = (pointer.y - 0.5) * (isMobile() ? 6 : 16);
      stage.style.setProperty("--px", px.toFixed(2) + "px");
      stage.style.setProperty("--py", py.toFixed(2) + "px");
      stage.style.setProperty("--sy", (scrollCurrent * 0.05).toFixed(2) + "px");
    }
    draw(time, dt);
    rafId = window.requestAnimationFrame(frame);
  }

  function start() {
    if (running || prefersReduced() || !ctx) return;
    running = true;
    lastTime = 0;
    rafId = window.requestAnimationFrame(frame);
  }

  function stop() {
    running = false;
    if (rafId) window.cancelAnimationFrame(rafId);
    rafId = 0;
  }

  function onVisibility() {
    if (document.hidden) {
      root.classList.add("signal-paused");
      stop();
    } else {
      root.classList.remove("signal-paused");
      if (!prefersReduced()) start();
    }
  }

  window.addEventListener(
    "resize",
    function () {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(resize, 150);
    },
    { passive: true }
  );

  if (fineQuery.matches && !isMobile()) {
    window.addEventListener(
      "pointermove",
      function (event) {
        if (!width || !height) return;
        pointerTarget.x = event.clientX / width;
        pointerTarget.y = event.clientY / height;
      },
      { passive: true }
    );
  }

  window.addEventListener(
    "scroll",
    function () {
      scrollTarget = window.scrollY || 0;
    },
    { passive: true }
  );

  if (reduceQuery.addEventListener) {
    reduceQuery.addEventListener("change", function () {
      if (prefersReduced()) {
        stop();
        root.classList.remove("signal-motion");
        resize();
      } else if (!document.hidden) {
        setupMotion();
        start();
      }
    });
  }

  var themeObserver = new MutationObserver(function () {
    if (!running) draw(performance.now(), 16);
  });
  themeObserver.observe(root, { attributes: true, attributeFilter: ["data-theme"] });

  resize();
  onVisibility();
  if (!document.hidden && !prefersReduced()) start();

  /******************************************************************************
   * Reveals, decrypt, tilt
   ******************************************************************************/

  var glyphs = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

  function textNodes(el) {
    var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (!node.textContent || !node.textContent.trim()) return NodeFilter.FILTER_REJECT;
        var parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (parent.closest("mjx-container, script, style, code, pre, .signal-cipher")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    });
    var list = [];
    while (walker.nextNode()) list.push(walker.currentNode);
    return list;
  }

  function decryptHeading(heading) {
    if (prefersReduced() || heading.dataset.decrypted === "1") return;
    if (heading.closest(".navbar, #navbar")) return;
    var nodesInHeading = textNodes(heading);
    if (!nodesInHeading.length) return;
    var originals = nodesInHeading.map(function (node) {
      return node.textContent;
    });
    var totalLength = originals.reduce(function (sum, text) {
      return sum + text.length;
    }, 0);
    if (totalLength < 2 || totalLength > 96) return;
    heading.dataset.decrypted = "1";
    heading.classList.add("is-decrypting");
    var frame = 0;
    var total = isMobile() ? 8 : 12;
    var timer = window.setInterval(function () {
      if (document.hidden) return;
      frame += 1;
      var seen = 0;
      nodesInHeading.forEach(function (node, nodeIndex) {
        var original = originals[nodeIndex];
        var chars = Array.from(original);
        node.textContent = chars
          .map(function (ch, index) {
            if (ch.trim() === "" || ch === "-" || ch === "—" || ch === "·") return ch;
            var settleAt = Math.floor((frame / total) * totalLength);
            if (seen + index < settleAt) return ch;
            return glyphs[(index * 5 + frame + nodeIndex) % glyphs.length];
          })
          .join("");
        seen += original.length;
      });
      if (frame >= total) {
        nodesInHeading.forEach(function (node, nodeIndex) {
          node.textContent = originals[nodeIndex];
        });
        heading.classList.remove("is-decrypting");
        window.clearInterval(timer);
      }
    }, isMobile() ? 48 : 40);
  }

  function addCiphers() {
    document.querySelectorAll(".post-header, .header-bar").forEach(function (header) {
      if (header.querySelector(".signal-cipher")) return;
      var title = header.querySelector("h1");
      var raw = (title ? title.textContent : "field").replace(/\s+/g, " ").trim().toLowerCase();
      var slug = raw.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 32) || "field";
      var label = document.createElement("p");
      label.className = "signal-cipher";
      label.setAttribute("aria-hidden", "true");
      label.textContent = "sig // " + slug;
      header.insertBefore(label, header.firstChild);
    });
  }

  function markNav() {
    document.querySelectorAll("#navbarNav .nav-item").forEach(function (item, index) {
      item.style.setProperty("--nav-i", String(index));
    });
  }

  function bindTilt(el, mode) {
    if (el.dataset.tiltBound === "1") return;
    el.dataset.tiltBound = "1";
    el.classList.add("signal-tilt");
    el.addEventListener("pointermove", function (event) {
      if (prefersReduced() || isMobile() || event.pointerType === "touch") return;
      var rect = el.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      var x = (event.clientX - rect.left) / rect.width;
      var y = (event.clientY - rect.top) / rect.height;
      el.style.setProperty("--glow-x", (x * 100).toFixed(1) + "%");
      el.style.setProperty("--glow-y", (y * 100).toFixed(1) + "%");
      el.classList.add("is-tilting");
      if (mode === "tilt") {
        var rx = ((0.5 - y) * 5.5).toFixed(2);
        var ry = ((x - 0.5) * 6.5).toFixed(2);
        el.style.transform = "perspective(900px) rotateX(" + rx + "deg) rotateY(" + ry + "deg) translateY(-3px)";
      }
    });
    el.addEventListener("pointerleave", function () {
      el.classList.remove("is-tilting");
      el.style.transform = "";
    });
  }

  function setupMotion() {
    addCiphers();
    markNav();
    if (prefersReduced()) {
      root.classList.remove("signal-motion");
      return;
    }
    root.classList.add("signal-motion");

    var revealTargets = document.querySelectorAll(
      ".post-header, .header-bar, article > *, .news tr, .archive tr, .publications ol.bibliography > li, .projects .col, .post-list > li, .cv .card, .repo, .social, .course-card, .teaching-intro, .pagination, #toc-sidebar"
    );
    revealTargets.forEach(function (el) {
      el.classList.add("signal-reveal");
    });

    if ("IntersectionObserver" in window) {
      var revealObserver = new IntersectionObserver(
        function (entries) {
          var shown = entries.filter(function (entry) {
            return entry.isIntersecting;
          });
          shown
            .sort(function (a, b) {
              return a.boundingClientRect.top - b.boundingClientRect.top;
            })
            .forEach(function (entry, index) {
              entry.target.style.setProperty("--reveal-delay", index * 60 + "ms");
              entry.target.classList.add("is-inview");
              revealObserver.unobserve(entry.target);
            });
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
      );
      revealTargets.forEach(function (el) {
        revealObserver.observe(el);
      });

      var headings = document.querySelectorAll("h1, h2, h3");
      var headingObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            decryptHeading(entry.target);
            headingObserver.unobserve(entry.target);
          });
        },
        { threshold: 0.4 }
      );
      headings.forEach(function (heading) {
        headingObserver.observe(heading);
      });
    } else {
      revealTargets.forEach(function (el) {
        el.classList.add("is-inview");
      });
      document.querySelectorAll("h1, h2, h3").forEach(decryptHeading);
    }

    document.querySelectorAll(".card, .publications ol.bibliography > li, .post-list > li, .repo, .course-card").forEach(function (el) {
      bindTilt(el, "tilt");
    });
    document.querySelectorAll(".news tr").forEach(function (el) {
      bindTilt(el, "glow");
    });

    window.setTimeout(function () {
      document.querySelectorAll(".signal-reveal:not(.is-inview)").forEach(function (el) {
        el.classList.add("is-inview");
      });
    }, 1800);
  }

  document.addEventListener("visibilitychange", onVisibility);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupMotion);
  } else {
    setupMotion();
  }
})();
