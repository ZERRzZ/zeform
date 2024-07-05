import { ReactNode } from "react"
import { FormItemProps, FormProps } from "antd"
import { Gutter } from "antd/es/grid/row"

/**
 * 表单 Props
 * @param form 表单标签 Props，是 <Form> 标签 Props 的拓展
 * @param items 表单项配置
 */
export interface ZeFormProps {
  form?: ZeFormForm
  items?: ZeFormItem[]
}

/**
 * 表单总体配置
 * 继承于 FormProps
 * @param gutter 间隔，antd 栅格系统的 gutter 值
 */
export interface ZeFormForm extends FormProps {
  gutter?: Gutter | [Gutter, Gutter]
}

/**
 * 表单项配置
 * @param type 表单类型
 * @param item 表单项 Props，等同于 <Form.Item> 标签 Props
 * @param list 表单列表配置，当 type=list 时你应该配置 list 项而不是 item 项
 * @param option 相应的表单控件 Props
 * @param innerHtml 表单内容
 * @param hidden 隐藏
 * @param span 占位格数，antd 栅格系统的 span 值
 */
export interface ZeFormItem {
  type: ZeFormType
  item?: FormItemProps
  list?: ZeFormList
  option?: any
  innerHtml?: ReactNode
  hidden?: boolean
  span?: number
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
  name: string
  label?: string
  tooltip?: string
  rules?: { validator: (rule: any, names: any) => Promise<any>, message: string }[]
  initialValue?: any[]
  isMove?: boolean
  items?: ZeFormItem[]
}

/**
 * 我的表单表单项类型
 */
export type ZeFormType =
  'input' | 'password' | 'textarea' | 'number' | 'mentions' |
  'radio' | 'checkbox' | 'select' | 'cascader' |
  'rate' | 'slider' | 'switch' | 'color' |
  'year' | 'month' | 'date' | 'time' | 'dateTime' | 'yearRange' | 'monthRange' | 'dateRange' | 'timeRange' | 'dateTimeRange' |
  'originUpload' | 'zeUpload' |
  // 'myUpload' | 'myImageUpload' | 'myVideoUpload' | 'myDocUpload' | 'myFileUpload' |
  'button' | 'submit' | 'reset' |
  'list' | 'custom'

// export interface ZeFormOptions {
//   input?: InputProps
//   password?: PasswordProps
//   textarea?: TextAreaProps
//   number?: InputNumberProps
//   mentions?: MentionProps
//   radio?: RadioGroupProps
//   checkbox?: CheckboxGroupProps
//   select?: SelectProps
//   cascader?: CascaderProps
//   rate?: RateProps
//   slider?: SliderSingleProps | SliderRangeProps
//   switch?: SwitchProps
//   color?: ColorPickerProps
//   button?: ButtonProps
//   submit?: ButtonProps
//   reset?: ButtonProps
//   list?: any
//   custom?: any
// }