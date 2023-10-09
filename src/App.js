import { React, useEffect, useState } from "react";
import { Form, Input, Button, Card, message, Spin, Skeleton } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./App.css";

const onFinish = async (values) => {
  console.log("Received values of form: ", values);
  let email = values["email"];
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(email)) {
    message.error("Invalid email");
    return;
  }
  
  
};
function App() {
  return (

      <div className="login-page">
        <Card className="login-card" title="Login">
          <Form name="normal_login" onFinish={onFinish}>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log out
              </Button>
            </Form.Item>
            <Form.Item>
              
            </Form.Item>
          </Form>
        </Card>
      </div>

  );
}

export default App;
