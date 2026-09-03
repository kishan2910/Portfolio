---
name: run-portfolio
description: Build, launch, and drive Kishan's portfolio site (React + Vite) headlessly — start the dev server, navigate/click/fill through the page with a scripted Playwright driver, take screenshots, and check for console errors. Use when asked to run, start, test, or screenshot the portfolio app, or to verify a UI change actually renders.
---

All paths below are relative to the project root (`d:\Projects\Portfolio`),
not to this skill directory. The driver lives at
`.claude/skills/run-portfolio/driver.mjs`.

This is a single-page Vite/React app — no login, no backend. It's driven
headlessly with a small Playwright-based REPL script (`driver.mjs`) that
reads one command per line from stdin, styled after `chromium-cli`
(which is not installed on this machine).

## Prerequisites

Playwright is already a devDependency (`npm install` pulls it in). The
Chromium browser binary must be installed once per machine:

```bash
npx playwright install chromium
```

(Takes a few minutes and ~300MB the first time; no-ops on repeat runs.)

## Build

```bash
npm install
npm run build      # tsc -b && vite build — output in dist/
```

## Run (agent path) — the driver

1. Start the dev server in the background and wait for it to actually serve:

   ```bash
   npm run dev &
   timeout 30 bash -c 'until curl -sf http://localhost:5173 >/dev/null; do sleep 1; done'
   ```

2. Pipe commands into the driver. Screenshots land in
   `.claude/skills/run-portfolio/screenshots/`.

   ```bash
   node .claude/skills/run-portfolio/driver.mjs <<'EOF'
   nav http://localhost:5173
   wait-for text=Hi, I'm Kishan
   theme
   screenshot hero
   click button[aria-label^="Switch to"]
   screenshot hero-theme-toggled
   scroll work
   screenshot work-section
   click button:has-text("Send message")
   wait-for text=Enter your full name
   screenshot form-validation
   console
   quit
   EOF
   ```

   This exact script was run in-container this session; all five
   screenshots came back correct and `console` reported `[]` (no
   console or page errors).

3. Stop the server when done. This machine is Windows without `lsof`
   (`lsof -ti:5173 | xargs kill` silently no-ops here — `lsof: command
   not found` gets swallowed by a `2>/dev/null` and `xargs -r` then has
   nothing to kill, so it looks like it worked but doesn't). Use the
   PowerShell tool instead:

   ```powershell
   Get-NetTCPConnection -LocalPort 5173 -ErrorAction SilentlyContinue |
     Select-Object -ExpandProperty OwningProcess -Unique |
     ForEach-Object { Stop-Process -Id $_ -Force -ErrorAction SilentlyContinue }
   ```

   Verify with `curl -s -o /dev/null -w "%{http_code}\n" --max-time 2
   http://localhost:5173` — `000` means it's actually down.

### Driver commands

| Command | Effect |
|---|---|
| `nav <url>` | Navigate |
| `wait-for text=<substring>` | Wait for text to appear |
| `wait-for <css-selector>` | Wait for a selector to appear |
| `screenshot [name]` | Save PNG to `screenshots/<name>.png` |
| `click <css-selector>` | Click first match (Playwright selector syntax, e.g. `button:has-text("...")`) |
| `fill <css-selector> <text>` | Fill an input/textarea |
| `press <key>` | Press a key (e.g. `Enter`) |
| `scroll <elementId>` | Instant-jump to `#<id>` and wait 500ms for the `whileInView` reveal animations to finish (see Gotchas) |
| `eval <js-expression>` | `page.evaluate(expr)`, prints JSON |
| `theme` | Print current `data-theme` value (`dark`/`light`) |
| `console` | Print collected console/page errors so far |
| `quit` | Close browser, exit |

## Run (human path)

```bash
npm run dev
```

Opens on `http://localhost:5173`. No browser window is available to an
agent in this environment — use the driver instead.

## Test

No test suite exists yet (`npm run lint` runs oxlint; `npm run build`
is the closest thing to a correctness check via `tsc -b`).

## Gotchas

- **`scroll-behavior: smooth` breaks naive scrolling.** `index.css` sets
  smooth scrolling on `<html>`. A plain `element.scrollIntoView()` from
  `page.evaluate` returns before the animated scroll finishes, so a
  screenshot taken immediately after captures the pre-scroll frame. The
  driver's `scroll` command works around this with
  `scrollIntoView({ behavior: 'instant' })` (which overrides the CSS
  property) — don't call `scrollIntoView()` yourself without that option.
- **Scroll-reveal animations need a beat after jumping.** Every section
  uses Framer Motion's `whileInView` (IntersectionObserver-driven),
  starting at `opacity: 0`. Even an instant scroll jump leaves content
  invisible for a frame or two until the observer fires and the
  animation completes — the driver's `scroll` command sleeps 500ms
  after jumping for exactly this reason. If you scroll manually (e.g.
  via `eval`), add a wait before screenshotting.
- **Headless Chromium's default color scheme is light**, not the site's
  dark default — `nav` alone lands you in the light theme (the site
  correctly follows `prefers-color-scheme`). To start in dark theme,
  launch the browser context with `colorScheme: 'dark'` (the driver
  doesn't expose this as a command; edit `driver.mjs`'s `newPage(...)`
  call, or just use the `theme`/`click theme-toggle-button` commands to
  check/flip it after `nav`).
- **`chromium-cli` is not installed** on this machine — that's why this
  driver exists instead of the inline heredoc the generic `/run` skill
  would otherwise use.
- The theme toggle button's `aria-label` changes with state
  (`"Switch to light glass theme"` / `"Switch to dark glass theme"`) —
  select it with the prefix match `button[aria-label^="Switch to"]`
  rather than hardcoding either variant.

## Troubleshooting

- **`Cannot find package 'playwright'` when running the driver directly
  with `node`:** only happens if `driver.mjs` is copied outside the
  project tree — Node resolves `node_modules` by walking up from the
  script's own location, and playwright is a devDependency at the
  project root. Run it from within `d:\Projects\Portfolio` (or a
  subdirectory of it), not from a temp/scratch location.
- **`page.click` times out with a strict-mode violation:** the selector
  matched more than one element (e.g. `header button.glass` matches
  both the theme toggle and the mobile hamburger button). Narrow the
  selector — `aria-label`-based selectors are the most reliable ones in
  this codebase since every icon-only button has one.
- **Killing the dev server "succeeds" but `curl` still gets a 200:**
  this machine has no `lsof`, and `lsof -ti:5173 | xargs -r kill`
  fails silently (see Run step 3) rather than erroring — always verify
  with a `curl` probe after stopping, don't trust exit code 0 alone.
