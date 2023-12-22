import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import UserService from "../../services/user.service";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleLogin } from "../../store/reducers/user";
import { notifyError } from "../../common/toastify";
import { ToastContainer } from "react-toastify";

type FieldType = {
  email?: string;
  password?: string;
};

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values: any) => {
    dispatch(handleLogin(formData) as any)
      .unwrap()
      .then((result:any) => {
        navigate("/");
      })
      .catch((err:any) => {
        console.log(err);
      });
   
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleChangeFormData = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <ToastContainer />
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChangeFormData}
        />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password
          name="password"
          value={formData.password}
          onChange={handleChangeFormData}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
