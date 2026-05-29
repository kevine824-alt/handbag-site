import fs from "fs";
import path from "path";

const BAGS_DIR = path.join(process.cwd(), "src", "bags");

export function getAllBags() {
  // Each subfolder under src/bags is one bag
  const slugs = fs
    .readdirSync(BAGS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  return slugs.map((slug) => {
    const filePath = path.join(BAGS_DIR, slug, "bag.json");
    const raw = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(raw);

    return {
      ...data,
      slug, // enforce slug from folder name
    };
  });
}

export function getBagBySlug(slug) {
  const filePath = path.join(BAGS_DIR, slug, "bag.json");
  const raw = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(raw);

  return { ...data, slug };
}