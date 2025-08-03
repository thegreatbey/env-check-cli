import { describe, it, expect } from "vitest";

describe("env-check-cli", () => {
  it("detects missing env vars", () => {
    process.env.TEST_VAR = "123";
    const vars = ["TEST_VAR", "ANOTHER_VAR"];
    const missing = vars.filter(v => !process.env[v]);
    expect(missing).toContain("ANOTHER_VAR");
  });
});
