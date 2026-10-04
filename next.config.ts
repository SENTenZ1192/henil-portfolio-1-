import type { NextConfig } from "next";
const config: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    useTypeScriptCli: false,
    workerThreads: true,
    webpackBuildWorker: false,
  },
};
export default config;
