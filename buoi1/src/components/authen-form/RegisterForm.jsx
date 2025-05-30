import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import './register.css';

function RegisterForm() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="register-form">
      <h1>Đăng ký</h1>
  <Form
  name="basic"
  layout="vertical"
  labelCol={{ span: 24 }}


  // style={{ maxWidth: 600 }}
  initialValues={{ remember: true }}
  onFinish={onFinish}
  onFinishFailed={onFinishFailed}
  autoComplete="off"
>
  <Form.Item
    label="Họ và tên"
    name="fullname"
    rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}
  >
    <Input />
  </Form.Item>

  <Form.Item
    label="Email"
    name="email"
    rules={[
      { required: true, message: "Vui lòng nhập email!" },
      { type: "email", message: "Email không hợp lệ!" },
    ]}
  >
    <Input />
  </Form.Item>

  <Form.Item
    label="Tên đăng nhập"
    name="username"
    rules={[{ required: true, message: "Vui lòng nhập tên đăng nhập!" }]}
  >
    <Input />
  </Form.Item>

  <Form.Item
    label="Mật khẩu"
    name="password"
    rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
    hasFeedback
  >
    <Input.Password />
  </Form.Item>

  <Form.Item
    label="Xác nhận mật khẩu"
    name="confirm"
    dependencies={['password']}
    hasFeedback
    rules={[
      { required: true, message: "Vui lòng xác nhận mật khẩu!" },
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || getFieldValue('password') === value) {
            return Promise.resolve();
          }
          return Promise.reject(new Error("Mật khẩu xác nhận không khớp!"));
        },
      }),
    ]}
  >
    <Input.Password />
  </Form.Item>

  <Form.Item name="remember" valuePropName="checked" label={null}>
    <Checkbox>Ghi nhớ tôi</Checkbox>
  </Form.Item>

  <Form.Item label={null}>
    <Button type="primary" htmlType="submit">
      Đăng ký
    </Button>
  </Form.Item>
</Form>


    </div>
  );
}

export default RegisterForm;
