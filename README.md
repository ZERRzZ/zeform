# 简介

基于 antd 的表单组件，使用 json 配置表单，内置多种拓展，api 不变但能实现高速开发

# 安装

`npm i @chengzs/zeform` 或 `yarn add @chengzs/zeform`

# 基础使用

## 1. 引入 css

`@import '@chengzs/zeform/lib/zeform.css'`

## 2. 快速使用

```tsx
// 引入
import { ZeForm, ZeFormItem } from '@chengzs/zeform'
// 指定类型
const items: ZeFormItem[] = [
  {
    type: 'input',
    item: { name: 'name', label: '姓名' },
  },
  { type: 'submit', span: 2 },
  { type: 'reset', span: 22 },
]
// DOM使用
return (
  <ZeForm
    form={{ layout: 'horizontal', onFinish: v => console.log(v) }}
    items={items}
  />
)
```

# API

```html
<ZeForm form={form} items={items} />
```

## form

表单整体配置

1. 几乎所有字段同 antd <Form> 标签 Props, 功能字段一致

2. 额外字段：`gutter`, 为栅格系统的间隔值，单位为 px

## items

表单项配置

1. `type`: 表单项类型

```ts
'input' | 'password' | 'textarea' | 'number' | 'mentions' |
'radio' | 'checkbox' | 'select' | 'cascader' |
'rate' | 'slider' | 'switch' | 'color' |
'year' | 'month' | 'date' | 'time' | 'dateTime' | 'yearRange' | 'monthRange' | 'dateRange' | 'timeRange' | 'dateTimeRange' |
// 'upload' | 'myUpload' | 'myImageUpload' | 'myVideoUpload' | 'myDocUpload' | 'myFileUpload' |
'button' | 'submit' | 'reset' |
'list' | 'custom'
```

2. `item`: 表单项 Props, 等同于 <Form.Item> 标签 Props, 功能字段一致

3. `option`: 相应的表单控件 Props, 等同于相应表单控件的 Props, 功能字段一致

4. `innerHtml`: 表单 children 值, 例如按钮

5. `hidden`: 表单隐藏配置

6. `span`: 栅格系统占位格数, 值在 0 - 24 之间

# 深入使用

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
