import React, { useState, useEffect } from "react";
import { useNavigate, redirect } from "react-router-dom";
import Loading from "../../components/global/loading/Loading";
import { Col, Row, Button, Image, Typography } from "antd";
import {
  DownloadOutlined,
  BehanceOutlined,
  HomeOutlined,
  IdcardOutlined,
  FormatPainterOutlined,
  CustomerServiceOutlined,
  BulbOutlined,
  CommentOutlined,
  PictureOutlined,
} from "@ant-design/icons";

import style from "./home.module.css";

export function Home({ ...props }) {
  //navigate
  const navigate = useNavigate();
  const { Text } = Typography;


  const onClickSignUp = async () => {
    navigate(`/signup`);
  };

  const onClickLogin = async () => {
    navigate(`/login`);
  };



  return (
    <>
      <div className={style.appContainer}>
        <Row justify="end" className={style.pageHeader}>
          <Col>
            <Button key="Login" type="primary" className={style.loginBtn} onClick={onClickLogin}>
              Login
            </Button>
          </Col>
          <Col>
            <Button key="SignUp" className={style.signUpBtn} onClick={onClickSignUp}>
              SignUp
            </Button>
          </Col>
        </Row>
        <Row justify="center" className={style.mainDetailsContainer}>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Image
              // style={{objectFit:'contain',background:'#000000'}}
              width={"100%"}
              height={"360px"}
              src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png`}
              preview={false}
            />
          </Col>
          <Col xs={24} sm={24} md={16} lg={16} xl={16}>
            <Row className={`${style.nameRow}`}>
              <Col xs={20} sm={20} md={20} lg={20} xl={22} className={`${style.nameBox} ${style.boxItem}`}>
                <Text ellipsis={{ tooltip: true }}>Samuel Anderson</Text>
              </Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={2} className={`${style.loadBox} ${style.boxIcon}`}>
                <DownloadOutlined />
              </Col>
            </Row>
            <Row className={`${style.txtUpPerCase} ${style.expRow}`}>
              <Col xs={20} sm={20} md={20} lg={20} xl={22} className={`${style.expBox} ${style.boxItem}`}
              >
                <Text ellipsis={{ tooltip: true }}>
                  The experienced UI/UX Designer
                </Text>
              </Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={2} className={`${style.loadBox} ${style.boxIcon}`} >
                <BehanceOutlined />
              </Col>
            </Row>
            <Row className={`${style.txtUpPerCase} ${style.menuRow}`}>
            <Col xs={8} sm={8} md={4} lg={4} xl={4} className={`${style.menuItem} ${style.menuBox} ${style.bgGreen}`} >
                <HomeOutlined />
                <Text ellipsis={{ tooltip: true }}>home</Text>
              </Col>
              <Col xs={8} sm={8} md={4} lg={4} xl={4} className={`${style.menuItem} ${style.menuBox} ${style.bgBlue}`} >
                <IdcardOutlined />
                <Text ellipsis={{ tooltip: true }}>resume</Text>
              </Col>
              <Col xs={8} sm={8} md={4} lg={4} xl={4} className={`${style.menuItem} ${style.menuBox} ${style.bgPurple}`} >
                <FormatPainterOutlined />
                <Text ellipsis={{ tooltip: true }}>portfolio</Text>
              </Col>
              <Col xs={8} sm={8} md={4} lg={4} xl={4} className={`${style.menuItem} ${style.menuBox} ${style.bgOrange}`} >
                <CommentOutlined />
                <Text ellipsis={{ tooltip: true }}>contacts</Text>
              </Col>
              <Col xs={8} sm={8} md={4} lg={4} xl={4} className={`${style.menuItem} ${style.menuBox} ${style.bgRed}`} >
                <CustomerServiceOutlined />
                <Text ellipsis={{ tooltip: true }}>feedback</Text>
              </Col>
              <Col xs={8} sm={8} md={4} lg={4} xl={4} className={`${style.menuItem} ${style.menuBox} ${style.bgYellow}`} >
                <BulbOutlined />
                <Text ellipsis={{ tooltip: true }}>blog</Text>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row
          justify="start"
          className={`${style.subDetailsContainer} ${style.txtUpPerCase}`}
        >
        <Col xs={24} sm={24} md={24} lg={24} xl={16} className={`${style.subDetailsMain}`} >
            <Row justify="start" className={`${style.subDetailsHeader}`}>
              <Text ellipsis={{ tooltip: true }}>
                Gridus Resume Html Template
              </Text>
              <Text ellipsis={{ tooltip: true }}>
                Perfect for cv / resume or portfolio website
              </Text>
            </Row>
            <Row justify="start" className={`${style.subDetailsBody}`}>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                <Row>
                  <Col xs={4} className={`textCenter ${style.subDetailsIcon}`}>
                    <PictureOutlined />
                  </Col>
                  <Col xs={20}>
                    <Typography.Title level={3}>Topic</Typography.Title>
                    <Text >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </Text>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                <Row>
                  <Col xs={4} className={`textCenter ${style.subDetailsIcon}`}>
                    <PictureOutlined />
                  </Col>
                  <Col xs={20}>
                    <Typography.Title level={3}>Topic</Typography.Title>
                    <Text >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </Text>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                <Row>
                  <Col xs={4} className={`textCenter ${style.subDetailsIcon}`}>
                    <PictureOutlined />
                  </Col>
                  <Col xs={20}>
                    <Typography.Title level={3}>Topic</Typography.Title>
                    <Text >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </Text>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={8} className={`${style.subDetailsInfo}`} >
            <Row justify="start" className={`${style.subDetailsHeader}`}>
              <Text ellipsis={{ tooltip: true }}>Personal info</Text>
            </Row>
            <Row justify="start" className={`${style.subDetailsRow}`}>
              <Col xs={6}>
                <Text ellipsis={{ tooltip: true }}>NAME:</Text>
              </Col>
              <Col xs={18}>
                <Text ellipsis={{ tooltip: true }}>Samuel F. Anderson</Text>
              </Col>
            </Row>
            <Row justify="start" className={`${style.subDetailsRow}`}>
              <Col xs={6}>
                <Text ellipsis={{ tooltip: true }}>BIRTH DATE:</Text>
              </Col>
              <Col xs={18}>
                <Text ellipsis={{ tooltip: true }}>03/12/1980</Text>
              </Col>
            </Row>
            <Row justify="start" className={`${style.subDetailsRow}`}>
              <Col xs={6}>
                <Text ellipsis={{ tooltip: true }}>ADDRESS:</Text>
              </Col>
              <Col xs={18}>
                <Text ellipsis={{ tooltip: true }}>
                  1234, Direct drive, Daytona Beach, Fl, USA
                </Text>
              </Col>
            </Row>
            <Row justify="start" className={`${style.subDetailsRow}`}>
              <Col xs={6}>
                <Text ellipsis={{ tooltip: true }}>PHONE:</Text>
              </Col>
              <Col xs={18}>
                <Text ellipsis={{ tooltip: true }}>1 234 567 89 10</Text>
              </Col>
            </Row>
            <Row justify="start" className={`${style.subDetailsRow}`}>
              <Col xs={6}>
                <Text ellipsis={{ tooltip: true }}>EMAIL:</Text>
              </Col>
              <Col xs={18}>
                <Text ellipsis={{ tooltip: true }}>james@anderson.com</Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}
