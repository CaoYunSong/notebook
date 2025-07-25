import { GitContributors } from "D:/self/notebook/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.112_vuepress@2.0.0-rc.24_@vuepress+bundler-vite@2.0.0-rc.24_@ty_j6czvbuhmvv52rffpaeaik7w5e/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "D:/self/notebook/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.112_vuepress@2.0.0-rc.24_@vuepress+bundler-vite@2.0.0-rc.24_@ty_j6czvbuhmvv52rffpaeaik7w5e/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
