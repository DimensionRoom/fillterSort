import React from "react";
import { Col, Row,Spin } from "antd";
import style from "./Loading.module.css";
export interface Props {
  loadCurrent?:number;
  loadMax?:number;
}

export default ({loadCurrent,loadMax}:Props) => {
  return (
    <>
      <div className={`${style.loadingContainer}`}>
        <Row justify="center">
         <Spin></Spin>
        </Row>
      </div>
    </>
  );
}
