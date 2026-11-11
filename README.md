<a id="top"></a>

<!-- Written like the Personal page at ianne-portfolio.vercel.app: an editor on the left,
     the rendered page on the right, and every panel something you can open. -->

<sub><code>Leyte, PH</code>&nbsp; 🟢 <b>Open for projects</b> &nbsp;·&nbsp; <code>iczb / home</code> Go to anything <kbd>Ctrl</kbd> <kbd>K</kbd> &nbsp;·&nbsp; <a href="#personal"><kbd>Personal</kbd></a> <a href="#formal">Formal</a></sub>

<details>
<summary><kbd>Ctrl</kbd> <kbd>K</kbd> &nbsp;Go to anything</summary>

<br/>

| ➜ | Section | File |
| :-- | :-- | :-- |
| `01` | [Tech stack and about](#-tech-stack) | `InformationSection.tsx` |
| `02` | [Ask the terminal](#-ask-the-terminal) | `~/portfolio  zsh` |
| `03` | [Skills](#-skills) | `npm run skills` |
| `04` | [How I build](#-how-i-build) | `git log --reverse` |
| `05` | [Projects](#-projects) | `src/app/work/page.tsx` |
| `06` | [Formal: experience and education](#formal) | `experience.log` |
| `07` | [Let's talk](#have-something-to-build-lets-talk) | `contact.ts` |

</details>

<a id="personal"></a>

<table>
<tr>
<td width="54%" valign="top">

<sub><code>HeroSection.tsx ×</code> <code>Name.tsx</code> <code>globals.css</code></sub><br/>
<sub>src › components › PersonalPage › <b>HeroSection.tsx</b></sub>

```tsx
export default function HeroSection() {
  return (
    <section className="hero">
      <h1>
        Building clean interfaces
        with solid code.
      </h1>
      <Name
        weight={700}
        tracking="-0.055em"
        accent="#2f66c9"
      />
    </section>
  );
}
```

<sub><code>✓ 0 problems</code> &nbsp;main &nbsp;·&nbsp; Ln 6, Col 25 &nbsp;·&nbsp; TypeScript JSX</sub>

</td>
<td width="46%" valign="top">

<sub>Full-stack web developer</sub>

<h1>Ianne<br/>Carl.</h1>

I'm a developer who enjoys building user-friendly apps and solving tricky problems.

<table>
<tr><td colspan="2"><code>&lt;Name /&gt;</code> props</td><td align="right"><sub>reset</sub></td></tr>
<tr><td><code>weight</code></td><td><code>▰▰▰▰▰▰▰▱▱</code></td><td align="right"><code>700</code></td></tr>
<tr><td><code>tracking</code></td><td><code>▰▰▰▱▱▱▱▱▱</code></td><td align="right"><code>-0.055</code></td></tr>
<tr><td><code>accent</code></td><td>🔵 🟢 🟠 🔴 🟣</td><td align="right"><code>blue</code></td></tr>
</table>

<sub>Based in Leyte, Philippines</sub>

</td>
</tr>
</table>

<details>
<summary><code>‹ ›</code> &nbsp;Drag the handle: render <code>HeroSection</code></summary>

<br/>

<h1>Building clean interfaces with solid code.</h1>

Making the web look and work better.

<sub>Made with &nbsp; <code>Next.js</code> <code>Tailwind CSS</code> <code>shadcn/ui</code> <code>Framer Motion</code> <code>Figma</code></sub>

</details>

<br/>

<sub>● <code>src/components/Body/PersonalPage/Parts/InformationSection.tsx</code></sub>

<table>
<tr>
<td width="50%" valign="top">

### ● Tech stack

<details open>
<summary><b>Visual</b> &nbsp;<sub>·&nbsp; package.json below</sub></summary>

<br/>

<sub>Frontend</sub><br/>
<code>JavaScript&nbsp;1</code> <code>TypeScript&nbsp;9</code> <code>React&nbsp;4</code> <code>Next.js&nbsp;8</code> <code>Tailwind&nbsp;4</code> <code>Framer&nbsp;2</code> <code>Charts&nbsp;2</code> <code>Maps&nbsp;1</code>

<sub>Backend and data</sub><br/>
<code>Node.js&nbsp;4</code> <code>Express&nbsp;4</code> <code>Laravel</code> <code>Django&nbsp;2</code> <code>Postgres&nbsp;3</code> <code>MySQL</code> <code>MongoDB&nbsp;5</code> <code>Prisma&nbsp;2</code> <code>Supabase&nbsp;1</code>

<sub>AI and integrations</sub><br/>
<code>Claude&nbsp;Code&nbsp;1</code> <code>Gemini&nbsp;1</code> <code>Stripe&nbsp;1</code> <code>REST&nbsp;4</code> <code>WebSockets</code> <code>JWT&nbsp;3</code> <code>RBAC</code> <code>CI/CD&nbsp;2</code>

<sub>Learning now &nbsp;<code>in progress</code></sub><br/>
<code>Automation</code> <code>n8n</code> <code>Docker</code> <code>Android</code>

<sub>The number is how many of my projects use it.</sub>

</details>

<details>
<summary><code>package.json</code></summary>

```json
{
  "name": "ianne-carl-bulilan",
  "role": "full-stack web developer",
  "dependencies": {
    "next": "frontend, 8 projects",
    "typescript": "9 projects",
    "react": "4 projects",
    "tailwindcss": "4 projects",
    "express": "4 projects",
    "mongodb": "5 projects",
    "postgres": "3 projects",
    "prisma": "2 projects",
    "laravel": "client work"
  },
  "devDependencies": {
    "vitest": "*",
    "playwright": "*",
    "github-actions": "*"
  },
  "learning": ["n8n", "docker", "android"]
}
```

</details>

</td>
<td width="50%" valign="top">

### ● About me

I am a full-stack web developer who turns Figma designs into working web apps. I've built client platforms at KPVE and 15+ contract builds, mostly with Next.js, TypeScript, Node.js, and Laravel.

<table>
<tr><td><sub>Status</sub></td><td>🟢 <b>Available for hire</b></td></tr>
<tr><td><sub>Core focus</sub></td><td><b>Full-stack web systems</b></td></tr>
<tr><td><sub>Workflow</sub></td><td><b>Claude Code: plan, review, build</b></td></tr>
<tr><td><sub>Architecture</sub></td><td><b>PostgreSQL, MySQL, MongoDB</b></td></tr>
</table>

</td>
</tr>
</table>

<br/>

<sub>● <code>~/portfolio</code> · zsh</sub>

### ● Ask the terminal

<sub>Last login on ttys001. Type a command to see what it prints.</sub>

<details>
<summary><code>➜ whoami</code></summary>

```console
Ianne Carl Bulilan
Full-stack web developer in Leyte, Philippines.
Next.js, TypeScript, Node.js and Laravel. Available for hire.
```

</details>

<details>
<summary><code>➜ stack</code></summary>

```console
Frontend
  JavaScript, TypeScript, React, Next.js, Tailwind, Framer
Backend and data
  Node.js, Express, Laravel, Django, Postgres, MongoDB, Prisma
Learning now
  Automation, n8n, Docker, Android
```

</details>

<details>
<summary><code>➜ projects</code></summary>

```console
01  Scentique     Next.js, TypeScript
02  Kasumi-an     Next.js, TypeScript
03  BriefCV       Next.js 15, TypeScript
04  Theebug       Next.js 16, React 19

Try: open scentique
```

</details>

<details>
<summary><code>➜ contact</code></summary>

```console
GitHub    github.com/Gladiarn
Email     bulilaniannecarl@gmail.com
Telegram  @IanneTG
```

</details>

<details>
<summary><code>➜ sudo</code></summary>

```console
Nice try.
```

</details>

<br/>

<sub>● <code>src/data/portfolio.ts</code> · proficiencies</sub>

### ● Skills

```console
➜ npm run skills -- --coverage

area                                 %
Frontend Architecture               93   ██████████████████▋
Backend Infrastructure              85   █████████████████
AI-Assisted Dev (Claude Code)       80   ████████████████

Average 86% across 3 areas
```

<sub>● <code>src/data/portfolio.ts</code> · buildProcess</sub>

### ● How I build

<sub>Each step is a commit. Open one to see what it adds.</sub>

```console
➜ git log --reverse --oneline
```

<details>
<summary><code>3f1a9c2</code> &nbsp;Plan &amp; Design</summary>

> Mapping the user flow in Figma and writing the build plan with Claude Code before any code is touched.

</details>

<details>
<summary><code>8b04e7d</code> &nbsp;Review</summary>

> Reviewing the plan and the data shape first, so the UI runs on a swappable mock layer that plugs into the real API without UI changes.

</details>

<details>
<summary><code>c52d1fa</code> &nbsp;Build</summary>

> Building frontend and backend with Claude Code (Next.js, Express or Laravel, Prisma), and coding by hand when the token limit runs out.

</details>

<details>
<summary><code>e97b368</code> &nbsp;<code>(HEAD -> main)</code> &nbsp;Test &amp; Ship</summary>

> Vitest and Playwright tests, GitHub Actions on every pull request, then deployment to Vercel or Railway.

</details>

<br/>

<sub>● <code>src/app/work/page.tsx</code></sub>

### ● Projects

<sub>Open a window to read about the build.</sub>

<details open>
<summary><code>‹ ›</code> <code>github.com/Gladiarn/Scentique-Monorepo</code> &nbsp;<b>Scentique</b></summary>

<br/>

<sub>● Claude Code workflow</sub>

E-commerce perfume store with an admin CRM. The storefront has scent filters, a "find your scent" quiz, a cart and Stripe checkout. The admin side has revenue, order and low-stock dashboards. A Turborepo monorepo with Zod schemas shared between the frontend and the Express API, and a repository pattern so mock data swaps for the real API in one file.

<code>Next.js</code> <code>TypeScript</code> <code>Express</code> <code>Prisma</code> <code>PostgreSQL</code> <code>Stripe</code> <code>Zod</code> <code>Turborepo</code> <code>Vitest</code> <code>Playwright</code>

[**Code ↗**](https://github.com/Gladiarn/Scentique-Monorepo)

</details>

<details>
<summary><code>‹ ›</code> <code>kasumi-an.cc.cd</code> &nbsp;<b>Kasumi-an</b></summary>

<br/>

<sub>● Claude Code workflow</sub>

Bilingual (English/Japanese) brand website with an admin dashboard. Hand-built canvas animations, ink-cloud page transitions and an invitation-style waitlist. The Express API is hardened with Helmet, Zod validation and pino logging, and the frontend and API deploy together as Vercel Services, backed by 670+ tests.

<code>Next.js</code> <code>TypeScript</code> <code>Express</code> <code>Zod</code> <code>Helmet</code> <code>pino</code> <code>Turborepo</code> <code>Vitest</code> <code>Supertest</code> <code>Vercel</code>

[**Live site ↗**](https://kasumi-an.cc.cd)

</details>

<details>
<summary><code>‹ ›</code> <code>briefcv.vercel.app</code> &nbsp;<b>BriefCV</b></summary>

<br/>

<sub>● Claude Code workflow</sub>

AI resume builder that uses the Google Gemini API to rewrite and score resumes against ATS filters. Drag-and-drop section ordering, score charts, and pixel-accurate PDF export with Puppeteer. Google OAuth sign-in with rotating JWT access and refresh tokens.

<code>Next.js&nbsp;15</code> <code>TypeScript</code> <code>Gemini&nbsp;API</code> <code>MongoDB</code> <code>Zustand</code> <code>Puppeteer</code> <code>Recharts</code> <code>Framer&nbsp;Motion</code>

[**Live site ↗**](https://briefcv.vercel.app/) &nbsp; [**Code ↗**](https://github.com/Gladiarn/briefcv)

</details>

<details>
<summary><code>‹ ›</code> <code>theebug.cc.cd</code> &nbsp;<b>Theebug</b></summary>

<br/>

<sub>● Claude Code workflow</sub>

Drag-and-drop coding game styled like VS Code, where players fix broken code in 7 languages and score by difficulty. GitHub sign-in, an optional public leaderboard, Dark+ and Light+ themes, and a mascot that gives hints.

<code>Next.js&nbsp;16</code> <code>React&nbsp;19</code> <code>TypeScript</code> <code>Tailwind&nbsp;CSS&nbsp;v4</code> <code>MongoDB</code> <code>Auth.js</code> <code>React&nbsp;DnD</code> <code>React&nbsp;Three&nbsp;Fiber</code>

[**Live site ↗**](https://www.theebug.cc.cd) &nbsp; [**Code ↗**](https://github.com/Gladiarn/Theebug)

</details>

<sub>13 of 13 projects, with screenshots and videos, at <a href="https://ianne-portfolio.vercel.app/work"><b>ianne-portfolio.vercel.app/work</b></a></sub>

<br/>

<a id="formal"></a>

<sub>● <code>experience.log</code> · <a href="#personal">Personal</a> <kbd>Formal</kbd></sub>

### ● Experience

<details open>
<summary><b>Full-Stack Web Developer</b> · KPVE · Remote &nbsp;<code>Jun 2026 - Nov 2026</code></summary>

<br/>

- **DOC On Call:** Australian telehealth platform (Laravel, Next.js, MySQL) with Stripe payments, Zoom video consults, Medicare/PRODA claims, and a 4-portal clinical CRM with real-time chat over WebSockets (Laravel Reverb).
- **SALT Hotel CRM:** management system for a three-hotel group covering front desk, housekeeping, finance and stock (Next.js, Express, Prisma, PostgreSQL, on Vercel + Railway).
- **Restaurant POS:** tablet POS and menu system for Hikka Regent (Next.js) that works offline (Service Workers, IndexedDB) and syncs when back online.
- **Hotel websites:** Hikka Regent site with a direct booking flow (Next.js + Supabase), plus other client landing pages.

</details>

<details>
<summary><b>Full-Stack Developer (Independent Contractor)</b> · Self-employed, client work under NDA &nbsp;<code>Mar 2025 - May 2026</code></summary>

<br/>

- Built 15+ web apps from Figma to Vercel: e-commerce, restaurant ordering, inventory, booking and AI tools.
- **E-commerce and CRMs:** stores with Stripe checkout and admin dashboards for orders and stock (Next.js, Express, Prisma, PostgreSQL).
- **Business systems:** QR restaurant ordering with a kitchen display, multi-warehouse inventory (Express, Prisma, Supabase; Django, Chart.js), and booking apps with live GPS tracking (React, Express, MongoDB, Leaflet).
- **AI tools:** AI resume writer with the Gemini API, MongoDB and PDF export (Puppeteer).

</details>

<details>
<summary><b>Frontend Developer (Intern)</b> · Symphonics Co. Ltd. · Tacloban City &nbsp;<code>Feb 2025 - May 2025</code></summary>

<br/>

- Turned Figma designs into responsive Next.js pages with Tailwind CSS, shadcn/ui and TypeScript.
- Connected REST APIs, used Server Components to speed up pages, and worked in Agile (Scrum) with code reviews on every PR.

</details>

### ● Education

<details>
<summary><b>BS Information Technology</b> · AMA Computer Learning Center &nbsp;<code>2023 - Jul 2025</code> &nbsp;<sub>graduated</sub></summary>

<br/>

- Best in HTML5 & CSS and Best in Web Development
- Best Capstone Presenter: *Cloud-based Van Travel and Tours Tracking and Monitoring System of Grand Tours Tacloban City*

</details>

<details>
<summary><b>BS Information Technology</b> · University of Rizal System Binangonan &nbsp;<code>Aug 2020 - Dec 2022</code> &nbsp;<sub>transferred</sub></summary>

<br/>

- Dean's Lister (first year)

</details>

<br/>

<sub>● <code>contact.ts</code></sub>

## Have something to build? Let's talk.

I build full-stack web apps with Node.js, Next.js and TypeScript. My workflow runs on Claude Code: brainstorm, plan, confirm, then build test-first and verify. Based in Leyte, Philippines.

```text
bulilaniannecarl@gmail.com
```

<table>
<tr>
<td><a href="https://cal.com/ianne-carl-bulilan-gladiarn"><b>Book a call</b></a><br/><sub>cal.com</sub></td>
<td><a href="https://github.com/Gladiarn"><b>GitHub</b></a><br/><sub>@Gladiarn</sub></td>
<td><a href="https://www.linkedin.com/in/ianne-carl-bulilan-321421349/"><b>LinkedIn</b></a><br/><sub>Ianne Carl</sub></td>
<td><a href="https://t.me/IanneTG"><b>Telegram</b></a><br/><sub>@IanneTG</sub></td>
<td><a href="https://ianne-portfolio.vercel.app/"><b>Portfolio</b></a><br/><sub>ianne-portfolio.vercel.app</sub></td>
</tr>
</table>

<br/>

<table>
<tr>
<td valign="middle"><sub><code>418</code><br/><br/><code>419</code></sub></td>
<td><a href="#top" title="Matches line 1 · click to jump"><h1><code>&lt;/Portfolio&gt;</code></h1></a></td>
</tr>
</table>

<sub><code>⎇ main</code> &nbsp;<code>✓ 0 problems</code> &nbsp;<code>README.md</code> &nbsp;·&nbsp; Ln 419 &nbsp;·&nbsp; UTF-8 &nbsp;·&nbsp; <a href="#top">back to line 1 ↑</a></sub>
