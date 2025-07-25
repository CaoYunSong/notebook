import comp from "D:/self/notebook/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"updatedTime\":1753405076000,\"contributors\":[{\"name\":\"cys\",\"username\":\"\",\"email\":\"1658439491@qq.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"22d1ffe21ac8c8951046c0b48bb9c25b5a559d4f\",\"time\":1753405076000,\"email\":\"1658439491@qq.com\",\"author\":\"cys\",\"message\":\"inti\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
