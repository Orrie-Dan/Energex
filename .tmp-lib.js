const fs = require("fs");

function load(file) {
  const raw = fs.readFileSync(file, "utf8");
  const eol = raw.includes("\r\n") ? "\r\n" : "\n";
  const L = raw.split(/\r?\n/);
  const ops = [];
  const api = {
    L,
    idx(cid) {
      const hits = [];
      L.forEach((l, i) => {
        if (l.includes('data-cid="' + cid + '"')) hits.push(i);
      });
      if (hits.length !== 1) throw new Error("cid " + cid + " hits=" + hits.length);
      return hits[0];
    },
    /** index of line where element opened at line i closes */
    end(i) {
      let depth = 0;
      for (let j = i; j < L.length; j++) {
        const line = L[j].replace(/"(?:[^"\\]|\\.)*"/g, '""').replace(/`[^`]*`/g, "``");
        const re = /<(\/?)([A-Za-z][A-Za-z0-9]*)([^<>]*?)(\/?)>/g;
        let m;
        while ((m = re.exec(line))) {
          if (m[4] === "/") continue; // self closing
          if (m[1] === "/") depth--;
          else depth++;
          if (depth === 0) return j;
        }
      }
      throw new Error("no end for line " + (i + 1));
    },
    replace(a, b, lines) {
      ops.push({ a, b, lines: Array.isArray(lines) ? lines : [lines] });
    },
    /** replace the entire element opening at cid */
    replaceEl(cid, lines) {
      const i = api.idx(cid);
      api.replace(i, api.end(i), lines);
    },
    /** replace children of element */
    replaceChildren(cid, lines) {
      const i = api.idx(cid);
      const e = api.end(i);
      api.replace(i + 1, e - 1, lines);
    },
    deleteEl(cid) {
      api.replaceEl(cid, []);
    },
    /** token replace in the opening line of cid */
    tokens(cid, pairs) {
      const i = api.idx(cid);
      let s = L[i];
      for (const [from, to] of pairs) {
        if (!s.includes(from)) throw new Error("token '" + from + "' missing at " + cid);
        s = s.split(from).join(to);
      }
      api.replace(i, i, s);
    },
    /** replace single-text span group inside p */
    pText(cid, text) {
      const i = api.idx(cid);
      const e = api.end(i);
      const first = L[i + 1];
      if (!/<span/.test(first)) throw new Error("expected span after " + cid);
      api.replace(i + 1, e - 1, [first, "  " + text, "</span>"]);
    },
    save() {
      ops.sort((x, y) => y.a - x.a);
      for (let k = 1; k < ops.length; k++) {
        if (ops[k].b >= ops[k - 1].a) throw new Error("overlap ops " + ops[k].a + ".." + ops[k].b + " vs " + ops[k - 1].a);
      }
      for (const op of ops) L.splice(op.a, op.b - op.a + 1, ...op.lines);
      fs.writeFileSync(file, L.join(eol), "utf8");
    },
  };
  return api;
}
module.exports = { load };
