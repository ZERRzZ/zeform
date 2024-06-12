import React, { useMemo } from "react"
import { Button, Cascader, Checkbox, Col, ColorPicker, Form, Input, InputNumber, Mentions, Radio, Rate, Row, Select, Slider, Switch } from "antd"
import { DownCircleOutlined, MinusCircleOutlined, PlusOutlined, UpCircleOutlined } from '@ant-design/icons'
import { ZeFormItem, ZeFormProps } from "./type"

export default function ZeForm({ form, items }: ZeFormProps) {

  const renderFormItem = (item: ZeFormItem) => {
    switch (item.type) {
      case 'input': return <Input placeholder="请输入" {...item.option} />
      case 'password': return <Input.Password placeholder="请输入" {...item.option} />
      case 'textarea': return <Input.TextArea placeholder="请输入" rows={5} showCount {...item.option} />
      case 'number': return <InputNumber placeholder="请输入" {...item.option} />
      case 'mentions': return <Mentions placeholder="请输入" autoSize {...item.option} />
      case 'radio': return <Radio.Group {...item.option} />
      case 'checkbox': return <Checkbox.Group {...item.option} />
      case 'select':
        return <Select
          placeholder='请选择'
          allowClear
          showSearch
          filterOption={(input, option) => (option?.label ?? '').toString().toLowerCase().includes(input.toLowerCase())}
          {...item.option}
        />
      case 'cascader':
        return <Cascader
          placeholder='请选择'
          showSearch={{ filter: (input, path) => path.some(option => (option.label as string).toLowerCase().indexOf(input.toLowerCase()) > -1) }}
          {...item.option}
        />
      case 'rate': return <Rate {...item.option} />
      case 'slider': return <Slider {...item.option} />
      case 'switch': return <Switch {...item.option} />
      case 'color': return <ColorPicker format="hex" {...item.option} />
      // case 'year':
      // case 'month':
      // case 'date':
      // case 'time':
      // case 'dateTime':
      // case 'yearRange':
      // case 'monthRange':
      // case 'dateRange':
      // case 'timeRange':
      // case 'dateTimeRange': return <MyTimeDate type={item.type} option={item.option} />
      // case 'upload': return <Upload {...item.option}>{item.innerHtml}</Upload>
      // case 'myUpload': return <MyUpload {...item.option}>{item.innerHtml}</MyUpload>
      // case 'myImageUpload': return <MyImageUpload {...item.option}>{item.innerHtml}</MyImageUpload>
      // case 'myVideoUpload': return <MyVideoUpload {...item.option}>{item.innerHtml}</MyVideoUpload>
      // case 'myDocUpload': return <MyDocUpload {...item.option}>{item.innerHtml}</MyDocUpload>
      // case 'myFileUpload': return <MyFileUpload {...item.option}>{item.innerHtml}</MyFileUpload>
      case 'button': return <Button {...item.option}>{item.innerHtml}</Button>
      case 'custom': return item.innerHtml
      case 'submit': return <Button htmlType='submit' type="primary" {...item.option}>{item.innerHtml || '提交'}</Button>
      case 'reset': return <Button htmlType="reset" {...item.option}>{item.innerHtml || '重置'}</Button>
      // case 'cron': return <MyCron {...item.option} />
      // case 'oneLevelOpt': return <MyOneLevelOpt {...item.option} />
      // case 'multiLevelOpt': return <MyMultiLevelOpt {...item.option} />
      // case 'editor': return readonly ? <ViewItem type={item.type} /> : <MyEditor {...item.option} />
      // case 'code': return readonly ? <ViewItem type={item.type} /> : <MyCode {...item.option} />
    }
  }

  const initSpan = useMemo(() => form?.layout !== 'inline' ? 24 : undefined, [form])

  return (
    <Form {...form}>
      <Row gutter={form?.gutter || 24}>
        {
          items?.map((v, i) =>
            v.hidden ? '' :
              <Col key={i} span={v.span || initSpan}>
                {
                  v.type === 'list' ?
                    <Form.List name={v.list!.name} initialValue={v.list?.initialValue} rules={v.list?.rules}>
                      {
                        (fields, { add, remove, move }, { errors }) =>
                          <Form.Item label={v.list?.label} tooltip={v.list?.tooltip}>
                            {
                              fields.map(({ key, name, ...field }, index) =>
                                <div className="zeform-list" key={key}>
                                  {
                                    v.list?.items?.map((vv, ii) =>
                                      vv.hidden ? '' :
                                        <Form.Item
                                          valuePropName={vv.type === 'switch' ? 'checked' : undefined}
                                          {...field}
                                          {...vv.item}
                                          key={`${vv.item?.name}${ii}`}
                                          name={[name, vv.item?.name as any]}
                                          label={index === 0 && vv.item?.label}
                                        >
                                          {renderFormItem(vv)}
                                        </Form.Item>)
                                  }
                                  {
                                    <>
                                      <MinusCircleOutlined className={`zeform-list-btn ${index ? '' : 'zeform-list-first-btn'}`} onClick={() => remove(name)} />
                                      {
                                        v.list?.isMove ?
                                          <>
                                            <UpCircleOutlined className={`zeform-list-btn ${index ? '' : 'zeform-list-first-btn'}`} onClick={() => move(index, index - 1)} />
                                            <DownCircleOutlined className={`zeform-list-btn ${index ? '' : 'zeform-list-first-btn'}`} onClick={() => move(index, index + 1)} />
                                          </>
                                          : ''
                                      }
                                    </>
                                  }
                                </div>
                              )
                            }
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />} />
                            <Form.ErrorList errors={errors} />
                          </Form.Item>
                      }
                    </Form.List>
                    :
                    <Form.Item valuePropName={v.type === 'switch' ? 'checked' : undefined} {...v.item}>{renderFormItem(v)}</Form.Item>
                }
              </Col>
          )
        }
      </Row>
    </Form >
  )

}