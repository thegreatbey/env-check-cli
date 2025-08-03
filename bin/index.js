#!/usr/bin/env node
import fs from "fs";
import path from "path";

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("Usage: env-check-cli <VAR1> <VAR2> ... OR --file <path>");
  process.exit(1);
}

let varsToCheck = [];

// If using --file option
if (args[0] === "--file" && args[1]) {
  const filePath = path.resolve(args[1]);
  if (!fs.existsSync(filePath)) {
    console.error(`Config file not found: ${filePath}`);
    process.exit(1);
  }
  varsToCheck = fs.readFileSync(filePath, "utf-8").split(/\r?\n/).filter(Boolean);
} else {
  varsToCheck = args;
}

const missing = varsToCheck.filter(v => !process.env[v]);

if (missing.length === 0) {
  console.log("✅ All environment variables are set.");
} else {
  console.error("❌ Missing variables:", missing.join(", "));
  process.exit(1);
}
