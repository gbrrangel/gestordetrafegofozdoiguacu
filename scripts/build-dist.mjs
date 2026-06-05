import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { basename, dirname, join } from "node:path";
import "./generate-site.mjs";

const publishItems = [
  "assets",
  "blog",
  "consultoria",
  "contato",
  "index.html",
  "nichos",
  "politica-de-privacidade",
  "robots.txt",
  "servicos",
  "sitemap.xml",
  "sobre",
];

rmSync("dist", { recursive: true, force: true });
mkdirSync("dist", { recursive: true });

for (const item of publishItems) {
  if (!existsSync(item)) continue;
  const target = join("dist", item);
  mkdirSync(dirname(target), { recursive: true });
  cpSync(item, target, {
    recursive: true,
    filter: (source) => basename(source) !== ".DS_Store",
  });
}

console.log(`Built dist with ${publishItems.length} publish targets.`);
