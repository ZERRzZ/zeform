# 简介

基于 antd 的表单组件，使用 json 配置表单，内置多种拓展，api 不变但能实现高速开发

# 使用

`npm i @chengzs/zeform` 或 `yarn add @chengzs/zeform`

# 基础使用

引入 css

`@import '@chengzs/zeform/lib/zeform.css' ;`

页面中使用

```tsx
function App() {
  const items: ZeFormItem[] = [
    {
      type: "input",
      item: { name: "name", label: "姓名" },
    },
    {
      type: "password",
      item: { name: "pass", label: "密码" },
    },
    {
      type: "submit",
    },
    {
      type: "reset",
    },
  ];
  return (
    <>
      <ZeForm
        form={{ layout: "inline", onFinish: (v) => console.log(v) }}
        items={items}
      />
    </>
  );
}
```
