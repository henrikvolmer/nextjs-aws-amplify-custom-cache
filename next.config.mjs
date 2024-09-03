import { execSync } from "child_process";
import { fileURLToPath } from "url";

/** @type {import('next').NextConfig} */
const nextConfig = {
  generateBuildId: () => execSync("git rev-parse HEAD").toString().trim(),
  cacheHandler: fileURLToPath(
    import.meta.resolve("@henrikvolmer/nextjs-cache-handler-s3"),
  ),
  cacheMaxMemorySize: 0,
};

export default nextConfig;
