#!/usr/bin/env node

import { execSync } from "child_process";
import { resolve } from "path";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, "..");
const locale = process.argv[2] || "ko";
const url = `http://localhost:3040/${locale}`;

console.log(`\n🚀 LifeHub 데브 서버 시작...`);
console.log(`📍 URL: ${url}\n`);

// 먼저 dev server 백그라운드로 시작
const devProcess = execSync("npx next dev -p 3040", {
  cwd: projectRoot,
  stdio: "inherit",
});

devProcess.on("exit", (code) => {
  console.log(`\n✅ 개발 서버 종료됨 (${code})`);
});
