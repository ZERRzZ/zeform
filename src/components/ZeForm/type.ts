import { ReactNode } from "react";
import { FormItemProps, FormProps } from "antd";

/**
 * 表单 Props
 * @param form antd 表单标签 <Form> 的 Props
 * @param items 表单项配置
 */
export interface ZeFormProps {
  form?: FormProps;
  items?: ZeFormItem[];
}

/**
 * 表单项配置
 * @param type 类型
 * @param item 表单项 Props，等同于 <Form.Item> 标签 Props
 * @param list 表单列表配置，当 type=list 时你应该配置 list 项而不是 item 项
 * @param option 相应的表单控件 Props
 * @param innerHtml 表单内容
 * @param hidden 隐藏
 */
export interface ZeFormItem {
  type: ZeFormTypes;
  item?: FormItemProps;
  list?: ZeFormList;
  option?: any;
  innerHtml?: ReactNode;
  hidden?: boolean;
}

/**
 * 我的表单 list 表单项
 * @param name 字段 key 值
 * @param label 标签名
 * @param tooltip 配置提示信息
 * @param rules 整体校验，必须是自定义校验
 * @param initialValue 初始值
 * @param isMove 是否显示上移下移
 * @param items list 中的表单
 */
export interface ZeFormList {
  name: string;
  label?: string;
  tooltip?: string;
  rules?: {
    validator: (rule: any, names: any) => Promise<any>;
    message: string;
  }[];
  initialValue?: any[];
  isMove?: boolean;
  items?: ZeFormItem[];
}

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
