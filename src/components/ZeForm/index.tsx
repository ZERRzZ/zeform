import React, { Fragment } from "react";
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Radio,
  Rate,
  Select,
  Slider,
  Switch,
  TimePicker,
  Upload,
} from "antd";
import {
  DownCircleOutlined,
  MinusCircleOutlined,
  PlusOutlined,
  UpCircleOutlined,
} from "@ant-design/icons";

import "./index.css";
import { ZeFormItem, ZeFormList, ZeFormProps } from "./type";

export default function ZeForm({ form, items }: ZeFormProps) {
  //
  const spawnItem = (item: ZeFormItem) => {
    switch (item.type) {
      case "text":
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
      case "time":
        return <TimePicker {...item.option} />;
      case "timeRange":
        return <TimePicker.RangePicker {...item.option} />;
      case "date":
        return <DatePicker {...item.option} />;
      case "dateRange":
        return <DatePicker.RangePicker {...item.option} />;
      case "upload":
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
      case "custom":
        return item.innerHtml;
    }
  };

  const spawnFormItem = (v: ZeFormItem) => (
    <Form.Item
      valuePropName={v.type === "switch" ? "checked" : "value"}
      {...v.item}
    >
      {spawnItem(v)}
    </Form.Item>
  );

  const spawnFormList = (v: ZeFormItem) => (
    <Form.List
      name={v.item?.name}
      initialValue={v.item?.initialValue}
      rules={(v.item as ZeFormList)?.rules}
    >
      {(fields, { add, remove, move }, { errors }) => (
        <Form.Item
          {...v.item}
          name={undefined}
          initialValue={undefined}
          rules={undefined}
        >
          {fields.map(({ key, name, ...field }, index) => (
            <div className="zeform-list" key={key}>
              {(v.item as ZeFormList)?.items?.map((vv, ii) =>
                vv.hidden ? (
                  ""
                ) : (
                  <Form.Item
                    valuePropName={vv.type === "switch" ? "checked" : "value"}
                    {...field}
                    {...vv.item}
                    key={`${vv.item?.name}${ii}`}
                    name={[name, vv.item?.name as any]}
                    label={index === 0 && vv.item?.label}
                  >
                    {spawnItem(vv)}
                  </Form.Item>
                )
              )}
              <MinusCircleOutlined
                className={`zeform-list-btn ${
                  index ? "" : "zeform-list-first-btn"
                }`}
                onClick={() => remove(name)}
              />
              {(v.item as ZeFormList)?.isMove ? (
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
  );

  return (
    <Form {...form} className={form?.layout === "inline" ? "" : "zeform"}>
      {items?.map((v, i) => (
        <Fragment key={i}>
          {v.hidden
            ? ""
            : v.type === "list"
            ? spawnFormList(v)
            : spawnFormItem(v)}
        </Fragment>
      ))}
    </Form>
  );
}
