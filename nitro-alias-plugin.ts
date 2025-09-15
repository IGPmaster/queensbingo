
export default function nitroAliasPlugin() {
  return {
    name: 'nitro-alias',
    setup(build: any) {
      const nitroPath = require.resolve('@nuxt/nitro/dist/runtime/index.mjs');

      build.onResolve({ filter: /^#internal\/nitro$/ }, (args: any) => {
        return { path: nitroPath };
      });
    },
  };
}
