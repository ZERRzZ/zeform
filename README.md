# 简介

基于 antd 的表单组件，使用 json 配置表单，内置多种拓展，api 不变但能实现高速开发

# 使用

`npm i @chengzs/zeform` 或 `yarn add @chengzs/zeform`

# 基础使用

引入 css

`@import '@chengzs/zeform/lib/zeform.css' ;`

页面中使用

```tsx
<ZeForm
  form={{ layout: "horizontal", onFinish: (v) => console.log(v), gutter: 24 }}
  items={items}
/>
```

form 同 `<Form>` 标签 props

`gutter` 为栅格系统的间隔

`items` 则为表单项

```tsx
const options = [
  { value: "1", label: "1", children: [{ value: "1-1", label: "1-1" }] },
  { value: "2", label: "2", children: [{ value: "2-1", label: "2-1" }] },
  { value: "3", label: "3", children: [{ value: "3-1", label: "3-1" }] },
];

const items: ZeFormItem[] = [
  {
    type: "input",
    item: { name: "name", label: "姓名" },
  },
  {
    type: "textarea",
    item: { name: "info", label: "自我介绍" },
  },
  {
    type: "number",
    item: { name: "age", label: "年龄" },
  },
  {
    type: "radio",
    item: { name: "like", label: "喜好" },
    option: { options },
  },
  {
    type: "checkbox",
    item: { name: "love", label: "兴趣" },
    option: { options },
  },
  {
    type: "select",
    item: { name: "type", label: "类型" },
    option: { options },
  },
  {
    type: "cascader",
    item: { name: "address", label: "地址" },
    option: { options },
  },
  {
    type: "date",
    item: { name: "date", label: "日期" },
  },
  { type: "submit", span: 2 },
  { type: "reset", span: 22 },
];
```

表单列表的配置，`type = list`

```tsx
{
  type: "list",
  list: {
    name: "list",
    label: "列表",
    isMove: true,
    items: [
      {
        type: "input",
        item: { label: "姓名1", name: "cname1" },
      },
      {
        type: "input",
        item: { label: "姓名2", name: "cname2" },
      },
      {
        type: "textarea",
        item: { label: "姓名3", name: "cname3" },
      },
    ],
  },
}
```
