const fs = require("fs")
const { execSync } = require("child_process")
const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

console.log("🌱 Zuberi Fresh Farm - GitHub Pages Setup Helper 🌱\n")

rl.question("What is your GitHub username? ", (username) => {
  rl.question("What is your repository name? (default: zuberi-fresh-farm) ", (repoName) => {
    const repo = repoName || "zuberi-fresh-farm"
    const basePath = `/${repo}`

    console.log(`\nSetting up for deployment to: https://${username}.github.io${basePath}\n`)

    // Create .env.local file with base path
    fs.writeFileSync(".env.local", `NEXT_PUBLIC_BASE_PATH=${basePath}\n`)
    console.log("✅ Created .env.local with base path")

    // Update package.json homepage
    const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"))
    packageJson.homepage = `https://${username}.github.io${basePath}`
    fs.writeFileSync("package.json", JSON.stringify(packageJson, null, 2))
    console.log("✅ Updated package.json homepage")

    console.log("\nSetup complete! You can now deploy to GitHub Pages with:")
    console.log("1. Push your code to GitHub")
    console.log("2. Enable GitHub Pages in your repository settings")
    console.log("3. Set the GitHub Pages source to 'GitHub Actions'")

    rl.close()
  })
})

