// Captures the README images from the live portfolio, so the profile always
// shows the site's real components, fonts and colours. Run: npm run capture
// Each image is written twice: asset/<name>-dark.png and asset/<name>-light.png.

import { mkdir } from "node:fs/promises";
import { chromium } from "playwright";

const SITE = process.env.SITE_URL ?? "https://ianne-portfolio.vercel.app";
const OUT = new URL("../asset/", import.meta.url).pathname;
const SCALE = 2;

// Turns the element marked data-shot into a standalone panel: its own
// surface, a hairline border and rounded corners, on a transparent page.
const PANEL_CSS = `
  html, body, body > *:not([data-statusbar]), main, footer { background: transparent !important; }
  [data-shot="panel"] {
    background: var(--surface) !important;
    border: 1px solid var(--line) !important;
    border-radius: 14px !important;
    overflow: hidden !important;
  }
  footer .rotate-45 { display: none !important; }
  .inspect-layer, .entry-loader { display: none !important; }
  *, *::before, *::after { animation-play-state: paused !important; caret-color: transparent !important; }
`;

/** Pages the README pulls from, opened once per theme. */
async function openPage(browser, theme, path) {
  const page = await browser.newPage({
    viewport: { width: 1280, height: 4000 },
    deviceScaleFactor: SCALE,
    colorScheme: theme,
  });
  await page.addInitScript((t) => {
    try {
      localStorage.setItem("theme", t);
    } catch {}
  }, theme);
  await page.goto(`${SITE}${path}`, { waitUntil: "networkidle", timeout: 90_000 });
  await page.evaluate(() => document.fonts.ready);
  // Let the entry loader lift and the hero's code sweep finish.
  await page.waitForTimeout(5000);
  await page.addStyleTag({ content: PANEL_CSS });
  // The status bar is fixed; park it so it never overlaps a capture.
  await page.evaluate(() => {
    const bar = document.querySelector("div.fixed.inset-x-0.bottom-0");
    if (bar) bar.dataset.statusbar = "";
  });
  await page.addStyleTag({ content: "[data-statusbar]{display:none!important}" });
  return page;
}

async function shoot(page, handle, name, theme, mode = "panel") {
  await handle.evaluate((el, m) => {
    el.dataset.shot = m;
  }, mode);
  await handle.screenshot({ path: `${OUT}${name}-${theme}.png`, omitBackground: true });
  await handle.evaluate((el) => {
    delete el.dataset.shot;
  });
  console.log(`  ${name}-${theme}.png`);
}

/** Finds the nearest ancestor of a heading with the given text that matches selector. */
function byHeading(page, text, selector, tag = "h1,h2,h3") {
  return page.evaluateHandle(
    ({ text, selector, tag }) => {
      const h = [...document.querySelectorAll(tag)].find((e) =>
        e.textContent.trim().startsWith(text),
      );
      return h?.closest(selector) ?? null;
    },
    { text, selector, tag },
  );
}

/**
 * Section labels for the README's text sections, built from the site's own
 * SectionHeading (the "Tech stack" one) so the font, dot and spacing match.
 */
async function headings(page, theme, list) {
  for (const [name, file, title] of list) {
    const handle = await page.evaluateHandle(
      ({ file, title }) => {
        const h2 = [...document.querySelectorAll("h2")].find(
          (e) => e.textContent.trim() === "Tech stack",
        );
        const clone = h2.parentElement.cloneNode(true);
        clone.querySelector("span").textContent = file;
        const t = clone.querySelector("h2");
        t.textContent = title;
        t.removeAttribute("id");
        for (const p of clone.querySelectorAll("p")) p.remove();
        const box = document.createElement("div");
        box.style.cssText = `position:absolute;left:40px;top:${document.documentElement.scrollHeight + 200}px;width:880px;padding:4px 2px 6px;z-index:99`;
        box.appendChild(clone);
        document.body.appendChild(box);
        return box;
      },
      { file, title },
    );
    await shoot(page, handle, name, theme, "bare");
    await handle.evaluate((el) => el.remove());
  }
}

/** The navbar's buttons, plus clones of "Send a DM" for the other links. */
async function buttons(page, theme) {
  const dm = await page.evaluateHandle(() =>
    [...document.querySelectorAll("a")].find((a) => a.textContent.trim() === "Send a DM"),
  );
  const call = await page.evaluateHandle(() =>
    [...document.querySelectorAll("a")].find((a) => a.textContent.trim() === "Schedule a call"),
  );
  await shoot(page, dm, "btn-dm", theme, "bare");
  await shoot(page, call, "btn-call", theme, "bare");
  for (const [name, label] of [
    ["btn-email", "Email"],
    ["btn-linkedin", "LinkedIn"],
    ["btn-portfolio", "Portfolio"],
  ]) {
    const handle = await dm.evaluateHandle((a, label) => {
      const c = a.cloneNode(true);
      // Keep the accent dot, swap the label text.
      const text = [...c.childNodes].findLast((n) => n.nodeType === 3 && n.textContent.trim());
      if (text) text.textContent = label;
      else c.append(label);
      c.style.cssText = `position:absolute;left:40px;top:${document.documentElement.scrollHeight + 200}px;z-index:99`;
      document.body.appendChild(c);
      return c;
    }, label);
    await shoot(page, handle, name, theme, "bare");
    await handle.evaluate((el) => el.remove());
  }
}

async function run() {
  await mkdir(OUT, { recursive: true });
  const browser = await chromium.launch();

  for (const theme of ["dark", "light"]) {
    console.log(`${theme}:`);
    const home = await openPage(browser, theme, "/");

    const hero = await home.$('section[aria-label="Introduction"]');
    await hero.evaluate((el) => {
      const shade = el.querySelector('[style*="clip-path"]');
      if (shade) shade.style.display = "none";
      const handle = el.querySelector('[aria-label^="Drag or use arrow keys"]');
      if (handle) handle.parentElement.style.display = "none";
    });
    await shoot(home, hero, "hero", theme);
    await buttons(home, theme);

    // Tech stack and About, side by side as on the site. The terminal and the
    // "click a tool" hint need a live page, so they stay out of the picture.
    const info = await home.$('section[aria-label="Tech stack and about"]');
    await info.evaluate((el) => {
      for (const p of el.querySelectorAll("p")) {
        if (p.textContent.startsWith("Click a tool")) p.style.display = "none";
      }
      const sw = [...el.querySelectorAll("button")].find((b) => b.textContent.trim() === "package.json");
      if (sw) sw.parentElement.style.display = "none";
      const term = [...el.querySelectorAll("h2")].find((h) => h.textContent.trim() === "Ask the terminal");
      let n = term;
      while (n && !n.parentElement.className.includes("border-t")) n = n.parentElement;
      if (n) n.style.display = "none";
    });
    await shoot(home, info, "about", theme);

    const activity = await home.$('section[aria-labelledby="activity-heading"]');
    await activity.evaluate((el) => {
      for (const n of el.querySelectorAll("*")) {
        if (n.scrollWidth > n.clientWidth + 4) n.scrollLeft = n.scrollWidth;
      }
      for (const p of el.querySelectorAll("p")) {
        if (p.textContent.startsWith("Each square")) p.textContent = "Each square is one day of commits.";
      }
    });
    await shoot(home, activity, "activity", theme);

    const contact = await byHeading(home, "Have something", "div.canvas-container", "h2");
    await contact.evaluate((el) => {
      el.style.padding = "8px 44px 0";
    });
    await shoot(home, contact, "contact", theme);

    await headings(home, theme, [
      ["h-projects", "src/app/work/page.tsx", "Projects"],
      ["h-experience", "src/data/portfolio.ts · experience", "Experience"],
      ["h-education", "src/data/portfolio.ts · education", "Education"],
    ]);

    // Status bar, shown last as the README's bottom edge.
    await home.evaluate(() => {
      const top = document.documentElement.scrollHeight + 200;
      const css = document.createElement("style");
      css.textContent = `[data-statusbar]{display:flex!important;position:absolute!important;width:960px!important;top:${top}px!important;left:0!important;bottom:auto!important}`;
      document.head.appendChild(css);
      // Name the file this "editor" has open: the README itself.
      const bar = document.querySelector("[data-statusbar]");
      const file = bar.querySelector(".text-syn-fn");
      if (file) file.textContent = "README.md";
      const ln = [...bar.querySelectorAll("span")].find((s) => s.textContent.startsWith("Ln "));
      if (ln) ln.textContent = "Ln 1";
    });
    await shoot(home, await home.$("[data-statusbar]"), "statusbar", theme, "bare");
    await home.close();

    const work = await openPage(browser, theme, "/work");
    for (const name of ["Scentique", "Kasumi-an", "BriefCV", "Theebug"]) {
      const card = await byHeading(work, name, "a", "h3");
      await card.evaluate((el) => {
        el.style.padding = "14px";
      });
      await shoot(work, card, `p-${name.toLowerCase()}`, theme);
    }
    await work.close();
  }

  await browser.close();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
