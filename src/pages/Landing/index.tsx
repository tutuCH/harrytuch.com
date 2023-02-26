import { useState, useEffect, useRef, SetStateAction } from "react";
import { API_GET_DATA } from '../../global/constants'

import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

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

const Landing = () => {
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
      <Edit add={setData} submittingStatus={submittingStatus} />
      <List listData={data} deleteData={setData} submittingStatus={submittingStatus} />
    </div>
  );
};

export default Landing;