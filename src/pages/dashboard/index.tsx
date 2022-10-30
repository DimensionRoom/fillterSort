import React, { useState, useEffect, useContext } from "react";
import { useNavigate, redirect } from "react-router-dom";
import { Col, Row, Button, Typography, Form, Input, Modal } from "antd";
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
  const [selectCountry,setSelectCountry] = useState<any>('');
  const [countryList,setCountryList] = useState<any>([]);

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
    // for (let i = 0; i < realData.Makes.length; i++) {
    //   if (!allCountry.includes(realData.Makes[i]["make_country"])) {
    //     console.log(realData.Makes[i]["make_country"]);
    //     let newArrCountry: any = [];
    //     let newCountryList: any = [];
    //     newArrCountry = allCountry.push(realData.Makes[i]["make_country"]);
    //     newCountryList = countryList.push({value:realData.Makes[i]["make_country"]});

    //     if (i == realData.Makes.length) {
    //     setAllCountry(newArrCountry);
          
    //     }
    //     setCountryList(newCountryList)
    //     console.log('allCountry',allCountry);
    //   }
    //   if (!allCountry.includes(realData.Makes[i]['make_country'])) {
    //     let newArrayCountry:[] = allCountry.push(realData.Makes[i]['make_country'])
    //     setAllCountry(newArrayCountry)
    //     console.log(allCountry)
    //   }
    // }
    // let allCountry: any = [];
    // const findArea = realData.Makes.map((item: any) => {
    //   if (!allCountry.includes(item.make_country)) {
    //     allCountry.push(item.make_country);
    //   }
    // });
  };
  

  const classifyByCountry = async () => {
    console.log(countryList)
    let mockCnArr = ["Japan", "Russia", "Switzerland"];

    for (let i = 0; i < mockCnArr.length; i++) {
      let carCount = allMakes.filter(
        (item: any) => item.make_country.toLowerCase() === mockCnArr[i].toLowerCase()
      );
      let countryClassify = [];
      countryClassify.push(carCount);
      console.log(mockCnArr[i],countryClassify);
    }
  };

  const classifyBySelectCountry = async (country:string) => {
      let carCount = allMakes.filter(
        (item: any) => item.make_country.toLowerCase() === country.toLowerCase()
      );
      let countryClassify = [];
      countryClassify.push(carCount);
      setSelectCountry(country)
      console.log(country,countryClassify);
  };

  const classifyCountry = async () => {
    for (let i = 0; i < allMakes.length; i++) {
      if (!allCountry.includes(allMakes[i]["make_country"])) {
        console.log(allMakes[i]["make_country"]);
        let newArrCountry: any = [];
        let newCountryList: any = [];
        newArrCountry = allCountry.push(allMakes[i]["make_country"]);
        newCountryList = countryList.push({value:allMakes[i]["make_country"]});

        if (i == allMakes.length) {
        setAllCountry(newArrCountry);
          
        }
        setCountryList(newCountryList)
        console.log('allCountry',allCountry);
      }}
  }

  useEffect(() => {
    console.log(userData);
    getStoreData();
  }, [userData]);

  useEffect(() => {
    classifyCountry();
  }, [allMakes]);

  return (
    <>
      <div className={style.appContainer}>
        <Title className={style.topicHeader}>Data</Title>
       <input value={selectCountry} onChange={(e)=>classifyBySelectCountry(e.target.value)} type="text" />
      </div>
      <div>
    
      </div>
      
    </>
  );
}
