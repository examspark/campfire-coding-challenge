import esbuild from "esbuild";

export async function build(args: { entryPoint: string; globalName: string }) {
  const sharedOptions: esbuild.BuildOptions = {
    entryPoints: [args.entryPoint],
    bundle: true,
    // preserveSymlinks: true,
    // external: ["react", "react-dom", "react-switch", "styled-components"],
  };

  console.log("Building for Node environment");
  await esbuild.build({
    ...sharedOptions,
    format: "esm",
    outfile: "dist/esm/index.js",
    // logLevel: "debug",
  });

  console.log("Building for browser environment");
  await esbuild.build({
    ...sharedOptions,
    format: "iife",
    outfile: "dist/browser/index.js",
    globalName: args.globalName,
    platform: "browser",
    minify: true,
    // logLevel: "debug",
  });
}
