export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/self/notebook/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"个人知识库"} }],
  ["/%E4%B8%AA%E4%BA%BA%E7%9F%A5%E8%AF%86%E5%BA%93/%E6%8A%80%E6%9C%AF%E6%A0%88%E7%9B%AE%E5%BD%95.html", { loader: () => import(/* webpackChunkName: "个人知识库_技术栈目录.html" */"D:/self/notebook/docs/.vuepress/.temp/pages/个人知识库/技术栈目录.html.js"), meta: {"title":""} }],
  ["/%E4%B8%AA%E4%BA%BA%E7%9F%A5%E8%AF%86%E5%BA%93/%E8%B4%A6%E5%8F%B7%E6%80%BB%E7%BB%93.html", { loader: () => import(/* webpackChunkName: "个人知识库_账号总结.html" */"D:/self/notebook/docs/.vuepress/.temp/pages/个人知识库/账号总结.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/self/notebook/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
