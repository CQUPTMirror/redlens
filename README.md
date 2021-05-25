# Vue 3 + Vite 2 全家桶开发模版


使用 Vue3 开发模板。  
通过该模板创建一个新项目：

```bash
$ npx degit Shimada666/template-vue3 my-app
$ cd my-app
```

## 技术选型
- [x] Vue3   
- [x] Vite2  
- [x] Typescript  
- [x] ElementPlus  
- [x] Vue-Router  
- [x] Vuex  
- [x] node-sass  
- [x] eslint  
- [x] stylelint  
- [x] commitlint  
- [x] Default Layout

## Todo Templates
Base: Vue3 + Vite2 + Typescript + Vue-Router + Vuex + node-sass + eslint + stylelint + 
commitlint + Default Layout  
- [x] use ElementPlus ui library.    
- [ ] use antdv2 ui library. [view antdv](https://2x.antdv.com/docs/vue/introduce-cn)

## 开始开发

安装依赖

```bash
$ yarn install
```

开始构建

```bash
$ yarn run dev
```

## 使用 script setup 语法，甚至 ref sugar
在示例 HelloWorld.vue 中, 我们使用了 compositon api(raw) 语法，代码像这样
### composition api(raw)
```html
<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  setup: () => {
    const count = ref(0)
    return { count }
  }
})
</script>
```
但是如果你使用 script setup 语法，代码将更加简单
### script setup
```html
<script setup lang="ts">
import { ref } from 'vue'

const name = 'HelloWorld'
const count = ref(0)
</script>
```
很可惜 script setup，暂时目前 webstorm(2021.1) 不支持，你只能用 vscode + volar
### 更激进的 ref sugar
```html
<script setup lang="ts">
const name = 'HelloWorld'
ref: count = 0
</script>
```
> [@vue/compiler-sfc] ref: sugar is still an experimental proposal.
> Follow its status at https://github.com/vuejs/rfcs/pull/228.
## Git 仓库 分支和提交约定

简要摘录:
> commit 约定(https://conventionalcommits.org/lang/zh-Hans)

完整格式如下： 其中第一行必填，方括号内选填，注意空行

```
  <type>[optional scope]: <description>

  [optional body]

  [optional footer]
```

可用的 type 如下：

- feat: A new feature
- fix: A bug fix
- docs: Documentation only changes
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- refactor: A code change that neither fixes a bug nor adds a feature
- perf: A code change that improves performance
- test: Adding missing tests or correcting existing tests
- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- chore: Other changes that don't modify src or test files
- revert: Reverts a previous commit

一些实际的 demo:

```
feat(service): 增加服务新增功能
feat(monitor): 增加监控模块
fix(api): 修复API模块对错误码判断错误导致的权限判断逻辑错误, issue #123
docs: 新增关于git commit message约定的文档
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"
