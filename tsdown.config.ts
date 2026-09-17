import { defineConfig, type UserConfig } from "tsdown";

const config: UserConfig = {
  entry: "./src/index.ts",
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  exports: true,
};

export default defineConfig(config);
