import fs from "node:fs";
import path from "node:path";

const target = path.join(
  process.cwd(),
  "node_modules/next/dist/compiled/mini-css-extract-plugin/hmr/hotModuleReplacement.js",
);

if (!fs.existsSync(target)) {
  process.exit(0);
}

const original = fs.readFileSync(target, "utf8");

let patched = original;
patched = patched.replaceAll(
  't.isLoaded=true;e.parentNode.removeChild(e)',
  "t.isLoaded=true;e.parentNode&&e.parentNode.removeChild(e)",
);
patched = patched.replaceAll(
  "{e.parentNode.insertBefore(t,e.nextSibling)}",
  "{e.parentNode&&e.parentNode.insertBefore(t,e.nextSibling)}",
);
patched = patched.replaceAll(
  "{e.parentNode.appendChild(t)}",
  "{e.parentNode&&e.parentNode.appendChild(t)}",
);

if (patched !== original) {
  fs.writeFileSync(target, patched, "utf8");
  console.log("[postinstall] Patched Next.js CSS HMR runtime guard.");
}
