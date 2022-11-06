import React, { useState, useEffect, useContext } from "react";
import { useNavigate, redirect } from "react-router-dom";
import {
  Col,
  Row,
  Button,
  Typography,
  Form,
  Input,
  Modal,
  AutoComplete,
} from "antd";
import Loading from "../../components/global/loading/Loading";
import { UserContext } from "../../configs/App/UserContext";
import { APIGetStoreData } from "../../services/api/storeDataAPI";

import style from "./dashboard.module.css";

export function DashBoard({ ...props }) {
  const navigate = useNavigate();
  const [loadingStatus, setLoadingStatus] = useState(false);
  const { userData, setUserData } = useContext(UserContext);
  const { Title } = Typography;
  const [allMakes, setAllMakes] = useState<any[]>([]);
  const [allCountry, setAllCountry] = useState<any[]>([]);
  const [selectCountry, setSelectCountry] = useState<any>("");
  const [countryList, setCountryList] = useState<any>([]);
  const [viewAllCountry, setViewAllCountry] = useState<any>([]);

  const getStoreData = async () => {
    let resultGetAPI: any = await APIGetStoreData();
    let replaceData = resultGetAPI.data
      .replace("?", "")
      .replace("(", "")
      .replace(")", "")
      .replace(";", "");
    let realData = JSON.parse(`${replaceData}`);
    setAllMakes(realData.Makes);
    console.log(realData);
  };

  const checkViewData =async (country:string) => {
    if (country != '') return
    classifyByCountry()
  }

  const classifyByCountry = async () => {
    let mockCnArr = allCountry;
    let newViewAllCountry: any = [];
    for (let i = 0; i < mockCnArr.length; i++) {
      let carCount = allMakes.filter(
        (item: any) =>
          item.make_country.toLowerCase() === mockCnArr[i].toLowerCase()
      );
      // console.log("ประเทศ", mockCnArr[i], carCount);
      newViewAllCountry.push({
        countryName: mockCnArr[i],
        country: carCount.map((item: any) => item.make_display),
      });
    }
    setViewAllCountry(newViewAllCountry);
    console.log("newViewAllCountry", newViewAllCountry);
  };

  const classifyBySelectCountry = async (country: string) => {
    if (country == '') return
    let newViewAllCountry: any = [];
    let carCount = allMakes.filter(
      (item: any) => item.make_country.toLowerCase() === country.toLowerCase()
    );
    if(carCount.length){
      newViewAllCountry.push({
        countryName: carCount[0].make_country,
        country: carCount.map((item: any) => item.make_display),
      });
    }
    setViewAllCountry(newViewAllCountry);
    setSelectCountry(country);
    console.log(carCount.length ? carCount[0].make_country : "", carCount);
  };

  const classifyCountry = async () => {
    let newAllArrCountry: any = allMakes.map((item: any) => item.make_country);
    let newArrCountry: any = new Set(newAllArrCountry);
    let newCountryList: any = [...newArrCountry].map((item: any) => ({
      value: item,
    }));
    setAllCountry([...newArrCountry]);
    setCountryList(newCountryList);
    // let newArrCountry: any = [];
    // let newCountryList: any = [];
    // for (let i = 0; i < allMakes.length; i++) {
    //   if (!newArrCountry.includes(allMakes[i]["make_country"])) {
    //     console.log(allMakes[i]["make_country"]);

    //     newArrCountry.push(allMakes[i]["make_country"]);
    //     newCountryList.push({value:allMakes[i]["make_country"]});
    //   }}
    //   setCountryList(newCountryList)
    //   setAllCountry(newArrCountry)
    //   console.log('allCountry',allCountry);
  };

  useEffect(() => {
    console.log('userData',userData);
    if(!userData.length){
       navigate(`/`)
    }
    getStoreData();
  }, [userData]);

  useEffect(() => {
    classifyByCountry();
  }, [allCountry]);

  useEffect(() => {
    classifyCountry();
  }, [allMakes]);

  return (
    <>
      <div className={style.appContainer}>
        <Title className={style.topicHeader}>Data Search</Title>
        <AutoComplete
          placeholder="พิมพ์ชื่อประเทศเพื่อค้นหา"
          style={{ width: 200 }}
          options={countryList}
          filterOption={(inputValue, option: any) =>
            option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
          onSelect={(val: string) => classifyBySelectCountry(val)}
          onChange={(val: string) => checkViewData(val)}
        />
        <div className={style.dataView}>
          <Row>
            <Col span={4}><Title level={4}>ประเทศ(จำนวนยี่ห้อ)</Title></Col>
            <Col span={20}><Title level={4}>ยี่ห้อ</Title></Col>
          </Row>
          <Row>
            {viewAllCountry.map((item: any,i:number) => (
              <div className={style.dataBox} key={i}>
                <Col span={4}><Title level={5}>{item.countryName} ({item.country.length})</Title></Col>
                <Col span={20}>
                  {item.country.join(', ')}
                </Col>
              </div>
            ))}
          </Row>
        </div> 
      </div>
      <div></div>
    </>
  );
}
