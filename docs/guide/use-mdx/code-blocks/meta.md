# 代码块属性

除了标题外，还支持显示行号和自动换行等属性：

```ts lineNumbers wrapCode title="example.ts"
const longVariableName = 'This code block has line numbers, code wrapping, and a title for better readability in interview answers';
```

可用属性：

- `lineNumbers` — 显示行号
- `wrapCode` — 长行自动换行
- `title="xxx"` — 显示文件名标题

组合使用示例：

```js lineNumbers title="Vue 响应式原理简化实现"
function reactive(obj) {
  return new Proxy(obj, {
    get(target, key) {
      track(target, key);
      return target[key];
    },
    set(target, key, value) {
      target[key] = value;
      trigger(target, key);
      return true;
    }
  });
}
```
