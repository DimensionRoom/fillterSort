import React, { useState, useEffect, useContext } from "react";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate, redirect } from "react-router-dom";
import { Col, Row, Button, Typography, Form, Input,Modal} from "antd";
import Loading from "../../components/global/loading/Loading";
import { UserContext } from "../../configs/App/UserContext";

import style from "./login.module.css";

export function Login({ ...props }) {
  const navigate = useNavigate();
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const {userData,setUserData} = useContext(UserContext);
  const { Title } = Typography;

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    checkLogin(values)
  };

  const success = () => {
    Modal.success({
      title: 'ลงชื่อเข้าใช้สำเร็จ',
      centered:true,
      afterClose: goToMainPage,
      okText:'ตกลง'
    });
  };

  const error = () => {
    Modal.error({
      title: 'ลงชื่อเข้าใช้ไม่สำเร็จ',
      content: 'กรุณาตรวจสอบความถูกต้องของชื่อผู้ใช้และรหัสผ่าน',
    });
  };

  const goToMainPage = () =>{
    navigate(`/dashboard`)
  }

  useEffect(() => {
   console.log(userData)
  }, [userData])

  const checkLogin = async (values:any) => {
    const findUser =  userData.find((item:any) => (item.user === values.username))
    console.log('findUser',findUser)
    if (findUser) {
      if (values.password === findUser.password) {
        console.log('true')
        success()
        return true
      }
    }
    console.log('false')
    error()
    return false     
  }


  

  return (
    <>
    {loadingStatus ?<Loading></Loading>:null}
      <div className={style.appContainer}>
      <Title className={style.topicHeader}>Login</Title>
      <Form
      name="login"
      className={`${style.loginForm}`}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'กรุณากรอกชื่อผู้ใช้' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'กรุณากรอกรหัสผ่าน' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className={`${style.loginFormButton}`}>
          Log in
        </Button>
      </Form.Item>
    </Form>
      </div>
    </>
  );
}
