import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const requiredFiles = [
  "package.json",
  "src/main.jsx",
  "src/App.jsx",
  "src/styles.css",
  "src/components/HeroVideo.jsx",
  "src/components/Navbar.jsx",
  "src/components/WhyEbeePage.jsx",
  "src/data/siteData.js",
  "src/hooks/useMegaMenu.js",
];

for (const file of requiredFiles) {
  assert(existsSync(join(root, file)), `Missing required React project file: ${file}`);
}

const app = readFileSync(join(root, "src/App.jsx"), "utf8");
const hero = readFileSync(join(root, "src/components/HeroVideo.jsx"), "utf8");
const productGrid = readFileSync(join(root, "src/components/ProductGrid.jsx"), "utf8");
const infrastructureJourney = readFileSync(join(root, "src/components/InfrastructureJourney.jsx"), "utf8");
const whyEbeePage = readFileSync(join(root, "src/components/WhyEbeePage.jsx"), "utf8");
const siteData = readFileSync(join(root, "src/data/siteData.js"), "utf8");
const styles = readFileSync(join(root, "src/styles.css"), "utf8");
const packageJson = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));

assert(app.includes("<HeroVideo"), "App should render the HeroVideo component.");
assert(hero.includes("/assets/vid_mp_.mp4"), "HeroVideo should use the provided assets/vid_mp_.mp4 file.");
assert(hero.includes("autoPlay"), "Hero video should autoplay for a cinematic homepage hero.");
assert(hero.includes("muted"), "Hero video should be muted so autoplay works reliably.");
assert(hero.includes("playsInline"), "Hero video should play inline on mobile devices.");
assert(packageJson.scripts?.build === "vite build", "package.json should expose a Vite build script.");
assert(siteData.includes("Movable Charger"), "Product taxonomy should use Movable Charger naming.");
assert(!siteData.includes("DC Juicer"), "Product taxonomy should not expose DC Juicer naming.");
assert(!siteData.includes("WhatsApp Charging\", copy"), "WhatsApp Charging should not be listed as a product.");
assert(siteData.includes("Power of EbeeCharge"), "Why Ebee menu should include Power of EbeeCharge.");
assert(siteData.includes('href: "/why-ebee"'), "Power of EbeeCharge should link to the dedicated Why Ebee page.");
assert(siteData.includes("Savings Calculator"), "Why Ebee menu should include Savings Calculator.");
assert(siteData.includes("FAQ's"), "Why Ebee menu should include FAQ's.");
assert(siteData.includes('href: "/why-ebee#why-faq"'), "Why Ebee FAQ menu item should link to the FAQ section on the Why Ebee page.");
assert(!siteData.includes("EV Mandate Opportunity"), "Why Ebee menu should not include the old EV Mandate Opportunity item.");
assert(!siteData.includes("Smart DB Advantage"), "Why Ebee menu should not include the old Smart DB Advantage item.");
assert(!siteData.includes("No-App Charging"), "Why Ebee menu should not include the old No-App Charging item.");
assert(productGrid.includes("../../assets/SMART DB.png"), "Smart DB product card should use the provided SMART DB.png asset.");
assert(productGrid.includes("../../assets/mvch.png"), "Movable Charger product card should use the provided mvch.png asset.");
assert(app.includes("function ProblemIcon"), "Problem strip should render custom line icons.");
assert(app.includes("problem-icon"), "Problem strip icons should use the problem-icon SVG class.");
assert(app.includes("../assets/WA.png"), "WhatsApp feature section should use the provided WA.png asset.");
assert(app.includes("../assets/DASHBOARD.png"), "Dashboard section should use the provided DASHBOARD.png asset.");
assert(app.includes("../assets/MCHCOLOR.png"), "Reliability section should use the provided MCHCOLOR.png asset.");
assert(app.includes("../assets/car blank.png"), "Final CTA should use the provided no-text car blank.png image asset.");
assert(app.includes("<InfrastructureJourney"), "App should render the remade infrastructure journey before testimonials.");
assert(infrastructureJourney.includes("journey-simulator"), "Infrastructure journey should render the working five-step simulator.");
assert(infrastructureJourney.includes("simulator-current"), "Infrastructure journey should include the animated current path.");
assert(infrastructureJourney.includes("ScenePhone"), "Infrastructure journey should include phone simulator states.");
assert(infrastructureJourney.includes("Park & Plug"), "Infrastructure journey should include the pulled user journey steps.");
assert(app.includes("<WhyEbeePage"), "App should render a dedicated Why Ebee page route.");
assert(whyEbeePage.includes("Smart charging for every bay"), "Why Ebee page should have a premium original hero.");
assert(whyEbeePage.includes("One Smart DB controls up to 32 charging points"), "Why Ebee page should use Ebee document facts.");
assert(whyEbeePage.includes("WhatsApp charging"), "Why Ebee page should explain WhatsApp-based charging.");
assert(whyEbeePage.includes("20%"), "Why Ebee page should reference the EV-ready mandate context.");
assert(whyEbeePage.includes("../../assets/car blank.png"), "Why Ebee CTA should use the no-text car blank.png asset.");
assert(whyEbeePage.includes("Building EV charging that"), "Why Ebee CTA should render the headline as live text.");
assert(!styles.includes("zoom: 0.8"), "Desktop density must not use browser zoom because it can create overflow.");
assert(!styles.includes("width: 125%"), "Desktop density must not widen the body because it creates a horizontal scrollbar.");
assert(styles.includes("height: 72px"), "Desktop navbar should be physically compact instead of zoomed.");
assert(styles.includes("scroll-margin-top: 120px"), "Why Ebee FAQ anchor should account for the sticky navbar.");

function listJsxFiles(directory) {
  return readdirSync(directory).flatMap((entry) => {
    const path = join(directory, entry);
    if (statSync(path).isDirectory()) {
      return listJsxFiles(path);
    }
    return path.endsWith(".jsx") ? [path] : [];
  });
}

for (const file of listJsxFiles(join(root, "src"))) {
  const source = readFileSync(file, "utf8");
  assert(
    source.includes('from "react"') || source.includes("from 'react'"),
    `${file} must import React so Vite dev JSX transforms do not throw React is not defined.`
  );
}

console.log("React homepage structure test passed.");
