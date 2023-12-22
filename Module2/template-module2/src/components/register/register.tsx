import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import UserService from "../../services/user.service";
import { useNavigate } from "react-router-dom";
import { notifyError } from "../../common/toastify";
import { ToastContainer } from "react-toastify";

type FieldType = {
  email?: string;
  password?: string;
  address?: string;
};

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    address: "",
  });

  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      const userService = new UserService();
      const response = await userService.register(formData);
      if (response.status == 201) {
        navigate("/login", { state: true });
      }
    } catch (error:any) {
      notifyError(error.response.data)
    }
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
      <ToastContainer/>
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

      <Form.Item<FieldType>
        label="Address"
        name="address"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input
          name="address"
          value={formData.address}
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

export default Register;
