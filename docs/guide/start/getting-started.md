# 快速开始

本项目基于 [Rspress](https://rspress.rs/) 构建，你可以在本地运行、预览和编辑面试题内容。

## 环境准备

确保你的开发环境已安装：

- [Node.js](https://nodejs.org/) >= 18
- npm / yarn / pnpm / bun 任一包管理器

## 安装依赖

```bash
npm install
```

## 本地开发

启动本地开发服务器：

```bash
npm run dev
```

:::tip
默认访问地址为 `http://localhost:3000`，支持热更新，修改文档内容后页面会自动刷新。
:::

## 生产构建

构建生产版本的静态站点：

```bash
npm run build
```

构建产物默认输出到 `doc_build` 目录，可直接部署到任意静态服务器。

## 本地预览

预览生产构建效果：

```bash
npm run preview
```

## 项目结构

```
docs/
├── index.md              # 首页
├── _nav.json             # 顶部导航配置
├── public/               # 静态资源（图片等）
├── guide/                # 使用指南（当前页面）
├── api/                  # API 文档
└── interview/            # 面试题（核心内容）
    ├── _meta.json        # 侧边栏配置
    ├── vue/              # Vue 系列（32 篇）
    ├── vue3/             # Vue3 系列（6 篇）
    ├── React/            # React 系列（33 篇）
    ├── JavaScript/       # JavaScript 系列（35 篇）
    ├── es6/              # ES6 系列（10 篇）
    ├── typescript/       # TypeScript 系列（12 篇）
    ├── css/              # CSS 系列（20 篇）
    ├── webpack/          # Webpack 系列（10 篇）
    ├── http/             # HTTP 系列（14 篇）
    ├── NodeJS/           # Node.js 系列（14 篇）
    ├── git/              # 版本控制系列（10 篇）
    ├── linux/            # 操作系统系列（7 篇）
    ├── algorithm/        # 算法系列（18 篇）
    ├── applet/           # 小程序系列（8 篇）
    └── design/           # 设计模式系列（6 篇）
```

## 下一步

- 浏览 [面试题库](/interview/vue/vue) 开始刷题
- 阅读 [贡献指南](/guide/use-mdx/components) 了解如何参与内容贡献
