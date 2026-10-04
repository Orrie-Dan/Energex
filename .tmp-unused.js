const fs = require("fs");
const file = process.argv[2];
const apply = process.argv[3] === "--apply";
let s = fs.readFileSync(file, "utf8");
const eol = s.includes("\r\n") ? "\r\n" : "\n";
const lines = s.split(/\r?\n/);
const out = [];
for (const line of lines) {
  const m = line.match(/^import (\w+)(?:, \{[^}]*\})? from /);
  if (m) {
    const name = m[1];
    const count = (s.match(new RegExp("\\b" + name + "\\b", "g")) || []).length;
    if (count === 1) {
      console.log("unused:", line);
      if (apply) continue;
    }
  }
  out.push(line);
}
if (apply) fs.writeFileSync(file, out.join(eol), "utf8");
