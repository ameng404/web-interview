import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Web Interview',
  description: '前端面试题宝典 - 覆盖 Vue、React、JavaScript、CSS、HTTP、算法等 15 大专题，200+ 精选题解',
  icon: '/rspress-icon.png',
  logo: '/rspress-icon.png',
  logoText: 'Web Interview',
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/febobo/web-interview',
      },
    ],
    footer: {
      message: 'Web Interview - 前端面试题宝典',
    },
  },
});
