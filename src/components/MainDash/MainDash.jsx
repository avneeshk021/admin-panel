import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
const MainDash = () => {
  // const [Date, setDate] = useState(0);

  //   setDate = () =>{
  //   var d1=new Date();
  //   setDate(d1);
  //  }
  
  return (
    <div className="MainDash">
      <div>Date</div>
      <h1>My App Task </h1>
      <Cards />
      <Table />
    </div>
  );
};

export default MainDash;
