import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  // Pin the tracing root to this project directory so a stray lockfile
  // elsewhere on the machine can't cause Next.js to infer the wrong root.
  outputFileTracingRoot: __dirname,
};

export default withNextIntl(nextConfig);
