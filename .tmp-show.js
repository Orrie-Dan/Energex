const fs = require("fs");
const file = process.argv[2];
const cids = process.argv.slice(3);
const L = fs.readFileSync(file, "utf8").split(/\r?\n/);
for (const c of cids) {
  const i = L.findIndex((l) => l.includes('data-cid="' + c + '"'));
  console.log(i + 1, i < 0 ? "NOT FOUND" : L[i].trim().replace(/\s+/g, " ").slice(0, 520));
}
