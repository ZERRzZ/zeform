import React, { useMemo } from "react";
import {
  Button,
  Cascader,
  Checkbox,
  Col,
  ColorPicker,
  ConfigProvider,
  Form,
  Input,
  InputNumber,
  Mentions,
  Radio,
  Rate,
  Row,
  Select,
  Slider,
  Switch,
  Upload,
} from "antd";
import {
  DownCircleOutlined,
  MinusCircleOutlined,
  PlusOutlined,
  UpCircleOutlined,
} from "@ant-design/icons";
import locale from "antd/locale/zh_CN";
import "dayjs/locale/zh-cn";
import { ZeFormItem, ZeFormProps } from "./type";
import ZeTimeDate from "../ZeTimeDate";
import "./index.css";
import ZeCron from "../ZeCron";
import ZeEditor from "../ZeEditor";
import ZeCode from "../ZeCode";

export default function ZeForm({ form, items }: ZeFormProps) {
  const renderFormItem = (item: ZeFormItem) => {
    switch (item.type) {
      case "input":
        return <Input placeholder="请输入" {...item.option} />;
      case "password":
        return <Input.Password placeholder="请输入" {...item.option} />;
      case "textarea":
        return (
          <Input.TextArea
            placeholder="请输入"
            rows={5}
            showCount
            {...item.option}
          />
        );
      case "number":
        return <InputNumber placeholder="请输入" {...item.option} />;
      case "mentions":
        return <Mentions placeholder="请输入" autoSize {...item.option} />;
      case "radio":
        return <Radio.Group {...item.option} />;
      case "checkbox":
        return <Checkbox.Group {...item.option} />;
      case "select":
        return (
          <Select
            allowClear
            showSearch
            placeholder="请选择"
            filterOption={(input, option) =>
              (option?.label ?? "")
                .toString()
                .toLowerCase()
                .includes(input.toLowerCase())
            }
            {...item.option}
          />
        );
      case "cascader":
        return (
          <Cascader
            placeholder="请选择"
            showSearch={{
              filter: (input, path) =>
                path.some(
                  (option) =>
                    (option.label as string)
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) > -1
                ),
            }}
            {...item.option}
          />
        );
      case "rate":
        return <Rate {...item.option} />;
      case "slider":
        return <Slider {...item.option} />;
      case "switch":
        return <Switch {...item.option} />;
      case "color":
        return <ColorPicker format="hex" {...item.option} />;
      case "year":
      case "month":
      case "date":
      case "time":
      case "dateTime":
      case "yearRange":
      case "monthRange":
      case "dateRange":
      case "timeRange":
      case "dateTimeRange":
        return <ZeTimeDate type={item.type} option={item.option} />;
      case "originUpload":
        return <Upload {...item.option}>{item.innerHtml}</Upload>;
      case "button":
        return <Button {...item.option}>{item.innerHtml}</Button>;
      case "submit":
        return (
          <Button htmlType="submit" type="primary" {...item.option}>
            {item.innerHtml || "提交"}
          </Button>
        );
      case "reset":
        return (
          <Button htmlType="reset" {...item.option}>
            {item.innerHtml || "重置"}
          </Button>
        );
      case "cron":
        return <ZeCron {...item.option} />;
      case "editor":
        <ZeEditor {...item.option} />;
      case "code":
        <ZeCode {...item.option} />;
      case "custom":
        return item.innerHtml;
    }
  };

  const initSpan = useMemo(
    () => (form?.layout !== "inline" ? 24 : undefined),
    [form]
  );

  return (
    <ConfigProvider locale={locale}>
      <Form {...form}>
        <Row gutter={form?.gutter || 24}>
          {items?.map((v, i) =>
            v.hidden ? (
              ""
            ) : (
              <Col key={i} span={v.span || initSpan}>
                {v.type === "list" ? (
                  <Form.List
                    name={v.list!.name}
                    initialValue={v.list?.initialValue}
                    rules={v.list?.rules}
                  >
                    {(fields, { add, remove, move }, { errors }) => (
                      <Form.Item
                        label={v.list?.label}
                        tooltip={v.list?.tooltip}
                      >
                        {fields.map(({ key, name, ...field }, index) => (
                          <div className="zeform-list" key={key}>
                            {v.list?.items?.map((vv, ii) =>
                              vv.hidden ? (
                                ""
                              ) : (
                                <Form.Item
                                  valuePropName={
                                    vv.type === "switch" ? "checked" : undefined
                                  }
                                  {...field}
                                  {...vv.item}
                                  key={`${vv.item?.name}${ii}`}
                                  name={[name, vv.item?.name as any]}
                                  label={index === 0 && vv.item?.label}
                                >
                                  {renderFormItem(vv)}
                                </Form.Item>
                              )
                            )}
                            <MinusCircleOutlined
                              className={`zeform-list-btn ${
                                index ? "" : "zeform-list-first-btn"
                              }`}
                              onClick={() => remove(name)}
                            />
                            {v.list?.isMove ? (
                              <>
                                <UpCircleOutlined
                                  className={`zeform-list-btn ${
                                    index ? "" : "zeform-list-first-btn"
                                  }`}
                                  onClick={() => move(index, index - 1)}
                                />
                                <DownCircleOutlined
                                  className={`zeform-list-btn ${
                                    index ? "" : "zeform-list-first-btn"
                                  }`}
                                  onClick={() => move(index, index + 1)}
                                />
                              </>
                            ) : (
                              ""
                            )}
                          </div>
                        ))}
                        <Button
                          type="dashed"
                          onClick={() => add()}
                          block
                          icon={<PlusOutlined />}
                        />
                        <Form.ErrorList errors={errors} />
                      </Form.Item>
                    )}
                  </Form.List>
                ) : (
                  <Form.Item
                    valuePropName={v.type === "switch" ? "checked" : undefined}
                    {...v.item}
                  >
                    {renderFormItem(v)}
                  </Form.Item>
                )}
              </Col>
            )
          )}
        </Row>
      </Form>
    </ConfigProvider>
  );
}
