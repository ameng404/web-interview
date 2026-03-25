# 提示容器

在编写面试题解时，可以使用 `:::` 语法创建提示容器来强调重点内容。

## 可用类型

:::tip 重点
用于标注面试中的**核心要点**或**加分回答**。
:::

:::info 补充
用于补充说明相关的**背景知识**或**延伸阅读**。
:::

:::warning 易错点
用于提醒面试中常见的**误区**或**易混淆概念**。
:::

:::danger 注意
用于标注**严重错误**或**绝对不能犯的问题**。
:::

::: details 查看示例代码
```js
function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
```
:::

## 自定义标题

```md
:::tip 面试加分项
这里写内容
:::
```

:::tip 面试加分项
能说出底层原理、对比不同方案的优缺点，会大大加分。
:::
