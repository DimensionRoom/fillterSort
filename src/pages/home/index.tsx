import React, { useState, useEffect } from "react";
import { useNavigate, redirect } from "react-router-dom";
import Loading from "../../components/global/loading/Loading";

import "./home.css";

export function Home({ ...props }) {
  //navigate
  const navigate = useNavigate();
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [loadingCurrent, setLoadingCurrent] = useState(0);
  const [loadingMax, setLoadingMax] = useState(100);

  useEffect(() => {
    if (loadingCurrent != loadingMax && loadingStatus) {
      setTimeout(() => setLoadingCurrent(loadingCurrent + 25), 500);
    } else {
      setTimeout(() => setLoadingStatus(false), 500);    
    }
  }, [loadingCurrent]);
 

  return (
    <>
      <div className="topMenu">
        <div className="row justifyContentEnd alignItemsBaseline">
         Menu
        </div>
      </div>
      <div className="appContainer">
        <div className="row justifyContentCenter">
          <div className="item logoContainer">
            Logo
          </div>
        </div>     
      </div>
    </>
  );
}
