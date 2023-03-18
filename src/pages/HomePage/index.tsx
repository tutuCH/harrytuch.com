import { useState, useEffect, useRef, SetStateAction } from "react";
import { API_GET_DATA } from '../../global/constants'

import PortNavbar from "../../components/PortNavbar";
import Landing from "./sections/Landing"
import PersonalDetails from "./sections/PersonalDetails";
import Skills from "./sections/Skills";
import Experiences from "./sections/Experiences"
import Contact from "./sections/Contact";
import "./index.scss";
import Projects from "./sections/Projects";

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
      <Landing></Landing>
      <div className="description__container">
        <PersonalDetails></PersonalDetails>  
        <Skills></Skills>  
        <Experiences></Experiences> 
        <Projects></Projects>
        <Contact></Contact>
      </div>
      {/* <Edit add={setData} submittingStatus={submittingStatus} />
      <List listData={data} deleteData={setData} submittingStatus={submittingStatus} /> */}
    </div>
  );
};

export default HomePage;