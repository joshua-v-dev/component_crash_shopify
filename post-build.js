import { writeFileSync, readFileSync } from "fs";

/**
 * Copies the `.module.js` output from Microbundle into `.mjs`
 * for use in Node.
 */
function copyModuleOutput() {
  writeFileSync(
    `${process.cwd()}/dist/index.mjs`,
    readFileSync(`${process.cwd()}/dist/index.module.js`)
  );

  writeFileSync(
    `${process.cwd()}/dist/index.mjs.map`,
    readFileSync(`${process.cwd()}/dist/index.module.js.map`)
  );
}

copyModuleOutput();
