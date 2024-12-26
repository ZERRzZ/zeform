# 简介

基于 antd 的表单组件，使用 json 配置表单，内置多种拓展，api 不变但能实现高速开发

# 安装

`npm i @chengzs/zeform` 或 `yarn add @chengzs/zeform`

# 基础使用

## 1. 引入 css

`@import '@chengzs/zeform/lib/zeform.css'`

## 2. 快速使用

```tsx
export default function FormDemo() {
  const form: FormProps = {
    layout: "horizontal",
    labelCol: { span: 2 },
    onFinish: (values) => {
      console.log(values);
    },
  };

  const items: ZeFormItem[] = [
    {
      type: "text",
      item: {
        label: "text",
        name: "text",
        labelCol: { span: 4 },
        style: { width: "50%" },
      },
      option: { prefix: <InfoCircleOutlined /> },
    },
    {
      type: "password",
      item: {
        label: "password",
        name: "password",
        labelCol: { span: 4 },
        style: { width: "50%" },
      },
    },
    {
      type: "textarea",
      item: { label: "textarea", name: "textarea" },
    },
  ];

  return <ZeForm form={form} items={items} />;
}
```

# API

## form

表单整体配置

1. 所有字段同 antd <Form> 标签 Props, 功能字段一致

## items

表单项配置，类型如下

```ts
/**
 * 表单项配置
 * @param type 类型
 * @param item 表单项 Props，等同于 <Form.Item> 标签 Props
 * @param option 相应的表单控件 Props
 * @param innerHtml 表单内容
 * @param hidden 隐藏
 */
export interface ZeFormItem {
  type: ZeFormTypes;
  item?: FormItemProps | ZeFormList;
  option?: any;
  innerHtml?: ReactNode;
  hidden?: boolean;
}
```

1. `type`: 表单项类型

```ts
/**
 * 我的表单表单项类型
 */
export type ZeFormTypes =
  | "text"
  | "password"
  | "textarea"
  | "number"
  | "mentions"
  | "radio"
  | "checkbox"
  | "select"
  | "cascader"
  | "rate"
  | "slider"
  | "switch"
  | "color"
  | "time"
  | "timeRange"
  | "date"
  | "dateRange"
  | "upload"
  | "button"
  | "submit"
  | "reset"
  | "list"
  | "custom";
```

2. `item`: 表单项 Props, 等同于 <Form.Item> 标签 Props, 功能字段一致

3. `option`: 相应的表单控件 Props, 等同于相应表单控件的 Props, 功能字段一致

4. `innerHtml`: 表单 children 值, 例如按钮

5. `hidden`: 表单隐藏配置

# 深入使用

表单列表的配置，`type = list`

```tsx
/**
 * list 表单项
 * @param rules 整体校验，必须是自定义校验
 * @param isMove 是否显示上移下移
 * @param items list 中的表单
 */
export interface ZeFormList extends FormItemProps {
  rules?: {
    validator: (rule: any, names: any) => Promise<any>;
    message: string;
  }[];
  isMove?: boolean;
  items?: ZeFormItem[];
}
```

```tsx
// item 配置
{
  type: "list",
  item: {
    label: "list",
    name: "list",
    items: [
      {
        type: "text",
        item: { label: "text", name: "text" },
      },
      {
        type: "password",
        item: { label: "password", name: "password" },
      },
    ],
  },
},
```
