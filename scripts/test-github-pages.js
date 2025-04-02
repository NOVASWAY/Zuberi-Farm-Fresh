const express = require("express")
const path = require("path")
const fs = require("fs")
const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

console.log("🌱 Zuberi Fresh Farm - GitHub Pages Deployment Tester 🌱\n")

rl.question("What is your repository name? (default: zuberi-fresh-farm) ", (repoName) => {
  const repo = repoName || "zuberi-fresh-farm"
  const basePath = `/${repo}`

  console.log(`\nTesting deployment with base path: ${basePath}\n`)

  // Check if the out directory exists
  if (!fs.existsSync(path.join(process.cwd(), "out"))) {
    console.log('❌ The "out" directory does not exist. Please run "npm run build" first.')
    rl.close()
    return
  }

  const app = express()

  // Serve static files from the out directory
  app.use(basePath, express.static(path.join(process.cwd(), "out")))

  // Redirect root to the base path
  app.get("/", (req, res) => {
    res.redirect(basePath)
  })

  // Handle 404s by redirecting to the base path
  app.use((req, res) => {
    res.redirect(basePath)
  })

  const port = 3000
  app.listen(port, () => {
    console.log(`✅ Test server running at http://localhost:${port}${basePath}`)
    console.log("Press Ctrl+C to stop the server")
  })

  rl.close()
})

