/** 
 * 时间, 日期, 范围选择器
 * @param type 类型
 * @param option 所用标签的 Props
 * @param value 值
 * @param onChange 值改变事件
 */
export interface ZeTimeDateProps {
  type: 'year' | 'month' | 'date' | 'time' | 'dateTime' | 'yearRange' | 'monthRange' | 'dateRange' | 'timeRange' | 'dateTimeRange'
  option?: any
  value?: string | [string, string]
  onChange?: (value: string | [string, string]) => void
}