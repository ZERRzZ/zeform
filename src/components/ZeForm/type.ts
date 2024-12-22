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
