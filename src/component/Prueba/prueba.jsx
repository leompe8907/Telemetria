import { useState, useEffect } from 'react';
import { CV } from '../../cv/cv';

const Prueba = () =>{
  const [data,setData] = useState([])
  function handle(){
    CV.call(
      "getListOfSmartcards",
      {
        sessionId: localStorage.getItem("sessionID"),
        offset: 1,
        limit: 1000,
      },
      (result) =>{
        if(result["success"]){
            const setData = result["answer"]
            console.log(setData)
        }else{
            alert("failed to fetch result"+result["errorMessage"])
        }
      }
    )
  }
  useEffect(() =>{
    handle()
  },[])
}
export default Prueba