import React from "react";
import { useData } from "../context/DataContext";

const Summary = () => {
  const { data } = useData();
  
  return <div>Summary</div>;
};

export default Summary;
