import React, { useEffect, useState } from "react";
import {CV} from "../../cv/cv"

export const Telemetria = () => {

  const [on, setOn] = useState(true);

  function Telemetria(){
    CV.call("getListOfTelemetryRecords",
    {
        sessionId:localStorage.getItem("sessionID"),
        offset:1,
        limit:1000,
        // orderBy:"date",
        // orderDir:"ASC",
    },
    (result) => {
      if(result["success"]) {
        const data = result["answer"]
        console.log(data)
      } else{
        alert("failed to fetch result" + result["errorMessage"]);
      }
    })
  }

  useEffect(() => {
    if (on) {
      Telemetria();
      setOn(false);
    }
  }, [on]);


  return <div>Telemetria</div>;
};
