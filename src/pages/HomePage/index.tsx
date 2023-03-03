import { useState, useEffect, useRef, SetStateAction } from "react";
import { API_GET_DATA } from '../../global/constants'

import Edit from "./sections/Edit";
import List from "./sections/List";
import PortNavbar from "../../components/PortNavbar";
import Landing from "./sections/landing/Landing"
import Details from "./sections/details/Details"
import "./index.scss";

async function fetchData(setData: { (value: SetStateAction<never[]>): void; (arg0: any): void; }) {
  const res = await fetch(API_GET_DATA)
  const { data } = await res.json()
  setData(data)
}

async function fetchSetData(data: never[]) {
  await fetch(API_GET_DATA, {
    method: "PUT",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ data })
  })
}

const HomePage = () => {
  const [data, setData] = useState([]);
  const submittingStatus = useRef(false);

  useEffect(() => {
    if (!submittingStatus.current){
      return
    }
    fetchSetData(data)
      .then(data => submittingStatus.current = false)
  }, [data])

  useEffect(() => {
    fetchData(setData)
  }, [])

  return (
    <div className="app">
      <PortNavbar></PortNavbar>
      <div className="container-lg">
        <Landing></Landing>
        <Details></Details>  
      </div>
      {/* <Edit add={setData} submittingStatus={submittingStatus} />
      <List listData={data} deleteData={setData} submittingStatus={submittingStatus} /> */}
    </div>
  );
};

export default HomePage;