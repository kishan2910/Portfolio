#!/usr/bin/env node
// Minimal chromium-cli-style REPL for driving the portfolio site headlessly.
// Reads one command per line from stdin. Commands:
//
//   nav <url>                    navigate
//   wait-for text=<substring>    wait for text to appear on the page
//   wait-for <css-selector>      wait for a selector to appear
//   screenshot [name]            save PNG to ./screenshots/<name|auto>.png
//   click <css-selector>         click the first match
//   fill <css-selector> <text>   fill an input/textarea (rest of line = text)
//   press <key>                  press a key (e.g. Enter, Escape)
//   scroll <elementId>           scrollIntoView an element by id
//   eval <js-expression>         run page.evaluate(expr), print JSON result
//   theme                        print current data-theme value
//   console                      print collected console/page errors so far
//   quit                         close the browser and exit
//
// Usage:
//   node .claude/skills/run-portfolio/driver.mjs <<'EOF'
//   nav http://localhost:5173
//   wait-for text=Hi, I'm Kishan
//   screenshot hero
//   quit
//   EOF

import { chromium } from 'playwright'
import readline from 'node:readline'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const shotDir = path.join(__dirname, 'screenshots')

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })

const errors = []
page.on('console', (msg) => {
  if (msg.type() === 'error') errors.push(`console: ${msg.text()}`)
})
page.on('pageerror', (err) => errors.push(`pageerror: ${err.message}`))

let shotCount = 0

const rl = readline.createInterface({ input: process.stdin, terminal: false })

for await (const line of rl) {
  const raw = line.trim()
  if (!raw || raw.startsWith('#')) continue
  const [cmd, ...rest] = raw.split(' ')
  const arg = rest.join(' ')

  try {
    if (cmd === 'nav') {
      await page.goto(arg, { waitUntil: 'networkidle' })
      console.log(`ok: navigated to ${arg}`)
    } else if (cmd === 'wait-for') {
      if (arg.startsWith('text=')) {
        await page.getByText(arg.slice(5), { exact: false }).first().waitFor({ timeout: 15000 })
      } else {
        await page.waitForSelector(arg, { timeout: 15000 })
      }
      console.log(`ok: found ${arg}`)
    } else if (cmd === 'screenshot') {
      const name = arg || `shot-${++shotCount}`
      const file = path.join(shotDir, `${name}.png`)
      await page.screenshot({ path: file })
      console.log(`ok: saved ${file}`)
    } else if (cmd === 'click') {
      await page.click(arg, { timeout: 15000 })
      console.log(`ok: clicked ${arg}`)
    } else if (cmd === 'fill') {
      const [selector, ...textParts] = rest
      await page.fill(selector, textParts.join(' '), { timeout: 15000 })
      console.log(`ok: filled ${selector}`)
    } else if (cmd === 'press') {
      await page.keyboard.press(arg)
      console.log(`ok: pressed ${arg}`)
    } else if (cmd === 'scroll') {
      // instant, not smooth — the site sets `scroll-behavior: smooth` on <html>,
      // which makes a plain scrollIntoView() animate asynchronously and return
      // before the scroll finishes, so an immediate screenshot catches the
      // pre-scroll frame. { behavior: 'instant' } overrides the CSS and jumps.
      await page.evaluate(
        (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'instant', block: 'start' }),
        arg,
      )
      // Sections reveal via Framer Motion's `whileInView` (IntersectionObserver-driven),
      // which starts at opacity:0 and only animates in a frame or two after the
      // element enters the viewport. Without this wait, an immediate screenshot
      // catches content still invisible mid-reveal.
      await page.waitForTimeout(500)
      console.log(`ok: scrolled to #${arg}`)
    } else if (cmd === 'eval') {
      const result = await page.evaluate(arg)
      console.log(`ok: ${JSON.stringify(result)}`)
    } else if (cmd === 'theme') {
      const theme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'))
      console.log(`ok: theme=${theme}`)
    } else if (cmd === 'console') {
      console.log(`ok: ${JSON.stringify(errors)}`)
    } else if (cmd === 'quit') {
      break
    } else {
      console.log(`error: unknown command "${cmd}"`)
    }
  } catch (err) {
    console.log(`error: ${err.message}`)
  }
}

await browser.close()
process.exit(0)
