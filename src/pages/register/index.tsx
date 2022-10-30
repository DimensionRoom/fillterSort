import React, { useState, useEffect, useContext } from "react";
import { useNavigate, redirect } from "react-router-dom";
import { Col, Row, Button, Typography, Form, Input,Modal} from "antd";
import { UserContext } from "../../configs/App/UserContext";

import Loading from "../../components/global/loading/Loading";

import style from "./register.module.css";

export function Register({ ...props }) {
  const { Title } = Typography;
  const navigate = useNavigate();
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const [form] = Form.useForm<{ email: string; password: string }>();
  const {userData,setUserData} = useContext(UserContext);

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 10 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 14,
        offset: 10,
      },
    },
  };
  const success = () => {
    Modal.success({
      content: 'ลงทะเบียนสำเร็จ',
      centered:true,
      afterClose: backHome,
      okText:'ตกลง'
    });
  };

  const backHome = () =>{
    navigate(`/`)
  }

  const onFinish = (values: any) => {
    console.log("Success:", values);
    setUserData([...userData,{user:values.email,password:values.password}])
    setLoadingStatus(true)
    setTimeout(() => {
      setLoadingStatus(false)
      success()
    }, 1000);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
    {loadingStatus ?<Loading></Loading>:null}
      <div className={style.appContainer}>
          <Title className={style.topicHeader}>Register</Title>
          <Form
            className={style.regisForm}
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            scrollToFirstError
          >
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  type: "email",
                  message: "กรุณากรอกอีเมลล์ให้ถูกต้อง",
                },
                {
                  required: true,
                  message: "กรุณากรอกอีเมลล์",
                },
              ]}
              hasFeedback
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  min:8,
                  message: "รหัสผ่านต้องไม่น้อยกว่า8ตัวอักษร",
                },
                {
                  pattern:/[a-zA-Z\d]+$/,
                  message: "รหัสผ่านต้องเป็นตัวอักษรภาษาอังกฤษเท่านั้น",
                },
                {
                  pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/,
                  message: "รหัสผ่านต้องประกอบด้วยตัวพิมพ์เล็กตัวพิมพ์ใหญ่และตัวเลข",
                },
              
                {
                  required: true,
                  message: "กรุณากรอกรหัสผ่าน",
                },
              ]}
              hasFeedback
              // validateStatus="warning"

            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="confirmPs"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "กรุณายืนยันรหัสผ่าน",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "กรุณายืนยันรหัสผ่านให้ตรงกันทั้งสองช่อง"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
      </div>
    </>
  );
}
