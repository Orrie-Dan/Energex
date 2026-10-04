const { load } = require("./.tmp-lib");
const f = load("src/app/page.tsx");
const a = f.idx("n1503");
const root = f.end(f.idx("n1418"));
console.log("delete", a + 1, "to", root, "(keeps closing of n1418 at", root + 1, ")");
f.replace(a, root - 1, []);
f.save();
